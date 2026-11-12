import { Component, DestroyRef, ElementRef, afterNextRender, computed, inject, signal, viewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { loadCesium } from './cesium-loader';
import { NukeEngine, SavedView, effects } from './engine';
import { TOOLS, TOOL_GROUPS, Tool, fmtW } from './tools';

interface Place { id: string; name: string; view: SavedView; thumb: string; }

const ACH: [string, string, string, string][] = [
  ['first', '💥', 'First blast', 'Blow something up'],
  ['everest', '🏔️', 'Taller than Everest', 'A mushroom cloud above 8,848 m'],
  ['karman', '🛰️', 'Past the Kármán line', 'A cloud reaching 100 km'],
  ['tsar', '👑', 'Tsar', 'Drop the Tsar Bomba'],
  ['dino', '🦖', 'Bye bye dinosaurs', 'Chicxulub, again'],
  ['rod', '⚡', 'Rod from God', 'A tungsten rod from orbit'],
  ['duck', '🦆', 'Quack', 'A giant rubber duck'],
  ['ufo', '🛸', 'We come in peace', 'Summon a UFO'],
  ['abduct', '🐄', 'Probing season', '100 people beamed up'],
  ['six', '🎆', 'Half a dozen', '6 blasts alive at once'],
  ['chain', '⛓️', 'Domino effect', 'A chain reaction of 9+ blasts'],
  ['icbm', '🚀', 'Intercontinental', 'An ICBM flying over 5,500 km'],
  ['cruise', '🛩️', 'Nap of the earth', 'A cruise missile on target'],
  ['railgun', '🧲', 'Mach 7', 'Place a railgun turret'],
  ['carpet', '✈️', 'Iron rain', 'A carpet bombing run'],
  ['sunset', '🌅', 'Golden hour', 'A blast at sunset'],
  ['night', '🌃', 'White night', 'A blast at night'],
  ['area', '🗺️', 'Metro area', '1,000 km² flattened in one session'],
];

const store = {
  get<T>(k: string, d: T): T { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k: string, v: unknown) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};

@Component({
  selector: 'app-nuke',
  imports: [
    MatIconModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatChipsModule, MatDividerModule, MatFormFieldModule,
    MatInputModule, MatListModule, MatProgressSpinnerModule, MatSliderModule, MatSnackBarModule, MatTooltipModule,
  ],
  templateUrl: './nuke.html',
  styleUrl: './nuke.scss',
})
export class Nuke {
  private readonly mapEl = viewChild.required<ElementRef<HTMLElement>>('map');
  private readonly snack = inject(MatSnackBar);
  private engine?: NukeEngine;

  protected readonly groups = TOOL_GROUPS;
  protected readonly ach = ACH;
  protected readonly loading = signal(true);
  protected readonly tool = signal<Tool>(TOOLS.find((t) => t.id === 'littleboy')!);
  protected readonly armed = signal(false);
  protected readonly chain = signal(false);
  protected readonly sound = signal(store.get('nsSound', true));
  protected readonly rings = signal(true);
  protected readonly labels = signal(false);
  protected readonly sunHour = signal(14);
  protected readonly hint = signal('');
  protected readonly status = signal('');
  protected readonly stats = signal({ count: 0, area: 0, cloud: 0 });
  protected readonly abducted = signal(0);
  protected readonly unlocked = signal(new Set<string>(store.get<string[]>('nsAch', [])));
  protected readonly heading = signal(0);
  protected readonly places = signal<Place[]>(store.get<Place[]>('nsPlaces', []));
  protected readonly saving = signal(false);
  protected readonly teleporting = signal(false);
  protected readonly showInfo = signal(false);
  protected readonly showAch = signal(false);
  protected readonly token = signal(store.get<string>('ionTokenRaw', ''));

  /** toggle group value, derived from the individual switches */
  protected readonly toggles = computed(() =>
    [this.chain() && 'chain', this.sound() && 'sound', this.rings() && 'rings', this.labels() && 'labels'].filter(Boolean) as string[]);

  protected readonly toolMeta = computed(() => {
    const t = this.tool();
    switch (t.kind) {
      case 'duck': return 'rubber · squeak';
      case 'ufo': return 'tractor beam · harmless-ish';
      case 'railgun': return `${fmtW(t.W)} per shot · automatic`;
      case 'carpet': return `${fmtW(t.W)} bombs · 3 bombers`;
      case 'cruise': return `${fmtW(t.W)} · conventional`;
      case 'icbm': return `${fmtW(t.W)} warhead · needs a silo`;
      case 'asteroid': return `${fmtW(t.W)} · ${t.air ? 'airburst' : 'impact'}`;
      case 'rod': return `${fmtW(t.W)} · kinetic impact`;
      default: return `${fmtW(t.W)} · ${t.air ? 'airburst' : 'surface burst'}`;
    }
  });
  protected readonly radii = computed(() => {
    const t = this.tool();
    if (!['nuke', 'asteroid', 'rod', 'icbm'].includes(t.kind)) return [];
    const E = effects(t.W, t.air, t.hob);
    return [
      ['Fireball', E.Rfb, '#ffd84a'], ['Radiation 500 rem', E.rrad, '#55dd66'],
      ['20 psi · total destruction', E.r20, '#ff3030'], ['5 psi · buildings collapse', E.r5, '#ff8a2a'],
      ['3rd-degree burns', E.rth, '#ffb84d'], ['1 psi · windows shatter', E.r1, '#7fb2ff'],
      ['Mushroom cloud top', E.H, '#e6e9ee'],
    ] as [string, number, string][];
  });
  protected readonly sunLabel = computed(() => {
    const h = this.sunHour(), hh = Math.floor(h), mm = Math.round((h - hh) * 60);
    return `${String(hh % 24).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
  });
  protected readonly sunIcon = computed(() => {
    const h = this.sunHour();
    return h < 5.5 || h > 19.5 ? 'dark_mode' : h < 8 || h > 17 ? 'wb_twilight' : 'light_mode';
  });
  protected readonly areaLabel = computed(() => Math.round(this.stats().area).toLocaleString('en-US'));
  protected readonly cloudLabel = computed(() => (this.stats().cloud / 1000).toLocaleString('en-US', { maximumFractionDigits: 1 }));

  constructor() {
    const destroy = inject(DestroyRef);
    afterNextRender(async () => {
      try {
        const Cesium = await loadCesium();
        const tok = this.token();
        if (tok) Cesium.Ion.defaultAccessToken = tok;
        this.engine = new NukeEngine(this.mapEl().nativeElement, this.tool(), {
          stats: (s) => this.stats.set(s),
          toast: (e, h) => this.toast(`${e}  ${h}`),
          unlock: (id) => this.unlock(id),
          hint: (h) => this.hint.set(h),
          status: (s) => this.status.set(s),
          heading: (d) => this.heading.set(d),
          abducted: (n) => { this.abducted.set(n); if (n >= 100) this.unlock('abduct'); },
        });
        (window as any).__nuke = this.engine; // handy from the devtools console
        this.engine.setSound(this.sound());
        this.engine.setSunHour(this.sunHour());
        this.engine.setArmed(false);
        this.loading.set(false);
      } catch {
        this.status.set('Could not load the 3D engine (CesiumJS). Check your connection.');
      }
    });

    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement;
      if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) return;
      const k = e.key.toLowerCase();
      if (k === 'd') this.toggleArmed();
      else if (k === 'k') this.setToggles(this.toggles().includes('chain') ? this.toggles().filter((x) => x !== 'chain') : [...this.toggles(), 'chain']);
      else if (k === 'l') this.setToggles(this.toggles().includes('labels') ? this.toggles().filter((x) => x !== 'labels') : [...this.toggles(), 'labels']);
      else if (k === 'escape') { this.setArmed(false); this.saving.set(false); }
    };
    document.addEventListener('keydown', onKey);
    destroy.onDestroy(() => { document.removeEventListener('keydown', onKey); this.engine?.dispose(); });
  }

  // ---- tools & toggles ----
  protected pick(t: Tool | undefined) {
    if (!t) return;
    this.tool.set(t);
    this.engine?.setTool(t);
    if (!this.armed()) this.setArmed(true);
  }
  protected toolById(id: string) { return TOOLS.find((t) => t.id === id); }
  protected setArmed(v: boolean) { this.armed.set(v); this.engine?.setArmed(v); }
  protected toggleArmed() { this.setArmed(!this.armed()); }
  protected setToggles(v: string[]) {
    const on = (k: string) => v.includes(k);
    if (on('chain') !== this.chain()) { this.chain.set(on('chain')); this.engine?.setChain(this.chain()); }
    if (on('sound') !== this.sound()) { this.sound.set(on('sound')); store.set('nsSound', this.sound()); this.engine?.setSound(this.sound()); }
    if (on('rings') !== this.rings()) { this.rings.set(on('rings')); this.engine?.setRings(this.rings()); }
    if (on('labels') !== this.labels()) { this.labels.set(on('labels')); this.engine?.setLabels(this.labels()); }
  }
  protected clear() { this.engine?.clear(); }
  protected setSun(h: number) { this.sunHour.set(h); this.engine?.setSunHour(h); }
  protected reset() { this.engine?.reset(); }

  protected async search(input: HTMLInputElement) {
    const q = input.value.trim();
    if (q.length < 2 || !this.engine) return;
    if (await this.engine.search(q)) input.blur();
    else this.toast(`No results for “${q}”`);
  }

  // ---- places ----
  protected async confirmSave(input: HTMLInputElement) {
    if (!this.engine) return;
    const name = input.value.trim() || `Place ${this.places().length + 1}`;
    const view = this.engine.view();
    (this.engine as any).poke?.();
    const thumb = await this.engine.thumbnail();
    this.places.update((l) => [...l, { id: Date.now().toString(36), name, view, thumb }]);
    store.set('nsPlaces', this.places());
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
    this.places.update((l) => l.filter((x) => x.id !== p.id));
    store.set('nsPlaces', this.places());
  }

  // ---- achievements & toasts ----
  private unlock(id: string) {
    if (this.unlocked().has(id)) return;
    const s = new Set(this.unlocked()); s.add(id);
    this.unlocked.set(s); store.set('nsAch', [...s]);
    const a = ACH.find((x) => x[0] === id);
    if (a) { this.toast(`${a[1]}  Trophy unlocked: ${a[2]}`); this.engine?.chime(); }
  }
  private toast(text: string) {
    this.snack.open(text, undefined, { duration: 3500, verticalPosition: 'top', horizontalPosition: 'center' });
  }

  protected saveToken(v: string) {
    store.set('ionTokenRaw', v.trim());
    location.reload();
  }
  protected km(m: number) {
    return m < 1000 ? Math.round(m) + ' m' : (m / 1000).toLocaleString('en-US', { maximumFractionDigits: m < 10000 ? 2 : 0 }) + ' km';
  }
}
