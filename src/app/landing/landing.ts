import { Component, DestroyRef, inject, signal } from '@angular/core';

const COLORS = [
  [62, 35, 255],
  [60, 255, 60],
  [255, 35, 98],
  [45, 175, 230],
  [255, 0, 255],
  [255, 128, 0],
];

const LUCKY_LINKS = [
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'https://science.nasa.gov/gallery/stars-images/',
  'https://x.com/SPACEdotcom/status/1398436675517300737/photo/1',
  'https://lkml.org/lkml/1996/7/20/1',
  'https://earth.google.com/web/@41.90217397,12.45630136,19.13366868a,392.23729528d,35.00007006y,-92.18650768h,87.07521816t,0r/data=CgRCAggBOgMKATBCAggASg0I____________ARAA',
  'https://github.com/NVIDIA/Cosmos',
  'https://www.youtube.com/watch?v=4UmTecvvQZI',
];

@Component({
  selector: 'app-landing',
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
  host: { '[style.background]': 'gradient()' },
})
export class Landing {
  protected readonly gradient = signal('black');
  protected readonly lucky = LUCKY_LINKS[Math.floor(Math.random() * LUCKY_LINKS.length)];

  constructor() {
    // animated two-colour gradient (same as the old jQuery version: 0.2 of a transition per second)
    let step = 0;
    const idx = [0, 1, 2, 3];
    let last = performance.now();
    let raf = 0;
    const pick = (cur: number) => (cur + Math.floor(1 + Math.random() * (COLORS.length - 1))) % COLORS.length;
    const mix = (a: number[], b: number[], t: number) => `rgb(${a.map((v, i) => Math.round((1 - t) * v + t * b[i])).join(',')})`;
    const tick = (now: number) => {
      step += ((now - last) / 1000) * 0.2;
      last = now;
      if (step >= 1) {
        step %= 1;
        idx[0] = idx[1];
        idx[2] = idx[3];
        idx[1] = pick(idx[1]);
        idx[3] = pick(idx[3]);
      }
      const c1 = mix(COLORS[idx[0]], COLORS[idx[1]], step);
      const c2 = mix(COLORS[idx[2]], COLORS[idx[3]], step);
      this.gradient.set(`linear-gradient(to right, ${c1} 0%, ${c2} 100%)`);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    inject(DestroyRef).onDestroy(() => cancelAnimationFrame(raf));
  }
}
