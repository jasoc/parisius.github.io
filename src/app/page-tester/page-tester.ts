import { Component, DestroyRef, ElementRef, afterNextRender, computed, inject, signal, viewChild } from '@angular/core';

interface LogEvent {
  id: number;
  time: string;
  type: string;
  msg: string;
}

const MAX_EVENTS = 300;
const MOVE_STEP = 140; // px of mouse travel per "moved" event
const IDLE_MS = 6000;

const TYPE_COLORS: Record<string, string> = {
  SYS: '#7fdbff',
  NET: '#7fdbff',
  MOUSE: '#39ff14',
  CLICK: '#ffd400',
  WHEEL: '#39ff14',
  KEY: '#ff4ecd',
  TOUCH: '#ffd400',
  CLIP: '#ff9f1c',
  SELECT: '#ff9f1c',
  DRAG: '#ff9f1c',
  WINDOW: '#7fdbff',
  IDLE: '#5c6370',
};

@Component({
  selector: 'app-page-tester',
  templateUrl: './page-tester.html',
  styleUrl: './page-tester.scss',
})
export class PageTester {
  protected readonly events = signal<LogEvent[]>([]);
  protected readonly total = signal(0);
  protected readonly counts = signal<Record<string, number>>({});
  protected readonly countList = computed(() =>
    Object.entries(this.counts())
      .sort((a, b) => b[1] - a[1])
      .map(([type, n]) => ({ type, n, color: TYPE_COLORS[type] ?? '#39ff14' })),
  );
  protected readonly session = Math.floor(Math.random() * 0xffffff).toString(16).toUpperCase().padStart(6, '0');
  protected readonly colorOf = (t: string) => TYPE_COLORS[t] ?? '#39ff14';

  private readonly list = viewChild<ElementRef<HTMLElement>>('list');
  private nextId = 0;

  constructor() {
    const ac = new AbortController();
    inject(DestroyRef).onDestroy(() => {
      ac.abort();
      clearTimeout(idleTimer);
      clearTimeout(wheelTimer);
      clearTimeout(resizeTimer);
    });
    const on = (target: EventTarget, type: string, fn: (e: any) => void, opts: AddEventListenerOptions = {}) =>
      target.addEventListener(type, fn, { ...opts, signal: ac.signal });

    // ---------- system info ----------
    const nav = navigator as any;
    this.log('SYS', `session 0x${this.session} opened · ${new Date().toString().split(' (')[0]}`);
    this.log('SYS', `agent ${navigator.userAgent}`);
    this.log('SYS', `screen ${screen.width}×${screen.height} @${devicePixelRatio}x · viewport ${innerWidth}×${innerHeight} · ${screen.colorDepth}-bit`);
    this.log('SYS', `locale ${navigator.language} · tz ${Intl.DateTimeFormat().resolvedOptions().timeZone} · ${navigator.hardwareConcurrency ?? '?'} cores${nav.deviceMemory ? ' · ~' + nav.deviceMemory + ' GB RAM' : ''}`);
    this.log('SYS', `input: ${matchMedia('(pointer: fine)').matches ? 'fine pointer' : 'coarse pointer'} · ${navigator.maxTouchPoints} touch points · ${matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'} scheme`);
    if (nav.connection) this.log('NET', `link ${nav.connection.effectiveType ?? '?'} · ~${nav.connection.downlink ?? '?'} Mb/s · rtt ${nav.connection.rtt ?? '?'} ms`);
    this.log('SYS', 'listening… move, click, type, scroll, copy, drag, resize — everything is logged');

    // ---------- mouse ----------
    let travel = 0;
    let lastX = -1, lastY = -1, moveStart = 0;
    on(document, 'mousemove', (e: MouseEvent) => {
      if (lastX >= 0) {
        travel += Math.hypot(e.clientX - lastX, e.clientY - lastY);
        if (!moveStart) moveStart = e.timeStamp;
      }
      lastX = e.clientX; lastY = e.clientY;
      if (travel >= MOVE_STEP) {
        const dt = Math.max(16, e.timeStamp - moveStart);
        this.log('MOUSE', `moved ${Math.round(travel)}px → (${e.clientX}, ${e.clientY}) · ${Math.round((travel / dt) * 1000)} px/s`);
        travel = 0; moveStart = 0;
      }
    });
    const btn = ['left', 'middle', 'right', 'back', 'forward'];
    let downAt = 0;
    on(document, 'mousedown', (e: MouseEvent) => (downAt = e.timeStamp));
    on(document, 'mouseup', (e: MouseEvent) => {
      const held = e.timeStamp - downAt;
      if (held > 600) this.log('CLICK', `${btn[e.button] ?? 'button ' + e.button} held for ${(held / 1000).toFixed(2)}s`);
    });
    on(document, 'click', (e: MouseEvent) => this.log('CLICK', `${btn[e.button]} click at (${e.clientX}, ${e.clientY}) on ${describe(e.target)}${mods(e)}`));
    on(document, 'auxclick', (e: MouseEvent) => e.button !== 2 && this.log('CLICK', `${btn[e.button] ?? 'button ' + e.button} click at (${e.clientX}, ${e.clientY})`));
    on(document, 'dblclick', (e: MouseEvent) => this.log('CLICK', `double click at (${e.clientX}, ${e.clientY})`));
    on(document, 'contextmenu', (e: MouseEvent) => {
      e.preventDefault();
      this.log('CLICK', `right click at (${e.clientX}, ${e.clientY}) — context menu intercepted`);
    });
    on(document.documentElement, 'mouseleave', () => this.log('MOUSE', 'cursor left the page'));
    on(document.documentElement, 'mouseenter', () => this.log('MOUSE', 'cursor entered the page'));

    let wheelX = 0, wheelY = 0, wheelN = 0;
    let wheelTimer: ReturnType<typeof setTimeout> | undefined;
    on(document, 'wheel', (e: WheelEvent) => {
      wheelX += e.deltaX; wheelY += e.deltaY; wheelN++;
      clearTimeout(wheelTimer);
      wheelTimer = setTimeout(() => {
        const dir = Math.abs(wheelY) >= Math.abs(wheelX) ? (wheelY > 0 ? 'down' : 'up') : wheelX > 0 ? 'right' : 'left';
        this.log('WHEEL', `scrolled ${dir} · ${wheelN} ticks · Δ ${Math.round(Math.hypot(wheelX, wheelY))}px${e.ctrlKey ? ' · pinch/ctrl zoom' : ''}`);
        wheelX = wheelY = wheelN = 0;
      }, 250);
    }, { passive: true });

    // ---------- keyboard ----------
    on(window, 'keydown', (e: KeyboardEvent) => {
      if (e.repeat) return;
      const key = e.key === ' ' ? 'Space' : e.key;
      this.log('KEY', `pressed ${key.length === 1 ? `'${key}'` : key} (${e.code})${mods(e)}`);
    });

    // ---------- touch / pointer ----------
    on(document, 'touchstart', (e: TouchEvent) => this.log('TOUCH', `${e.touches.length} finger(s) down at (${Math.round(e.touches[0].clientX)}, ${Math.round(e.touches[0].clientY)})`), { passive: true });
    on(document, 'pointerdown', (e: PointerEvent) => e.pointerType === 'pen' && this.log('TOUCH', `pen down · pressure ${e.pressure.toFixed(2)}`));

    // ---------- clipboard / selection / drag ----------
    on(document, 'copy', () => this.log('CLIP', `copied "${clip(String(getSelection()))}"`));
    on(document, 'cut', () => this.log('CLIP', 'cut to clipboard'));
    on(document, 'paste', (e: ClipboardEvent) => this.log('CLIP', `pasted "${clip(e.clipboardData?.getData('text') ?? '')}"`));
    let selTimer: ReturnType<typeof setTimeout> | undefined;
    on(document, 'selectionchange', () => {
      clearTimeout(selTimer);
      selTimer = setTimeout(() => {
        const s = String(getSelection());
        if (s.trim()) this.log('SELECT', `selected ${s.length} chars: "${clip(s)}"`);
      }, 400);
    });
    on(document, 'dragover', (e: DragEvent) => e.preventDefault());
    on(document, 'dragenter', (e: DragEvent) => e.dataTransfer?.types.includes('Files') && this.log('DRAG', 'something is being dragged over the page'));
    on(document, 'drop', (e: DragEvent) => {
      e.preventDefault();
      const files = Array.from(e.dataTransfer?.files ?? []);
      this.log('DRAG', files.length
        ? `dropped ${files.length} file(s): ${files.map((f) => `${f.name} (${fmtBytes(f.size)})`).join(', ')}`
        : `dropped text "${clip(e.dataTransfer?.getData('text') ?? '')}"`);
    });

    // ---------- window ----------
    let resizeTimer: ReturnType<typeof setTimeout> | undefined;
    on(window, 'resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => this.log('WINDOW', `resized to ${innerWidth}×${innerHeight}`), 250);
    });
    on(window, 'focus', () => this.log('WINDOW', 'window focused'));
    on(window, 'blur', () => this.log('WINDOW', 'window lost focus'));
    on(document, 'visibilitychange', () => this.log('WINDOW', document.hidden ? 'tab hidden (switched away)' : 'tab visible again'));
    on(document, 'fullscreenchange', () => this.log('WINDOW', document.fullscreenElement ? 'entered fullscreen' : 'left fullscreen'));
    on(window, 'online', () => this.log('NET', 'back online'));
    on(window, 'offline', () => this.log('NET', 'connection lost — offline'));
    on(window, 'beforeprint', () => this.log('WINDOW', 'print dialog opened'));
    on(window, 'gamepadconnected', (e: GamepadEvent) => this.log('SYS', `gamepad connected: ${e.gamepad.id}`));
    on(window, 'gamepaddisconnected', () => this.log('SYS', 'gamepad disconnected'));
    screen.orientation?.addEventListener('change', () => this.log('WINDOW', `orientation ${screen.orientation.type}`), { signal: ac.signal });
    matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => this.log('SYS', `color scheme → ${e.matches ? 'dark' : 'light'}`), { signal: ac.signal });

    // ---------- idle ----------
    let idleTimer: ReturnType<typeof setTimeout> | undefined;
    const armIdle = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => this.log('IDLE', `no input for ${IDLE_MS / 1000}s… still there?`, false), IDLE_MS);
    };
    this.armIdle = armIdle;
    armIdle();

    afterNextRender(() => document.body.focus());
  }

  private armIdle: () => void = () => {};

  private lastMsg = '';
  private lastAt = 0;

  private log(type: string, msg: string, resetIdle = true) {
    // drop exact duplicates fired back-to-back (e.g. focus events from several sources)
    const key = type + msg, at = performance.now();
    if (key === this.lastMsg && at - this.lastAt < 400) return;
    this.lastMsg = key; this.lastAt = at;
    const now = new Date();
    const time = `${now.toTimeString().slice(0, 8)}.${String(now.getMilliseconds()).padStart(3, '0')}`;
    this.events.update((list) => {
      const next = [...list, { id: this.nextId++, time, type, msg }];
      return next.length > MAX_EVENTS ? next.slice(next.length - MAX_EVENTS) : next;
    });
    this.total.update((n) => n + 1);
    this.counts.update((c) => ({ ...c, [type]: (c[type] ?? 0) + 1 }));
    if (resetIdle && type !== 'SYS') this.armIdle();
    // smooth upward scroll of the whole log
    const el = this.list()?.nativeElement;
    el?.animate([{ transform: 'translateY(30px)' }, { transform: 'translateY(0)' }], { duration: 160, easing: 'cubic-bezier(.2,.8,.2,1)' });
  }

  protected opacity(i: number, len: number) {
    const age = len - 1 - i;
    return age === 0 ? 1 : Math.max(0.08, 0.75 - age * 0.045);
  }
}

function describe(t: EventTarget | null): string {
  if (!(t instanceof Element)) return 'document';
  const id = t.id ? '#' + t.id : '';
  const cls = typeof t.className === 'string' && t.className.trim() ? '.' + t.className.trim().split(/\s+/)[0] : '';
  return `<${t.tagName.toLowerCase()}${id}${cls}>`;
}
function mods(e: MouseEvent | KeyboardEvent): string {
  const m = [e.ctrlKey && 'Ctrl', e.altKey && 'Alt', e.shiftKey && 'Shift', e.metaKey && 'Meta'].filter(Boolean);
  return m.length ? ' +' + m.join('+') : '';
}
function clip(s: string): string {
  const one = s.replace(/\s+/g, ' ').trim();
  return one.length > 48 ? one.slice(0, 48) + '…' : one;
}
function fmtBytes(n: number): string {
  return n < 1024 ? n + ' B' : n < 1048576 ? (n / 1024).toFixed(1) + ' KB' : (n / 1048576).toFixed(1) + ' MB';
}
