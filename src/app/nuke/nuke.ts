import { Component, DestroyRef, ElementRef, afterNextRender, computed, inject, signal, viewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { loadCesium } from './cesium-loader';
import { NukeEngine, SavedView, effects } from './engine';
import { TOOLS, TOOL_GROUPS, Tool, fmtW } from './tools';

interface Place { id: string; name: string; view: SavedView; thumb: string; }
interface Toast { id: number; emoji: string; html: string; }

const ACH: [string, string, string, string][] = [
  ['first', '💥', 'Primo botto', 'Fai esplodere qualcosa'],
  ['everest', '🏔️', "Più alto dell'Everest", 'Un fungo oltre 8.848 m'],
  ['karman', '🛰️', 'Oltre la linea di Kármán', 'Un fungo che arriva a 100 km'],
  ['tsar', '👑', 'Zar', 'Sgancia la Tsar Bomba'],
  ['dino', '🦖', 'Addio dinosauri', 'Chicxulub, di nuovo'],
  ['rod', '⚡', 'Bacchetta di Dio', "Un'asta di tungsteno dall'orbita"],
  ['duck', '🦆', 'Quack', 'Una papera di gomma gigante'],
  ['six', '🎆', 'Mezza dozzina', '6 esplosioni attive insieme'],
  ['chain', '⛓️', 'Effetto domino', 'Una reazione a catena da 9+ esplosioni'],
  ['icbm', '🚀', 'Intercontinentale', 'Un ICBM oltre 5.500 km'],
  ['cruise', '🛩️', 'Volo radente', 'Un missile da crociera a segno'],
  ['railgun', '🧲', 'Mach 7', 'Piazza un cannone a rotaia'],
  ['carpet', '✈️', 'Pioggia di ferro', 'Un bombardamento a tappeto'],
  ['sunset', '🌅', "Ora d'oro", 'Esplosione al tramonto'],
  ['night', '🌃', 'Notte bianca', 'Esplosione di notte'],
  ['area', '🗺️', 'Area metropolitana', '1.000 km² rasi al suolo in una sessione'],
];

const store = {
  get<T>(k: string, d: T): T { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k: string, v: unknown) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};

@Component({
  selector: 'app-nuke',
  imports: [MatIconModule, MatButtonModule, MatSliderModule, MatTooltipModule],
  templateUrl: './nuke.html',
  styleUrl: './nuke.scss',
})
export class Nuke {
  private readonly mapEl = viewChild.required<ElementRef<HTMLElement>>('map');
  private engine?: NukeEngine;

  protected readonly groups = TOOL_GROUPS;
  protected readonly ach = ACH;
  protected readonly fmtW = fmtW;
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
  protected readonly unlocked = signal(new Set<string>(store.get<string[]>('nsAch', [])));
  protected readonly toasts = signal<Toast[]>([]);
  protected readonly heading = signal(0);
  protected readonly places = signal<Place[]>(store.get<Place[]>('nsPlaces', []));
  protected readonly saving = signal(false);
  protected readonly teleporting = signal(false);
  protected readonly showInfo = signal(false);
  protected readonly showAch = signal(false);
  protected readonly token = signal(store.get<string>('ionTokenRaw', ''));

  protected readonly toolMeta = computed(() => {
    const t = this.tool();
    switch (t.kind) {
      case 'duck': return 'gomma · squeak';
      case 'railgun': return `${fmtW(t.W)} per colpo · automatico`;
      case 'carpet': return `bombe da ${fmtW(t.W)} · 3 aerei`;
      case 'cruise': return `${fmtW(t.W)} · convenzionale`;
      case 'icbm': return `testata ${fmtW(t.W)}`;
      case 'asteroid': return `${fmtW(t.W)} · ${t.air ? 'esplode in quota' : 'impatto'}`;
      case 'rod': return `${fmtW(t.W)} · impatto cinetico`;
      default: return `${fmtW(t.W)} · ${t.air ? 'in aria' : 'al suolo'}`;
    }
  });
  protected readonly radii = computed(() => {
    const t = this.tool();
    if (!['nuke', 'asteroid', 'rod', 'icbm'].includes(t.kind)) return [];
    const E = effects(t.W, t.air, t.hob);
    return [
      ['Palla di fuoco', E.Rfb, '#ffd84a'], ['Radiazioni 500 rem', E.rrad, '#55dd66'],
      ['20 psi · distruzione totale', E.r20, '#ff3030'], ['5 psi · edifici crollati', E.r5, '#ff8a2a'],
      ['Ustioni di 3° grado', E.rth, '#ffb84d'], ['1 psi · vetri rotti', E.r1, '#7fb2ff'],
      ['Altezza del fungo', E.H, '#e6e9ee'],
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

  private toastId = 0;

  constructor() {
    const destroy = inject(DestroyRef);
    afterNextRender(async () => {
      try {
        const Cesium = await loadCesium();
        const tok = this.token();
        if (tok) Cesium.Ion.defaultAccessToken = tok;
        this.engine = new NukeEngine(this.mapEl().nativeElement, this.tool(), {
          stats: (s) => this.stats.set(s),
          toast: (e, h) => this.pushToast(e, h),
          unlock: (id) => this.unlock(id),
          hint: (h) => this.hint.set(h),
          status: (s) => this.status.set(s),
          heading: (d) => this.heading.set(d),
        });
        (window as any).__nuke = this.engine; // handy from the devtools console
        this.engine.setSound(this.sound());
        this.engine.setSunHour(this.sunHour());
        this.engine.setArmed(false);
        this.loading.set(false);
      } catch {
        this.status.set('Impossibile caricare il motore 3D (CesiumJS). Controlla la connessione.');
      }
    });

    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement;
      if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) return;
      const k = e.key.toLowerCase();
      if (k === 'd') this.toggleArmed();
      else if (k === 'k') this.toggleChain();
      else if (k === 'l') this.toggleLabels();
      else if (k === 'escape') { this.setArmed(false); this.saving.set(false); }
    };
    document.addEventListener('keydown', onKey);
    destroy.onDestroy(() => { document.removeEventListener('keydown', onKey); this.engine?.dispose(); });
  }

  // ---- tools & toggles ----
  protected pick(t: Tool) { this.tool.set(t); this.engine?.setTool(t); if (!this.armed()) this.setArmed(true); }
  protected setArmed(v: boolean) { this.armed.set(v); this.engine?.setArmed(v); }
  protected toggleArmed() { this.setArmed(!this.armed()); }
  protected toggleChain() { this.chain.update((v) => !v); this.engine?.setChain(this.chain()); }
  protected toggleSound() { this.sound.update((v) => !v); store.set('nsSound', this.sound()); this.engine?.setSound(this.sound()); }
  protected toggleRings() { this.rings.update((v) => !v); this.engine?.setRings(this.rings()); }
  protected toggleLabels() { this.labels.update((v) => !v); this.engine?.setLabels(this.labels()); }
  protected clear() { this.engine?.clear(); }
  protected setSun(h: number) { this.sunHour.set(h); this.engine?.setSunHour(h); }
  protected northUp() { this.engine?.northUp(); }

  protected async search(input: HTMLInputElement) {
    const q = input.value.trim();
    if (q.length < 2 || !this.engine) return;
    const ok = await this.engine.search(q);
    if (ok) input.blur(); else this.flash('Nessun risultato per “' + q + '”');
  }

  // ---- places ----
  protected startSave() { this.saving.set(true); }
  protected async confirmSave(input: HTMLInputElement) {
    if (!this.engine) return;
    const name = input.value.trim() || `Luogo ${this.places().length + 1}`;
    const view = this.engine.view();
    const thumb = await this.engine.thumbnail();
    const p: Place = { id: Date.now().toString(36), name, view, thumb };
    this.places.update((l) => [...l, p]);
    store.set('nsPlaces', this.places());
    this.saving.set(false);
    this.pushToast('📍', `Luogo salvato: <b>${escapeHtml(name)}</b>`);
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
    if (a) { this.pushToast(a[1], `Trofeo: <b>${a[2]}</b>`); this.engine?.chime(); }
  }
  private pushToast(emoji: string, html: string) {
    const t = { id: ++this.toastId, emoji, html };
    this.toasts.update((l) => [...l, t]);
    setTimeout(() => this.toasts.update((l) => l.filter((x) => x.id !== t.id)), 3800);
  }
  private flash(text: string) { this.status.set(text); setTimeout(() => this.status() === text && this.status.set(''), 4000); }

  protected saveToken(v: string) {
    store.set('ionTokenRaw', v.trim());
    location.reload();
  }

  protected km(m: number) {
    return m < 1000 ? Math.round(m) + ' m' : (m / 1000).toLocaleString('it-IT', { maximumFractionDigits: m < 10000 ? 2 : 0 }) + ' km';
  }
  protected areaLabel = computed(() => Math.round(this.stats().area).toLocaleString('it-IT'));
  protected cloudLabel = computed(() => (this.stats().cloud / 1000).toLocaleString('it-IT', { maximumFractionDigits: 1 }));
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}
