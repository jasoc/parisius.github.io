import { Component, DestroyRef, ElementRef, afterNextRender, inject, viewChild } from '@angular/core';

const WIN = 7;

@Component({
  selector: 'app-pong',
  template: `<canvas #cv></canvas>`,
  styles: `
    :host { display: block; height: 100%; background: #05070a; }
    canvas { display: block; width: 100%; height: 100%; }
  `,
})
export class Pong {
  private readonly cv = viewChild.required<ElementRef<HTMLCanvasElement>>('cv');

  constructor() {
    const destroy = inject(DestroyRef);
    afterNextRender(() => {
      const stop = run(this.cv().nativeElement);
      destroy.onDestroy(stop);
    });
  }
}

function run(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext('2d')!;
  const keys = new Set<string>();
  let W = 0, H = 0, dpr = 1;

  // game state (in CSS pixels)
  const pad = { w: 14, h: 110, speed: 640 };
  const left = { y: 0, score: 0 };
  const right = { y: 0, score: 0 };
  const ball = { x: 0, y: 0, vx: 0, vy: 0, r: 9 };
  let state: 'ready' | 'play' | 'pause' | 'point' | 'over' = 'ready';
  let pointTimer = 0;
  let winner = '';
  const trail: { x: number; y: number }[] = [];
  let shake = 0;

  const resize = () => {
    dpr = devicePixelRatio || 1;
    const r = canvas.getBoundingClientRect();
    W = r.width; H = r.height;
    canvas.width = W * dpr; canvas.height = H * dpr;
    pad.h = Math.max(70, H * 0.16);
    left.y = Math.min(Math.max(left.y || H / 2, pad.h / 2), H - pad.h / 2);
    right.y = Math.min(Math.max(right.y || H / 2, pad.h / 2), H - pad.h / 2);
    if (state === 'ready') centerBall();
  };
  const centerBall = () => { ball.x = W / 2; ball.y = H / 2; ball.vx = 0; ball.vy = 0; trail.length = 0; };
  const serve = (dir: number) => {
    centerBall();
    const a = (Math.random() * 0.8 - 0.4);
    const s = Math.max(380, W * 0.42);
    ball.vx = Math.cos(a) * s * dir; ball.vy = Math.sin(a) * s;
  };
  const reset = () => { left.score = right.score = 0; winner = ''; serve(Math.random() < 0.5 ? -1 : 1); state = 'play'; };

  const onKey = (e: KeyboardEvent, down: boolean) => {
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if (['ArrowUp', 'ArrowDown', ' ', 'w', 's'].includes(k)) e.preventDefault();
    if (down) keys.add(k); else keys.delete(k);
    if (!down || e.repeat) return;
    if (k === ' ') {
      if (state === 'ready' || state === 'over') reset();
      else if (state === 'play') state = 'pause';
      else if (state === 'pause') state = 'play';
    }
    if (k === 'p' && (state === 'play' || state === 'pause')) state = state === 'play' ? 'pause' : 'play';
  };
  const kd = (e: KeyboardEvent) => onKey(e, true);
  const ku = (e: KeyboardEvent) => onKey(e, false);
  window.addEventListener('keydown', kd);
  window.addEventListener('keyup', ku);
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  const bounce = (p: { y: number }, side: number) => {
    const rel = (ball.y - p.y) / (pad.h / 2); // -1..1
    const speed = Math.min(Math.hypot(ball.vx, ball.vy) * 1.06, W * 1.6);
    const ang = rel * (Math.PI / 3.2);
    ball.vx = Math.cos(ang) * speed * side;
    ball.vy = Math.sin(ang) * speed;
    shake = 6;
  };

  const update = (dt: number) => {
    const move = (p: { y: number }, up: boolean, down: boolean) => {
      p.y += ((down ? 1 : 0) - (up ? 1 : 0)) * pad.speed * dt;
      p.y = Math.min(Math.max(p.y, pad.h / 2), H - pad.h / 2);
    };
    if (state !== 'pause') {
      move(left, keys.has('w'), keys.has('s'));
      move(right, keys.has('ArrowUp'), keys.has('ArrowDown'));
    }
    if (state === 'point') {
      pointTimer -= dt;
      if (pointTimer <= 0) { serve(ball.x < W / 2 ? 1 : -1); state = 'play'; }
      return;
    }
    if (state !== 'play') return;

    ball.x += ball.vx * dt; ball.y += ball.vy * dt;
    if (ball.y < ball.r) { ball.y = ball.r; ball.vy = Math.abs(ball.vy); }
    if (ball.y > H - ball.r) { ball.y = H - ball.r; ball.vy = -Math.abs(ball.vy); }

    const lx = 36 + pad.w, rx = W - 36 - pad.w;
    if (ball.vx < 0 && ball.x - ball.r < lx && ball.x > 36 - ball.r && Math.abs(ball.y - left.y) < pad.h / 2 + ball.r) { ball.x = lx + ball.r; bounce(left, 1); }
    if (ball.vx > 0 && ball.x + ball.r > rx && ball.x < W - 36 + ball.r && Math.abs(ball.y - right.y) < pad.h / 2 + ball.r) { ball.x = rx - ball.r; bounce(right, -1); }

    if (ball.x < -ball.r * 2 || ball.x > W + ball.r * 2) {
      const scorer = ball.x < 0 ? right : left;
      scorer.score++;
      shake = 14;
      if (scorer.score >= WIN) { state = 'over'; winner = scorer === left ? 'LEFT' : 'RIGHT'; centerBall(); }
      else { state = 'point'; pointTimer = 0.8; }
    }
    trail.push({ x: ball.x, y: ball.y });
    if (trail.length > 14) trail.shift();
  };

  const draw = () => {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const sx = shake ? (Math.random() - 0.5) * shake : 0, sy = shake ? (Math.random() - 0.5) * shake : 0;
    shake *= 0.85; if (shake < 0.3) shake = 0;
    ctx.translate(sx, sy);
    ctx.fillStyle = '#05070a';
    ctx.fillRect(-20, -20, W + 40, H + 40);

    // center line
    ctx.fillStyle = 'rgba(255,255,255,0.12)';
    for (let y = 10; y < H; y += 28) ctx.fillRect(W / 2 - 2, y, 4, 14);

    // scores
    ctx.font = `700 ${Math.round(H * 0.14)}px ui-monospace, Consolas, monospace`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    ctx.fillText(String(left.score), W * 0.3, H * 0.06);
    ctx.fillText(String(right.score), W * 0.7, H * 0.06);

    // paddles
    const paddle = (x: number, y: number, c: string) => {
      ctx.shadowColor = c; ctx.shadowBlur = 24; ctx.fillStyle = c;
      ctx.beginPath(); ctx.roundRect(x, y - pad.h / 2, pad.w, pad.h, 7); ctx.fill();
      ctx.shadowBlur = 0;
    };
    paddle(36, left.y, '#39ff14');
    paddle(W - 36 - pad.w, right.y, '#ff4ecd');

    // ball + trail
    trail.forEach((p, i) => {
      ctx.fillStyle = `rgba(127,219,255,${(i / trail.length) * 0.25})`;
      ctx.beginPath(); ctx.arc(p.x, p.y, ball.r * (i / trail.length), 0, Math.PI * 2); ctx.fill();
    });
    if (state === 'play' || state === 'pause') {
      ctx.shadowColor = '#7fdbff'; ctx.shadowBlur = 20; ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2); ctx.fill();
      ctx.shadowBlur = 0;
    }

    // overlays
    const center = (big: string, small: string) => {
      ctx.fillStyle = 'rgba(5,7,10,0.6)'; ctx.fillRect(0, H * 0.36, W, H * 0.28);
      ctx.textBaseline = 'middle'; ctx.fillStyle = '#fff';
      ctx.font = `700 ${Math.round(Math.min(W, H) * 0.08)}px ui-monospace, Consolas, monospace`;
      ctx.fillText(big, W / 2, H * 0.46);
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      ctx.font = `400 ${Math.round(Math.min(W, H) * 0.028)}px ui-monospace, Consolas, monospace`;
      ctx.fillText(small, W / 2, H * 0.56);
    };
    if (state === 'ready') center('PONG', 'W/S  ←  left   ·   right  →  ↑/↓      SPACE to start');
    if (state === 'pause') center('PAUSED', 'SPACE or P to resume');
    if (state === 'over') center(`${winner} WINS`, `${left.score} – ${right.score}      SPACE to play again`);
  };

  let raf = 0, last = performance.now();
  const loop = (now: number) => {
    const dt = Math.min(0.033, (now - last) / 1000); last = now;
    update(dt); draw();
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);

  return () => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    window.removeEventListener('keydown', kd);
    window.removeEventListener('keyup', ku);
  };
}
