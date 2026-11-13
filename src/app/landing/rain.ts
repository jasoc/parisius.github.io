/** "Digital rain" background: columns of falling glyphs leaving fading trails; columns near the cursor glow brighter. */
export function startRain(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext('2d')!;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const GLYPHS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン0123456789ABCDEF<>/\\{}[]=+*#$%';
  const BG = '5, 7, 9';
  const SIZE = 16;
  let W = 0, H = 0, dpr = 1;
  let cols: { y: number; speed: number; acc: number }[] = [];
  const mouseX = { v: -1e4 };

  const resize = () => {
    dpr = Math.min(2, devicePixelRatio || 1);
    const r = canvas.getBoundingClientRect();
    W = r.width; H = r.height;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = `rgb(${BG})`;
    ctx.fillRect(0, 0, W, H);
    ctx.font = `${SIZE - 2}px ui-monospace, 'JetBrains Mono', Consolas, monospace`;
    ctx.textBaseline = 'top';
    cols = Array.from({ length: Math.ceil(W / SIZE) }, () => ({
      y: -Math.random() * (H / SIZE) * 1.5,
      speed: 0.25 + Math.random() * 0.55,
      acc: 0,
    }));
  };
  const onMove = (e: PointerEvent) => { mouseX.v = e.clientX - canvas.getBoundingClientRect().left; };
  const onLeave = () => { mouseX.v = -1e4; };
  window.addEventListener('pointermove', onMove);
  document.addEventListener('pointerleave', onLeave);
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  const glyph = () => GLYPHS[(Math.random() * GLYPHS.length) | 0];
  let raf = 0;
  const frame = () => {
    // translucent wash = the fading trail
    ctx.fillStyle = `rgba(${BG}, 0.09)`;
    ctx.fillRect(0, 0, W, H);
    cols.forEach((c, i) => {
      c.acc += c.speed;
      if (c.acc < 1) return;
      c.acc -= 1;
      const x = i * SIZE;
      const y = c.y * SIZE;
      const near = Math.max(0, 1 - Math.abs(x + SIZE / 2 - mouseX.v) / 140);
      // previous head turns green, new head is pale
      if (y >= 0) {
        ctx.fillStyle = `rgba(120, 255, 140, ${0.22 + near * 0.5})`;
        ctx.fillText(glyph(), x, y - SIZE);
        ctx.fillStyle = `rgba(215, 255, 225, ${0.45 + near * 0.5})`;
        ctx.fillText(glyph(), x, y);
      }
      c.y++;
      if (y > H && Math.random() > 0.96) {
        c.y = -Math.random() * 20;
        c.speed = 0.25 + Math.random() * 0.55;
      }
    });
    raf = requestAnimationFrame(frame);
  };
  if (reduce) {
    for (let k = 0; k < 120; k++) cols.forEach((c, i) => {
      if (c.y >= 0 && Math.random() < 0.5) { ctx.fillStyle = 'rgba(120, 255, 140, 0.15)'; ctx.fillText(glyph(), i * SIZE, c.y * SIZE); }
      c.y = (c.y + 1) % Math.ceil(H / SIZE);
    });
  } else {
    raf = requestAnimationFrame(frame);
  }

  return () => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    window.removeEventListener('pointermove', onMove);
    document.removeEventListener('pointerleave', onLeave);
  };
}
