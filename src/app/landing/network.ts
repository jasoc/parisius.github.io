/** Animated "constellation network" background: drifting nodes, links between neighbours, reacts to the mouse. */
export function startNetwork(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext('2d')!;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let W = 0, H = 0, dpr = 1;
  let nodes: { x: number; y: number; vx: number; vy: number; r: number; hue: number }[] = [];
  const mouse = { x: -1e4, y: -1e4 };
  const LINK = 150;

  const resize = () => {
    dpr = Math.min(2, devicePixelRatio || 1);
    const r = canvas.getBoundingClientRect();
    W = r.width; H = r.height;
    canvas.width = W * dpr; canvas.height = H * dpr;
    const n = Math.round(Math.min(160, (W * H) / 9000));
    nodes = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 18, vy: (Math.random() - 0.5) * 18,
      r: 0.8 + Math.random() * 1.6,
      hue: Math.random() < 0.8 ? 140 : 190, // green, some cyan
    }));
  };
  const onMove = (e: PointerEvent) => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  };
  const onLeave = () => { mouse.x = mouse.y = -1e4; };
  window.addEventListener('pointermove', onMove);
  document.addEventListener('pointerleave', onLeave);
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  let raf = 0, last = performance.now();
  const frame = (now: number) => {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);

    for (const p of nodes) {
      if (!reduce) { p.x += p.vx * dt; p.y += p.vy * dt; }
      if (p.x < -20) p.x = W + 20; if (p.x > W + 20) p.x = -20;
      if (p.y < -20) p.y = H + 20; if (p.y > H + 20) p.y = -20;
      // gentle pull towards the cursor
      const dx = mouse.x - p.x, dy = mouse.y - p.y, d = Math.hypot(dx, dy);
      if (d < 220 && d > 1) { p.x += (dx / d) * 14 * dt; p.y += (dy / d) * 14 * dt; }
    }

    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        if (Math.abs(dx) > LINK || Math.abs(dy) > LINK) continue;
        const d = Math.hypot(dx, dy);
        if (d < LINK) {
          ctx.strokeStyle = `hsla(${a.hue}, 90%, 60%, ${(1 - d / LINK) * 0.22})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
      if (dm < 200) {
        ctx.strokeStyle = `hsla(150, 100%, 70%, ${(1 - dm / 200) * 0.45})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
    }
    for (const p of nodes) {
      ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, 0.85)`;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    }
    raf = requestAnimationFrame(frame);
  };
  raf = requestAnimationFrame(frame);

  return () => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    window.removeEventListener('pointermove', onMove);
    document.removeEventListener('pointerleave', onLeave);
  };
}
