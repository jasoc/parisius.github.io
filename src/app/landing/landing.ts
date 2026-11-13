import { Component, DestroyRef, ElementRef, afterNextRender, inject, signal, viewChild } from '@angular/core';
import { startRain } from './rain';

const TAGLINES = [
  '[REDACTED]',
  'no further information available',
  'you were not supposed to find this',
  'connection terminated.',
];

const ALIAS = 'Parisius';
const NAME = 'Paride';
const NOISE = '!<>-_/[]{}=+*^?#$%&01';
const noise = () => NOISE[(Math.random() * NOISE.length) | 0];

const LUCKY_LINKS = [
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://www.youtube.com/watch?v=4UmTecvvQZI',
  'https://science.nasa.gov/gallery/stars-images/',
  'https://apod.nasa.gov/apod/astropix.html',
  'https://eyes.nasa.gov/apps/solar-system/',
  'https://stellarium-web.org/',
  'https://x.com/SPACEdotcom/status/1398436675517300737/photo/1',
  'https://earth.google.com/web/@41.90217397,12.45630136,19.13366868a,392.23729528d,35.00007006y,-92.18650768h,87.07521816t,0r/data=CgRCAggBOgMKATBCAggASg0I____________ARAA',
  'https://earth.nullschool.net/',
  'https://radio.garden/',
  'https://lkml.org/lkml/1996/7/20/1',
  'https://github.com/torvalds/linux',
  'https://github.com/NVIDIA/Cosmos',
  'https://c.xkcd.com/random/comic/',
  'https://en.wikipedia.org/wiki/Special:Random',
  'https://neal.fun/',
  'https://pointerpointer.com/',
  'https://http.cat/',
  'https://www.windows93.net/',
  'https://www.seriouseats.com/',
];

@Component({
  selector: 'app-landing',
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  protected readonly typed = signal('');
  protected readonly rolling = signal(false);
  protected readonly glyphs = signal<{ ch: string; done: boolean }[]>([]);
  private readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('bg');
  private readonly recent: number[] = [];
  private nameTimer?: ReturnType<typeof setTimeout>;
  private shown = ALIAS;

  /** Scrambles the current word into `target`, letters locking in left to right. */
  protected morph(target: string) {
    if (target === this.shown) return;
    this.shown = target;
    clearTimeout(this.nameTimer);
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.glyphs.set([...target].map((ch) => ({ ch, done: true })));
      return;
    }
    const from = this.glyphs().map((g) => g.ch);
    const len = Math.max(from.length, target.length);
    // the whole word breaks up almost at once, then letters settle left to right
    const start = Array.from({ length: len }, () => Math.random() * 3);
    const lock = start.map((_, i) => 5 + i * 1.6 + Math.random() * 3);
    const end = Math.max(...lock);
    let f = 0;
    const step = () => {
      const out: { ch: string; done: boolean }[] = [];
      for (let i = 0; i < len; i++) {
        if (f >= lock[i]) { if (i < target.length) out.push({ ch: target[i], done: true }); }
        else if (f >= start[i]) out.push({ ch: noise(), done: false });
        else if (i < from.length) out.push({ ch: from[i], done: true });
      }
      this.glyphs.set(out);
      if (++f <= end + 1) this.nameTimer = setTimeout(step, 38);
    };
    step();
  }

  constructor() {
    const destroy = inject(DestroyRef);
    afterNextRender(() => destroy.onDestroy(startRain(this.canvas().nativeElement)));

    // typewriter cycling through the taglines
    let line = 0, pos = 0, deleting = false;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const text = TAGLINES[line];
      if (!deleting) {
        pos++;
        this.typed.set(text.slice(0, pos));
        if (pos === text.length) { deleting = true; timer = setTimeout(tick, 2200); return; }
        timer = setTimeout(tick, 45 + Math.random() * 60);
      } else {
        pos--;
        this.typed.set(text.slice(0, pos));
        if (pos === 0) { deleting = false; line = (line + 1) % TAGLINES.length; timer = setTimeout(tick, 400); return; }
        timer = setTimeout(tick, 22);
      }
    };
    timer = setTimeout(tick, 900);
    destroy.onDestroy(() => clearTimeout(timer));

    destroy.onDestroy(() => clearTimeout(this.nameTimer));
    this.glyphs.set([...ALIAS].map((ch) => ({ ch, done: true })));
  }

  /** Picked at click time with a crypto RNG, never one of the last few. */
  protected feelingLucky() {
    const buf = new Uint32Array(1);
    let i: number;
    do {
      crypto.getRandomValues(buf);
      i = buf[0] % LUCKY_LINKS.length;
    } while (this.recent.includes(i));
    this.recent.push(i);
    if (this.recent.length > 6) this.recent.shift();
    window.open(LUCKY_LINKS[i], '_blank', 'noopener');
    this.rolling.set(true);
    setTimeout(() => this.rolling.set(false), 700);
  }
}
