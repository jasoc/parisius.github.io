import { Component, DestroyRef, ElementRef, afterNextRender, computed, inject, signal, viewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { loadCesium } from './cesium-loader';

declare const ngDevMode: unknown;
import { NukeEngine, SavedView, effects } from './engine';
import { TOOLS, TOOL_GROUPS, Tool, fmtW } from './tools';

interface Place { id: string; name: string; view: SavedView; thumb: string; }

const store = {
  get<T>(k: string, d: T): T { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k: string, v: unknown) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};

@Component({
  selector: 'app-nuke',
  imports: [MatIconModule, MatButtonModule, MatButtonToggleModule, MatMenuModule, MatProgressSpinnerModule, MatSliderModule, MatSnackBarModule, MatTooltipModule],
  templateUrl: './nuke.html',
  styleUrl: './nuke.scss',
  host: { '[class.mobile]': 'mobile()' },
})
export class Nuke {
  private readonly mapEl = viewChild.required<ElementRef<HTMLElement>>('map');
  private readonly fileEl = viewChild.required<ElementRef<HTMLInputElement>>('file');
  private readonly snack = inject(MatSnackBar);
  private engine?: NukeEngine;

  protected readonly groups = TOOL_GROUPS;
  protected readonly fmtW = fmtW;
  protected readonly loading = signal(true);
  protected readonly mobile = signal(matchMedia('(max-width: 760px)').matches);
  protected readonly panelOpen = signal(!matchMedia('(max-width: 760px)').matches);
  protected readonly tool = signal<Tool>(TOOLS.find((t) => t.id === 'littleboy')!);
  protected readonly armed = signal(false);
  protected readonly opts = signal<string[]>(['rings', ...(store.get('nsSound', true) ? ['sound'] : [])]);
  /** UTC hour: decides which half of the globe is lit. Starts at the real current time. */
  protected readonly sunHour = signal(Math.round((new Date().getUTCHours() + new Date().getUTCMinutes() / 60) * 4) / 4);
  protected readonly hint = signal('');
  protected readonly status = signal('');
  protected readonly stats = signal({ count: 0, area: 0, cloud: 0 });
  protected readonly abducted = signal(0);
  protected readonly heading = signal(0);
  protected readonly places = signal<Place[]>(store.get<Place[]>('nsPlaces', []));
  protected readonly placesOpen = signal(store.get('nsPlacesOpen', false));
  protected readonly saving = signal(false);
  protected readonly teleporting = signal(false);
  protected readonly showInfo = signal(false);
  protected readonly token = signal(store.get<string>('ionTokenRaw', ''));

  protected readonly toolMeta = computed(() => {
    const t = this.tool();
    switch (t.kind) {
      case 'duck': return 'rubber · squeak';
      case 'ufo': return 'tractor beam';
      case 'railgun': return `${fmtW(t.W)}/shot · auto`;
      case 'carpet': return `${fmtW(t.W)} bombs · 3 bombers`;
      case 'cruise': return `${fmtW(t.W)} · conventional`;
      case 'asteroid': return `${fmtW(t.W)} · ${t.air ? 'airburst' : 'impact'}`;
      case 'rod': return `${fmtW(t.W)} · kinetic`;
      default: return `${fmtW(t.W)} · ${t.air ? 'airburst' : 'surface'}`;
    }
  });
  protected readonly radii = computed(() => {
    const t = this.tool();
    if (!['nuke', 'asteroid', 'rod'].includes(t.kind)) return [];
    const E = effects(t.W, t.air, t.hob);
    return [
      ['Fireball', E.Rfb, '#ffd84a'], ['Radiation 500 rem', E.rrad, '#55dd66'],
      ['20 psi · total destruction', E.r20, '#ff3b30'], ['5 psi · buildings collapse', E.r5, '#ff9500'],
      ['3rd-degree burns', E.rth, '#ffb84d'], ['1 psi · windows shatter', E.r1, '#4fc3ff'],
      ['Cloud top', E.H, '#e6e9ee'],
    ] as [string, number, string][];
  });
  protected readonly sunLabel = computed(() => {
    const h = this.sunHour(), hh = Math.floor(h), mm = Math.round((h - hh) * 60);
    return `${String(hh % 24).padStart(2, '0')}:${String(mm).padStart(2, '0')} UTC`;
  });
  protected readonly sunIcon = computed(() => 'light_mode');
  protected readonly statLine = computed(() => {
    const s = this.stats();
    return `${s.count} blasts · ${Math.round(s.area).toLocaleString('en-US')} km² · ${(s.cloud / 1000).toFixed(1)} km`;
  });

  constructor() {
    const destroy = inject(DestroyRef);
    afterNextRender(async () => {
      try {
        const Cesium = await loadCesium();
        if (this.token()) Cesium.Ion.defaultAccessToken = this.token();
        this.engine = new NukeEngine(this.mapEl().nativeElement, this.tool(), {
          stats: (s) => this.stats.set(s),
          toast: (e, h) => this.toast(`${e}  ${h}`),
          unlock: () => {},
          hint: (h) => this.hint.set(h),
          status: (s) => this.status.set(s),
          heading: (d) => this.heading.set(d),
          abducted: (n) => this.abducted.set(n),
        });
        // dev builds with ?debug: script detonations and camera moves from the devtools console
        // (ngDevMode is constant-folded to false by production builds, so this is stripped from them)
        if (typeof ngDevMode !== 'undefined' && ngDevMode && new URLSearchParams(location.search).has('debug')) (window as any).__nuke = this.engine;
        this.applyOpts(this.opts(), []);
        this.engine.setSunHour(this.sunHour());
        this.engine.setArmed(false);
        this.loading.set(false);
      } catch {
        this.status.set('Could not load the 3D engine (CesiumJS). Check your connection.');
      }
    });

    const mq = matchMedia('(max-width: 760px)');
    const onMq = () => { this.mobile.set(mq.matches); this.panelOpen.set(!mq.matches); };
    mq.addEventListener('change', onMq);

    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement;
      if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) return;
      const k = e.key.toLowerCase();
      const flip = (o: string) => this.setOpts(this.opts().includes(o) ? this.opts().filter((x) => x !== o) : [...this.opts(), o]);
      if (k === 'd') this.toggleArmed();
      else if (k === 'k') flip('chain');
      else if (k === 'l') flip('labels');
      else if (k === 'm') flip('launch');
      else if (k === 'escape') { this.setArmed(false); this.saving.set(false); }
    };
    document.addEventListener('keydown', onKey);
    destroy.onDestroy(() => { document.removeEventListener('keydown', onKey); mq.removeEventListener('change', onMq); this.engine?.dispose(); });
  }

  // ---- tools & options ----
  protected pick(t: Tool) {
    this.tool.set(t);
    this.engine?.setTool(t);
    if (!this.armed()) this.setArmed(true);
    if (this.mobile()) this.panelOpen.set(false); // let the map breathe
  }
  protected setArmed(v: boolean) { this.armed.set(v); this.engine?.setArmed(v); }
  protected toggleArmed() { this.setArmed(!this.armed()); }
  protected setOpts(v: string[]) { const prev = this.opts(); this.opts.set(v); this.applyOpts(v, prev); }
  private applyOpts(v: string[], prev: string[]) {
    const e = this.engine; if (!e) return;
    const ch = (k: string) => v.includes(k) !== prev.includes(k) || !prev.length;
    if (ch('chain')) e.setChain(v.includes('chain'));
    if (ch('sound')) { e.setSound(v.includes('sound')); store.set('nsSound', v.includes('sound')); }
    if (ch('rings')) e.setRings(v.includes('rings'));
    if (ch('labels')) e.setLabels(v.includes('labels'));
    if (ch('launch')) { e.setLaunchMode(v.includes('launch')); if (v.includes('launch') && !this.armed()) this.setArmed(true); }
  }
  protected has(o: string) { return this.opts().includes(o); }
  protected clear() { this.engine?.clear(); }
  protected setSun(h: number) { this.sunHour.set(h); this.engine?.setSunHour(h); }
  protected reset() { this.engine?.reset(); }

  protected async search(input: HTMLInputElement) {
    const q = input.value.trim();
    if (q.length < 2 || !this.engine) return;
    if (await this.engine.search(q)) { input.blur(); if (this.mobile()) this.panelOpen.set(false); }
    else this.toast(`No results for “${q}”`);
  }

  // ---- places ----
  protected togglePlaces() { this.placesOpen.update((v) => !v); store.set('nsPlacesOpen', this.placesOpen()); }
  protected async confirmSave(input: HTMLInputElement) {
    if (!this.engine) return;
    const name = input.value.trim() || `Place ${this.places().length + 1}`;
    const view = this.engine.view();
    (this.engine as any).poke?.();
    const thumb = await this.engine.thumbnail();
    this.setPlaces([...this.places(), { id: Date.now().toString(36), name, view, thumb }]);
    this.saving.set(false);
    this.toast(`📍  Saved “${name}”`);
  }
  protected go(p: Place) {
    if (!this.engine) return;
    this.teleporting.set(true);
    setTimeout(() => { this.engine!.teleport(p.view); setTimeout(() => this.teleporting.set(false), 120); }, 180);
  }
  protected remove(p: Place, e: Event) {
    e.stopPropagation();
    this.setPlaces(this.places().filter((x) => x.id !== p.id));
  }
  private setPlaces(l: Place[]) { this.places.set(l); store.set('nsPlaces', l); }

  protected exportPlaces() {
    const blob = new Blob([JSON.stringify({ app: 'nuke-sim', version: 1, places: this.places() }, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'nuke-sim-places.json';
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }
  protected importPlaces() { this.fileEl().nativeElement.click(); }
  protected async onImport(input: HTMLInputElement) {
    const f = input.files?.[0];
    input.value = '';
    if (!f) return;
    try {
      const data = JSON.parse(await f.text());
      const list: Place[] = (Array.isArray(data) ? data : data.places || []).filter((p: Place) => p && p.view && typeof p.view.lon === 'number');
      const known = new Set(this.places().map((p) => p.id));
      const added = list.filter((p) => !known.has(p.id)).map((p) => ({ id: p.id || Math.random().toString(36).slice(2), name: String(p.name || 'Place'), view: p.view, thumb: p.thumb || '' }));
      this.setPlaces([...this.places(), ...added]);
      this.placesOpen.set(true);
      this.toast(`📥  Imported ${added.length} place${added.length === 1 ? '' : 's'}`);
    } catch {
      this.toast('That file is not a valid places export');
    }
  }

  private toast(text: string) {
    this.snack.open(text, undefined, { duration: 3000, verticalPosition: 'top', horizontalPosition: 'center' });
  }
  protected saveToken(v: string) { store.set('ionTokenRaw', v.trim()); location.reload(); }
  protected km(m: number) {
    return m < 1000 ? Math.round(m) + ' m' : (m / 1000).toLocaleString('en-US', { maximumFractionDigits: m < 10000 ? 2 : 0 }) + ' km';
  }
}
