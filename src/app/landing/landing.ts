import { Component, DestroyRef, ElementRef, afterNextRender, inject, signal, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { startNetwork } from './network';

const TAGLINES = [
  'cloud & infrastructure engineer',
  'linux · kubernetes · networks',
  'probably staring at the stars right now',
  '…or eating.',
];

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
  imports: [RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  protected readonly typed = signal('');
  protected readonly rolling = signal(false);
  private readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('bg');
  private readonly recent: number[] = [];

  constructor() {
    const destroy = inject(DestroyRef);
    afterNextRender(() => destroy.onDestroy(startNetwork(this.canvas().nativeElement)));

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
