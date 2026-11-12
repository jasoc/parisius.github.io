// @ts-nocheck — imperative CesiumJS code (global `Cesium` from the CDN), kept untyped on purpose.
import { Tool, fmtW } from './tools';

declare const Cesium: any;

export interface EngineEvents {
  stats(s: { count: number; area: number; cloud: number }): void;
  toast(emoji: string, html: string): void;
  unlock(id: string): void;
  hint(text: string): void;
  status(text: string): void;
  heading(deg: number): void;
  abducted(n: number): void;
}

export interface SavedView { lon: number; lat: number; h: number; heading: number; pitch: number; roll: number; }

const lerp = (a, b, f) => a + (b - a) * f;
const clamp01 = (x) => Math.max(0, Math.min(1, x));
const smooth = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };

// ---------------------------------------------------------------------------
// Physics (Glasstone & Dolan scaling, like NUKEMAP; absurd things clamped)
// ---------------------------------------------------------------------------
const L = Math.log10;
const CLOUD_TOP = [[0, 3.5], [L(15), 8.5], [2, 13], [3, 21], [4, 38], [L(50000), 64]];
const CLOUD_RAD = [[0, 0.8], [L(15), 2.5], [2, 4.5], [3, 10], [4, 25], [L(50000), 47]];
const CAP = 5e6;
function interpLog(tab, W) {
  const x = Math.log10(W);
  if (x <= tab[0][0]) return tab[0][1] * Math.pow(W / Math.pow(10, tab[0][0]), 0.3);
  for (let i = 0; i < tab.length - 1; i++) {
    const [x0, y0] = tab[i], [x1, y1] = tab[i + 1];
    if (x <= x1) { const f = (x - x0) / (x1 - x0); return Math.exp(Math.log(y0) + f * (Math.log(y1) - Math.log(y0))); }
  }
  const [xa, ya] = tab[tab.length - 2], [xb, yb] = tab[tab.length - 1];
  return yb * Math.pow(10, (x - xb) * Math.log10(yb / ya) / (xb - xa));
}
export function effects(W: number, air: boolean, hob?: number) {
  const c = Math.cbrt(W), p = air ? 1 : 0.7, th = air ? 1 : 0.75;
  const E: any = {
    W, air,
    r20: Math.min(CAP, 280 * c * p), r5: Math.min(CAP, 650 * c * p), r1: Math.min(CAP, 1700 * c * p),
    rth: Math.min(CAP, 630 * Math.pow(W, 0.41) * th),
    rrad: Math.min(CAP, 720 * Math.pow(W, 0.19)),
    hob: hob ?? (air ? 235 * c : 0),
    H: Math.min(100000, interpLog(CLOUD_TOP, W) * 1000),
    Rcap: Math.min(900000, interpLog(CLOUD_RAD, W) * 1000),
    tmax: Math.min(8, 0.25 * Math.pow(W, 0.3)),
    Trise: Math.min(900, 220 * Math.pow(W, 0.07)),
    crater: air ? 0 : 30 * Math.pow(W, 0.294),
  };
  E.Rfb = Math.min(70 * Math.pow(W, 0.4) * (air ? 1 : 1.26), E.Rcap * 0.5, 300000);
  E.tglow = 2.5 * E.tmax + 1;
  E.Rstem = 0.17 * E.Rcap;
  E.shockBoost = Math.max(1, Math.cbrt(W / 50000));
  return E;
}

// ---------------------------------------------------------------------------
// Textures
// ---------------------------------------------------------------------------
function makePuffTex() {
  const s = 256, c = document.createElement('canvas'); c.width = c.height = s;
  const g = c.getContext('2d'), img = g.createImageData(s, s);
  const N = 32, grid = [];
  let seed = 11; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  for (let i = 0; i < N * N; i++) grid.push(rnd());
  const val = (x, y) => {
    const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
    const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
    const at = (a, b) => grid[((b % N + N) % N) * N + ((a % N + N) % N)];
    return (at(xi, yi) * (1 - u) + at(xi + 1, yi) * u) * (1 - v) + (at(xi, yi + 1) * (1 - u) + at(xi + 1, yi + 1) * u) * v;
  };
  const fbm = (x, y) => { let a = 0.5, f = 1, sum = 0; for (let o = 0; o < 5; o++) { sum += a * val(x * f, y * f); a *= 0.5; f *= 2.03; } return sum; };
  for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) {
    const nx = x / s * 4, ny = y / s * 4, n = fbm(nx, ny), n2 = fbm(nx + 7.3, ny + 2.1);
    const dx = x / s - 0.5, dy = y / s - 0.5, r = Math.sqrt(dx * dx + dy * dy) * 2, fall = Math.max(0, 1 - r);
    const a = Math.max(0, Math.min(1, (n * 1.35 - 0.25) * fall * fall * 1.8)), l = Math.round(222 + 33 * n2), i = (y * s + x) * 4;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = l; img.data[i + 3] = Math.round(a * 255);
  }
  g.putImageData(img, 0, 0);
  return c;
}
function makeGlowTex() {
  const s = 128, c = document.createElement('canvas'); c.width = c.height = s;
  const g = c.getContext('2d'), gr = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.18, 'rgba(255,255,255,.9)'); gr.addColorStop(0.45, 'rgba(255,255,255,.25)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, s, s);
  return c;
}
function makeJetTex() {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = '#d9dee6'; g.strokeStyle = '#1b1f24'; g.lineWidth = 2;
  g.beginPath();
  g.moveTo(32, 4); g.lineTo(36, 22); g.lineTo(60, 38); g.lineTo(60, 42); g.lineTo(36, 36); g.lineTo(35, 50);
  g.lineTo(44, 58); g.lineTo(44, 61); g.lineTo(32, 57); g.lineTo(20, 61); g.lineTo(20, 58); g.lineTo(29, 50);
  g.lineTo(28, 36); g.lineTo(4, 42); g.lineTo(4, 38); g.lineTo(28, 22); g.closePath();
  g.fill(); g.stroke();
  return c;
}
function makeTurretTex() {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = 'rgba(77,208,225,.25)'; g.beginPath(); g.arc(32, 32, 30, 0, 7); g.fill();
  g.fillStyle = '#1b1f24'; g.strokeStyle = '#4dd0e1'; g.lineWidth = 3;
  g.beginPath(); g.arc(32, 32, 16, 0, 7); g.fill(); g.stroke();
  g.fillStyle = '#4dd0e1'; g.font = 'bold 20px system-ui'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('⚡', 32, 33);
  return c;
}

function makeUfoTex() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 128;
  const g = c.getContext('2d');
  // underside glow
  const glow = g.createRadialGradient(128, 92, 4, 128, 92, 60);
  glow.addColorStop(0, 'rgba(170,255,190,.9)'); glow.addColorStop(1, 'rgba(170,255,190,0)');
  g.fillStyle = glow; g.fillRect(0, 50, 256, 78);
  // dome
  const dome = g.createRadialGradient(118, 42, 4, 128, 56, 46);
  dome.addColorStop(0, 'rgba(230,255,255,.95)'); dome.addColorStop(0.6, 'rgba(120,220,235,.75)'); dome.addColorStop(1, 'rgba(40,110,140,.8)');
  g.fillStyle = dome; g.beginPath(); g.ellipse(128, 62, 44, 36, 0, Math.PI, 0); g.fill();
  // disc
  const disc = g.createLinearGradient(0, 56, 0, 92);
  disc.addColorStop(0, '#e9edf2'); disc.addColorStop(0.45, '#9aa3ad'); disc.addColorStop(1, '#4a5058');
  g.fillStyle = disc; g.beginPath(); g.ellipse(128, 72, 122, 20, 0, 0, Math.PI * 2); g.fill();
  g.strokeStyle = 'rgba(0,0,0,.35)'; g.lineWidth = 2; g.stroke();
  // lights
  for (let i = 0; i < 9; i++) {
    const x = 30 + i * 24.5, y = 74 + Math.sin((i / 8) * Math.PI) * 6;
    g.fillStyle = ['#ffef6b', '#7dffb0', '#ff6bd5'][i % 3];
    g.beginPath(); g.arc(x, y, 5, 0, Math.PI * 2); g.fill();
  }
  return c;
}
/** a chunk of building: irregular dark polygon, lighter broken edge (debris billboards) */
function makeChunkTex() {
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d');
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  g.beginPath();
  for (let i = 0; i < 9; i++) { const a = (i / 9) * Math.PI * 2 + rnd() * 0.4, r = 18 + rnd() * 12; g[i ? 'lineTo' : 'moveTo'](32 + r * Math.cos(a), 32 + r * Math.sin(a)); }
  g.closePath();
  const gr = g.createLinearGradient(10, 10, 54, 54); gr.addColorStop(0, '#8d8378'); gr.addColorStop(1, '#3b3530');
  g.fillStyle = gr; g.fill(); g.strokeStyle = 'rgba(25,22,20,.9)'; g.lineWidth = 2.5; g.stroke();
  return c;
}
function makePersonTex() {
  const c = document.createElement('canvas'); c.width = 16; c.height = 32;
  const g = c.getContext('2d');
  g.fillStyle = '#f2f2f2'; g.strokeStyle = '#f2f2f2'; g.lineWidth = 2.4; g.lineCap = 'round';
  g.beginPath(); g.arc(8, 5, 3.6, 0, Math.PI * 2); g.fill();
  g.beginPath(); g.moveTo(8, 9); g.lineTo(8, 20); g.moveTo(8, 12); g.lineTo(2, 7); g.moveTo(8, 12); g.lineTo(14, 7);
  g.moveTo(8, 20); g.lineTo(3, 30); g.moveTo(8, 20); g.lineTo(13, 30); g.stroke();
  return c;
}

// ---------------------------------------------------------------------------
// Crater profile. ONE analytic field evaluated from the original surface position, written twice:
// GLSL (vertex stage, with noise) and JS (craterZ, smooth terms only) for everything on the CPU.
// r = distance / crater radius: bowl -Dp(1-r²) inside r<1, a raised rim around r=1, an ejecta blanket to
// r=2.5; craters over 5 km get a flat floor and a central peak. Low air bursts press a shallow dish instead.
// ---------------------------------------------------------------------------
const craterDepth = (R) => Math.min(0.4 * R, 30000);
/**
 * Damage is deliberately exaggerated over the weapon physics (effects(), rings and clouds stay true to them):
 * a crater for every blast (2.5x for ground bursts; air bursts too unless they go off very high), everything
 * inside 5 psi pancaked, partial collapse out to 80 % of the 1 psi radius.
 */
function damageOf(E) {
  const X: any = { ...E };
  X.crater = E.air ? 0.8 * E.Rfb * (1 - smooth(1.5 * E.Rfb, 6 * E.Rfb, E.hob)) : 2.5 * E.crater;
  X.r20 = E.r5;
  X.r5 = Math.min(CAP, 0.8 * E.r1);
  X.r1 = Math.max(E.r1, 1.1 * X.r5);
  return X;
}
function dishDepth(E) { return E.crater > 0 || E.hob >= E.Rfb ? 0 : Math.min(6, 0.01 * E.Rfb) * (1 - E.hob / E.Rfb); }
function craterZ(d, E, crv) {
  if (!(crv > 0)) return 0;
  const R = E.crater;
  if (R <= 0) { const dd = dishDepth(E); return dd ? -dd * crv * (1 - smooth(0, E.Rfb, d)) : 0; }
  const r = d / R; if (r > 2.5) return 0;
  const Dp = craterDepth(R), big = smooth(5000, 15000, R);
  const bowl = r < 1 ? -Dp * Math.min(1, (1 - r * r) * lerp(1, 1.6, big)) : 0;
  const rim = 0.08 * Dp * Math.exp(-(((r - 1) / 0.3) ** 2));
  const ej = 0.03 * Dp * smooth(0.7, 1, r) * (1 - smooth(1, 2.5, r));
  const peak = big * 0.18 * Dp * Math.exp(-((r / 0.12) ** 2));
  return (bowl + rim + ej + peak) * crv;
}
/** least-squares plane h = a + b x + c y through points {x, y, h} */
function fitPlane(P) {
  let n = 0, sx = 0, sy = 0, sh = 0, sxx = 0, syy = 0, sxy = 0, sxh = 0, syh = 0;
  for (const p of P) { n++; sx += p.x; sy += p.y; sh += p.h; sxx += p.x * p.x; syy += p.y * p.y; sxy += p.x * p.y; sxh += p.x * p.h; syh += p.y * p.h; }
  const A = [[n, sx, sy], [sx, sxx, sxy], [sy, sxy, syy]], B = [sh, sxh, syh];
  const det = (m) => m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) - m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) + m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]);
  const d = det(A); if (Math.abs(d) < 1e-9) return [sh / Math.max(n, 1), 0, 0];
  return [0, 1, 2].map((k) => det(A.map((row, r) => row.map((v, c) => (c === k ? B[r] : v)))) / d);
}
/** plane under the low points (streets, not roofs): fit, drop what lies above, refit */
function lowerEnvelope(P) {
  let pts = P, pl = null;
  for (let it = 0; it < 5 && pts.length >= 4; it++) { pl = fitPlane(pts); const k = pl; const next = pts.filter((q) => q.h <= k[0] + k[1] * q.x + k[2] * q.y + 1.5); if (next.length < 4 || next.length === pts.length) break; pts = next; }
  return pl;
}
/** separable N x N filter of radius r: op = Math.min (erosion), Math.max (dilation) or null (box blur) */
function filt2(src, N, r, op) {
  const pass = (a, sx, sy) => { const o = new Float32Array(N * N); for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) { let acc = op ? (op === Math.min ? Infinity : -Infinity) : 0, n = 0; for (let k = -r; k <= r; k++) { const ii = i + k * sx, jj = j + k * sy; if (ii < 0 || jj < 0 || ii >= N || jj >= N) continue; const v = a[jj * N + ii]; if (op) acc = op(acc, v); else acc += v; n++; } o[j * N + i] = op ? acc : acc / n; } return o; };
  return pass(pass(src, 1, 0), 0, 1);
}
const GLSL_COMMON = `
  float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
  float vn(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + 1.0), f.x), f.y);
  }
  // vertical offset (m) of the original surface at blast-local xy; must match craterZ() in engine.ts (minus noise)
  float craterZ(vec2 xy, float R, float crv, float seed, float Rfb, float hob) {
    float d = length(xy);
    if (R <= 0.0) {
      if (hob >= Rfb || d > Rfb) return 0.0;
      return -min(6.0, 0.01 * Rfb) * (1.0 - hob / Rfb) * crv * (1.0 - smoothstep(0.0, Rfb, d));
    }
    float r = d / R;
    if (r > 2.5) return 0.0;
    float Dp = min(0.4 * R, 30000.0), big = smoothstep(5000.0, 15000.0, R);
    float bowl = r < 1.0 ? -Dp * min(1.0, (1.0 - r * r) * mix(1.0, 1.6, big)) : 0.0;
    float rim = 0.08 * Dp * exp(-pow((r - 1.0) / 0.3, 2.0));
    float ej = 0.03 * Dp * smoothstep(0.7, 1.0, r) * (1.0 - smoothstep(1.0, 2.5, r));
    float peak = big * 0.18 * Dp * exp(-pow(r / 0.12, 2.0));
    // lumpy rim and floor: two octaves of noise in crater units, seeded per blast
    vec2 q = xy / R + seed;
    float n = (vn(q * 3.0) - 0.5) + 0.4 * (vn(q * 11.0) - 0.5);
    float lump = 0.12 * Dp * n * (1.0 - smoothstep(1.3, 2.5, r)) * smoothstep(0.0, 0.5, r + big);
    return (bowl + rim + ej + peak + lump) * crv;
  }
  // global damage map (equirectangular, ~20 km texels): r scorch, g cumulative stress (32 per unit), b crater depth (log)
  vec2 lonLat(vec3 pEC) { vec3 w = (czm_inverseView * vec4(pEC, 1.0)).xyz; return vec2(atan(w.y, w.x), asin(clamp(w.z / length(w), -1.0, 1.0))); }
  // cubic B-spline from 4 bilinear taps: a Tsar's scorch is ~1 texel wide, bilinear would draw it as a square
  vec4 dmgAt(vec2 ll) {
    vec2 sz = vec2(2048.0, 1024.0), uv = vec2(ll.x / 6.2831853 + 0.5, ll.y / 3.1415927 + 0.5) * sz - 0.5;
    vec2 i = floor(uv), f = uv - i, f2 = f * f, f3 = f2 * f;
    vec2 w0 = (1.0 - 3.0 * f + 3.0 * f2 - f3) / 6.0, w1 = (4.0 - 6.0 * f2 + 3.0 * f3) / 6.0, w2 = (1.0 + 3.0 * f + 3.0 * f2 - 3.0 * f3) / 6.0, w3 = f3 / 6.0;
    vec2 g0 = w0 + w1, g1 = w2 + w3, h0 = (i - 0.5 + w1 / g0) / sz, h1 = (i + 1.5 + w3 / g1) / sz;
    return g0.y * (g0.x * texture(u_map, vec2(h0.x, h0.y)) + g1.x * texture(u_map, vec2(h1.x, h0.y)))
         + g1.y * (g0.x * texture(u_map, vec2(h0.x, h1.y)) + g1.x * texture(u_map, vec2(h1.x, h1.y)));
  }
  // metres on a plane tangent-ish to the globe: good to ~1 m, plenty for >= 100 m crack cells and 20 km fissures
  vec2 globeXY(vec2 ll) { return vec2(ll.x * cos(ll.y), ll.y) * 6371000.0; }
  // ground sinks where stress > 6, km deep, carved by ridged noise into fissures (>= 20 km wavelength)
  float subsidence(float st, vec2 g) {
    if (st <= 6.0) return 0.0;
    // long wavelengths only: coarse and fine LOD tiles meet with few shared vertices, shorter ones open seams
    float r1 = 1.0 - abs(2.0 * vn(g / 30000.0) - 1.0), r2 = 1.0 - abs(2.0 * vn(g / 60000.0 + 7.7) - 1.0);
    float ridge = pow(max(r1, 0.8 * r2), 3.0);
    return 5000.0 * smoothstep(6.0, 8.0, st) * mix(0.3, 1.8, ridge);
  }
  // distance (cell units) to the nearest Voronoi cell border (F2-F1 style, exact border distance)
  // (loop bounds come from a uniform so the compiler cannot unroll 4 calls x 34 iterations into the shader)
  float vorEdge(vec2 x) {
    vec2 n = floor(x), f = fract(x), mr = vec2(0.0), mg = vec2(0.0);
    float md = 8.0;
    int k1 = int(u_one), k2 = 2 * k1;
    for (int j = -k1; j <= k1; j++) for (int i = -k1; i <= k1; i++) {
      vec2 g = vec2(float(i), float(j)), r = g + vec2(h21(n + g), h21(n + g + 19.19)) - f;
      float d = dot(r, r); if (d < md) { md = d; mr = r; mg = g; }
    }
    md = 8.0;
    for (int j = -k2; j <= k2; j++) for (int i = -k2; i <= k2; i++) {
      vec2 g = mg + vec2(float(i), float(j)), r = g + vec2(h21(n + g), h21(n + g + 19.19)) - f;
      if (dot(mr - r, mr - r) > 1e-5) md = min(md, dot(0.5 * (mr + r), normalize(r - mr)));
    }
    return md;
  }
  // a line of half-width w (m) at distance dist (m); thinner than a pixel (px m) it fades instead of shimmering
  float crackLine(float dist, float w, float px) { return w <= 0.0 ? 0.0 : (1.0 - smoothstep(w, w + px, dist)) * clamp(w / px, 0.0, 1.0); }
  // major fissures stay at least ~a pixel wide from far away (so they still read from 50 km), dimmed by coverage
  float fissure(float dist, float w, float px) { if (w <= 0.0) return 0.0; float W = max(w, 0.75 * px); return (1.0 - smoothstep(W, W + px, dist)) * clamp(2.5 * w / px, 0.0, 1.0); }
  // bare-earth height (m, relative to the blast origin) from the 4x4 atlas of 64x64 per-blast heightmaps;
  // float textures are not linearly filterable everywhere: NEAREST + manual bilinear
  float hmFetch(int k, ivec2 g) { g = clamp(g, ivec2(0), ivec2(63)); return texelFetch(u_hm, ivec2((k % 4) * 64, (k / 4) * 64) + g, 0).r; }
  float bareEarth(vec2 xy, float idx, float S) {
    vec2 g = clamp((xy / S * 0.5 + 0.5) * 63.0, 0.0, 63.0);
    vec2 f = fract(g); ivec2 i = ivec2(floor(g)); int k = int(idx);
    return mix(mix(hmFetch(k, i), hmFetch(k, i + ivec2(1, 0)), f.x), mix(hmFetch(k, i + ivec2(0, 1)), hmFetch(k, i + ivec2(1, 1)), f.x), f.y);
  }
`;
// Building collapse for one blast (vertex stage). Buildings are told from terrain only by their height above
// the bare-earth estimate. Per 35 m "block": inside r20 everything pancakes, in the 5 psi band some blocks
// pancake and the others stand at 60-100 % leaning away from the blast. Falls as the shock front passes.
// best = (weight, original height above ground, in fire zone, -); the strongest blast wins.
const GLSL_COLLAPSE = `
  void cfx(vec3 pEC, mat4 M, vec4 a, vec4 b, vec4 dd, vec4 e, inout vec4 best, inout vec3 bestEC, inout vec2 bestXY) {
    if (a.y <= 0.0 || e.x < 0.0) return;
    vec3 l = (M * vec4(pEC, 1.0)).xyz;
    float d = length(l.xy);
    if (d > a.z || d > e.y) return;
    float h = l.z + d * d / (2.0 * 6371000.0);
    float above = h - bareEarth(l.xy, e.x, e.y) - 3.0; // the estimate runs a few metres low: spare the streets
    if (above <= 0.0) return;
    float terrain = 1.0 - smoothstep(250.0, 400.0, above); // hundreds of metres "above ground" is a hill, not a tower
    float s = 1.0 - smoothstep(a.y, a.z, d);
    // "blocks" are smooth ~35 m noise cells, not a hard hash: a building split between two cells would otherwise
    // keep one half standing and drag the other down into a stretched curtain
    vec2 q = l.xy / 35.0 + dd.w;
    float nb = vn(q), nb2 = vn(q + 17.3), nb3 = vn(q * 0.6 + 41.7);
    float Lt = max(60.0, 0.25 * a.y);
    // e.z: the front as far as collapse knows. Fades out 12-25 km from the camera: buildings are sub-pixel there,
    // and squashing coarse LOD tiles opens seams against their finer neighbours
    float prog = smoothstep(0.0, Lt, e.z - d - nb3 * Lt * 0.6) * terrain * (1.0 - smoothstep(12000.0, 25000.0, length(pEC)));
    if (prog <= 0.0) return;
    float Rfb = max((b.w - e.w) / 3.0, 1.0);
    float vap = e.w < Rfb ? 1.0 - smoothstep(0.5 * Rfb, 0.65 * Rfb, d) : 0.0; // vaporised: nothing left, no rubble
    float down = max(vap, smoothstep(-0.07, 0.07, s * 1.1 - 0.05 - nb));      // pancaked (s = 1 inside r20: all of it)
    float keep = mix(mix(1.0, 0.6, s * nb2), mix(0.06, 0.18, nb2), down) * (1.0 - vap);
    float w = (1.0 - keep) * prog;
    if (w <= best.x) return;
    float rub = (1.0 - vap) * vn(l.xy / 7.0 + dd.w) * min(0.15 * above, 4.0);
    float dz = (above * keep + rub * (1.0 - keep) - above) * prog;
    vec2 lean = normalize(l.xy + 0.001) * above * s * 0.12 * nb2 * prog * (1.0 - down); // away from the blast
    best = vec4(w, above, d < b.x ? 1.0 : 0.0, 0.0);
    bestEC = transpose(mat3(M)) * vec3(lean, dz);
    bestXY = l.xy;
  }
`;

// ---------------------------------------------------------------------------
// Tile culling vs. vertex displacement: Cesium culls tiles with their ORIGINAL bounding boxes, so a tile sunk
// into a crater vanishes as soon as its old box leaves the view (camera inside the pit looking down).
// We wrap Cesium3DTile.updateVisibility (private API, checked on 1.146) and stretch each tile's box over the
// space its geometry can be displaced into. Recomputed only when the deformation set changes (padGen).
// ---------------------------------------------------------------------------
let padEngine = null;
function installCullPad(ts, engine) {
  padEngine = engine;
  const P = Object.getPrototypeOf(ts.root);
  if (P.__nukePad || typeof P.updateVisibility !== 'function' || !Cesium.TileOrientedBoundingBox) return;
  P.__nukePad = true;
  const orig = P.updateVisibility;
  P.updateVisibility = function (fs) { padEngine?.padTile(this); return orig.apply(this, arguments); };
}

// ---------------------------------------------------------------------------
// The engine
// ---------------------------------------------------------------------------
export class NukeEngine {
  private viewer; private scene; private camera; private cv;
  private disposers: (() => void)[] = [];
  private ev: EngineEvents;

  tool: Tool;
  armed = false;
  chain = false;
  soundOn = true;
  showRings = true;
  labelsOn = false;
  sunHour = 14;

  private blasts = []; private blastId = 0; private slots = new Array(16).fill(null);
  private bShader; private puffs; private puffPool = []; private cols; private particles = []; private flyers = [];
  private ducks = []; private turrets = []; private bombs = [];
  private base = null; private lineStart = null; private rubber = null; private mouseWorld = null;
  private FLASH = 0; private WARM = 0; private day = 1; private tint = [1, 1, 1];
  private stats = { count: 0, area: 0, cloud: 0 };
  private shake = { amp: 0, t: 0, v: 0, h: 0 };
  private keys = new Set<string>();
  private drag = null;
  private tileset = null; private labGlobe = null; private labTiles = null;
  private puffTex = makePuffTex(); private glowTex = makeGlowTex(); private jetTex = makeJetTex(); private turretTex = makeTurretTex();
  private ufoTex = makeUfoTex(); private personTex = makePersonTex(); private chunkTex = makeChunkTex();
  private chunks = [];
  private actx = null; private master = null; private noiseBuf = null; private lastSmallSound = 0;
  private geocoder;

  constructor(container: HTMLElement, tool: Tool, ev: EngineEvents) {
    this.ev = ev; this.tool = tool;
    const viewer = (this.viewer = new Cesium.Viewer(container, {
      baseLayer: false, geocoder: false, animation: false, timeline: false, baseLayerPicker: false, homeButton: false,
      sceneModePicker: false, navigationHelpButton: false, fullscreenButton: false, infoBox: false,
      selectionIndicator: false, msaaSamples: 2,
      // performance: only render when something changes (camera, tiles, or our own animations, see needsFrames)
      requestRenderMode: true, maximumRenderTimeChange: Infinity,
    }));
    viewer.useBrowserRecommendedResolution = true; // CSS-pixel resolution: on HiDPI screens 4x fewer pixels to shade
    const scene = (this.scene = viewer.scene), camera = (this.camera = viewer.camera);
    this.cv = scene.canvas;
    viewer.clock.shouldAnimate = false;
    scene.atmosphere.dynamicLighting = Cesium.DynamicAtmosphereLightingType.SUNLIGHT;
    viewer.imageryLayers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({
      url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', maximumLevel: 19, credit: 'Esri' }));
    scene.globe.show = true;
    camera.setView({ destination: Cesium.Cartesian3.fromDegrees(9.175, 45.43, 2500), orientation: { heading: Cesium.Math.toRadians(20), pitch: Cesium.Math.toRadians(-35), roll: 0 } });
    this.geocoder = new Cesium.IonGeocoderService({ scene, geocodeProviderType: Cesium.IonGeocodeProviderType.GOOGLE });

    this.setupShader();
    this.setupPost();
    this.puffs = scene.primitives.add(new Cesium.BillboardCollection({ blendOption: Cesium.BlendOption.TRANSLUCENT }));
    // one collection per texture: mixing differently sized canvases in one atlas breaks it (WebGL copy errors)
    const col = () => scene.primitives.add(new Cesium.BillboardCollection({ blendOption: Cesium.BlendOption.TRANSLUCENT }));
    this.cols = { puff: col(), glow: col(), jet: col(), misc: col(), ufo: col(), person: col(), chunk: col() };
    this.setupControls();
    this.loadGoogle();

    let last = performance.now();
    const onPre = () => {
      const now = performance.now(), dt = Math.min(0.1, (now - last) / 1000); last = now;
      this.frame(dt);
    };
    scene.preRender.addEventListener(onPre);
    this.disposers.push(() => scene.preRender.removeEventListener(onPre));

    // drive frames only while something is animating; Cesium renders camera moves and tile loads by itself
    let raf = 0;
    const tick = () => {
      if (this.needsFrames()) scene.requestRender();
      else last = performance.now(); // no time jump when animations resume
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    this.disposers.push(() => cancelAnimationFrame(raf));
  }

  private needsFrames() {
    return this.blasts.some((D) => D.t < D.E.Trise * 3 || !D.heard) || this.flyers.length > 0 || this.particles.length > 0 || this.chunks.length > 0 ||
      this.bombs.length > 0 || this.planes.length > 0 || this.turrets.length > 0 || this.ufos.length > 0 || this.ducks.some((d) => !d.rest) ||
      this.shake.amp > 0 || this.keys.size > 0 || this.recentering || this.zoomPending !== 0 || this.FLASH > 0.001 ||
      this.jobs.length > 0 || this.atlasDirty || this.mapDirty || this.gusts.length > 0 || this.blasts.some((D) => D.heat > 0) || (this.armed && this.hoverRest && !this.hoverRest.done);
  }
  private poke() { this.scene?.requestRender(); }

  dispose() {
    this.disposers.forEach((d) => d());
    if (this.actx) this.actx.close();
    this.viewer.destroy();
  }

  // ======================================================================= setup
  private async loadGoogle(attempt = 1) {
    try {
      const ts = await Cesium.createGooglePhotorealistic3DTileset({ onlyUsingWithGoogleGeocoder: true });
      if (this.viewer.isDestroyed()) return;
      ts.enableCollision = true;
      ts.customShader = this.bShader;
      installCullPad(ts, this);
      this.scene.primitives.add(ts);
      this.scene.globe.show = false;
      this.tileset = ts;
      if (this.labelsOn) this.setLabels(true);
      this.ev.status('');
    } catch (e) {
      if (this.viewer.isDestroyed()) return;
      this.scene.globe.show = true;
      const busy = String(e.statusCode || e.message || e).includes('429');
      this.ev.status(busy ? `Google 3D is busy (shared trial token), retrying… (${attempt})` : 'Google 3D unavailable: a Cesium ion token is needed.');
      if (busy && attempt < 20) { const id = setTimeout(() => this.loadGoogle(attempt + 1), 8000); this.disposers.push(() => clearTimeout(id)); }
    }
  }

  padGen = 1;
  /** how far a blast can move geometry: { reach (m from ground zero), down (m), side (m) }; see installCullPad */
  private padOf(D) {
    const E = D.X, R = E.crater, Dp = Math.min(0.4 * R, 30000), dish = dishDepth(E);
    const p = R > 0 ? { reach: 2.5 * R, down: Dp * 1.1, side: 0.15 * Dp + 5 } : { reach: E.Rfb, down: dish, side: 0 };
    if (D.hm) { p.reach = Math.max(p.reach, E.r5); p.side = Math.max(p.side, 40); } // leaning blocks
    return p;
  }
  padTile(tile) {
    if (tile.__pg === this.padGen) return;
    tile.__pg = this.padGen;
    const C3 = Cesium.Cartesian3, M3 = Cesium.Matrix3;
    for (const key of ['_boundingVolume', '_contentBoundingVolume']) {
      const v = tile[key];
      if (!(v instanceof Cesium.TileOrientedBoundingBox)) continue;
      const o = v.__o || (v.__o = Cesium.OrientedBoundingBox.clone(v.boundingVolume));
      const t = new C3(), r = o.halfAxes, sph = Cesium.BoundingSphere.fromOrientedBoundingBox(o);
      let side = 0, any = false;
      for (const D of this.blasts) {
        const p = this.padOf(D); if (!p.down && !p.side) continue;
        if (C3.distance(sph.center, D.groundPos) > p.reach + sph.radius) continue;
        C3.add(t, C3.multiplyByScalar(D.up, -p.down, new C3()), t); side = Math.max(side, p.side); any = true;
      }
      if (this.maxStress > 6) { // sunk continents: worst case of the fissure noise, at the centre and around it
        const cc = Cesium.Cartographic.fromCartesian(sph.center), up = cc && Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(sph.center, new C3());
        // (huge tiles, e.g. the root, centred near the Earth's centre: assume the worst)
        let st = !cc || sph.radius > 1e6 ? this.maxStress : this.stressAt(cc);
        if (cc && sph.radius > 15000 && sph.radius <= 1e6) { const dd = sph.radius / 6371000; for (const [a, b] of [[dd, 0], [-dd, 0], [0, dd], [0, -dd]]) st = Math.max(st, this.stressAt(new Cesium.Cartographic(cc.longitude + b / Math.max(Math.cos(cc.latitude), 0.05), cc.latitude + a))); }
        if (st > 6) { if (cc && up) C3.add(t, C3.multiplyByScalar(up, -5000 * smooth(6, 8, st) * 1.8, new C3()), t); else side = Math.max(side, 9000); any = true; }
      }
      if (!any && !v.__padded) continue;
      // box ∪ (box + t), grown by `side`: centre moves by t/2, each half axis grows by |t·axis|/2 + side
      const half = new M3();
      for (let i = 0; i < 3; i++) {
        const a = M3.getColumn(r, i, new C3()), L = C3.magnitude(a) || 1, n = C3.divideByScalar(a, L, new C3());
        M3.setColumn(half, i, C3.multiplyByScalar(n, L + Math.abs(C3.dot(t, n)) / 2 + side, new C3()), half);
      }
      v.update(C3.add(o.center, C3.multiplyByScalar(t, 0.5, new C3()), new C3()), half);
      v.__padded = any;
    }
  }

  // ---- deformation, CPU mirror of the vertex shader (smooth terms only, no noise) ----
  /** vertical offset (m, + up) of the ORIGINAL surface at world point P, summed over blasts */
  deformAt(P) {
    let z = 0;
    for (const D of this.blasts) {
      const l = Cesium.Matrix4.multiplyByPoint(D.invEnu, P, this._sc || (this._sc = new Cesium.Cartesian3()));
      z += craterZ(Math.hypot(l.x, l.y), D.X, D.crv);
    }
    if (this.maxStress > 6) z -= this.subsAt(Cesium.Cartographic.fromCartesian(P));
    return Math.max(z, -60000);
  }
  /** Height of the (deformed) surface: the single choke point for everything that stands on the ground. */
  surfaceHeight(carto) {
    let h = this.sampleH(carto);
    if (h === undefined) return undefined;
    const P = Cesium.Cartographic.toCartesian(new Cesium.Cartographic(carto.longitude, carto.latitude, h));
    // inside a collapsed zone the roofs are gone: smooth mirror of the shader (no per-block dice)
    for (const D of this.blasts) {
      if (!D.hm) continue;
      const E = D.X, l = Cesium.Matrix4.multiplyByPoint(D.invEnu, P, new Cesium.Cartesian3()), d = Math.hypot(l.x, l.y);
      if (d > E.r5 || d > D.hmS) continue;
      const g = this.hmAt(D, l.x, l.y) + D.h0 + 3, above = h - g;
      if (above <= 0 || above > 400) continue;
      const prog = smooth(0, Math.max(60, 0.25 * E.r20), D.cshock - d), s = 1 - smooth(E.r20, E.r5, d);
      h = g + above * (1 - 0.88 * s * prog);
    }
    return h + this.deformAt(P);
  }

  // ---- global damage map: 2048x1024 equirectangular RGBA8, ~20 km texels (see GLSL dmgAt) ----
  private MW = 2048; private MH = 1024;
  private mStress = new Float32Array(2048 * 1024); private mScorch = new Float32Array(2048 * 1024); private mCrater = new Float32Array(2048 * 1024);
  private mBytes = new Uint8Array(2048 * 1024 * 4); private mapDirty = false; private lastMap = 0; private maxStress = 0;
  private mapUniform() {
    const L = Cesium.TextureMinificationFilter.LINEAR, M = Cesium.TextureMagnificationFilter.LINEAR;
    return new Cesium.TextureUniform({ typedArray: this.mBytes, width: this.MW, height: this.MH, pixelFormat: Cesium.PixelFormat.RGBA, pixelDatatype: Cesium.PixelDatatype.UNSIGNED_BYTE, repeat: true, minificationFilter: L, magnificationFilter: M });
  }
  /** a blast's lasting footprint: stress +1 inside r20 fading to 0 at r1, scorch, crater depth; area-weighted per texel */
  private splat(D) {
    const E = D.X, MW = this.MW, MH = this.MH, Re = 6371000;
    const c = Cesium.Cartographic.fromCartesian(D.origin), lat0 = c.latitude, lon0 = c.longitude, R = E.crater, Dp = craterDepth(R);
    const reach = E.r1 / Re, dLon = Math.min(Math.PI, reach / Math.max(Math.cos(lat0), 0.02));
    const j0 = Math.max(0, Math.floor(((lat0 - reach) / Math.PI + 0.5) * MH)), j1 = Math.min(MH - 1, Math.floor(((lat0 + reach) / Math.PI + 0.5) * MH));
    const i0 = Math.floor(((lon0 - dLon) / (2 * Math.PI) + 0.5) * MW), i1 = Math.floor(((lon0 + dLon) / (2 * Math.PI) + 0.5) * MW);
    const ns = (2 * Math.PI * Re) / MW > 0.5 * E.r20 ? 4 : 1; // sub-texel blasts: 4x4 samples, so tiny ones add little
    const sl0 = Math.sin(lat0), cl0 = Math.cos(lat0);
    for (let j = j0; j <= j1; j++) for (let ii = i0; ii <= Math.min(i1, i0 + MW - 1); ii++) {
      const i = ((ii % MW) + MW) % MW;
      let st = 0, sc = 0, cd = 0;
      for (let a = 0; a < ns; a++) for (let b = 0; b < ns; b++) {
        const lat = ((j + (a + 0.5) / ns) / MH - 0.5) * Math.PI, lon = ((ii + (b + 0.5) / ns) / MW - 0.5) * 2 * Math.PI;
        const d = Re * Math.acos(Math.min(1, sl0 * Math.sin(lat) + cl0 * Math.cos(lat) * Math.cos(lon - lon0)));
        st += 1 - smooth(E.r20, E.r1, d);
        sc += Math.max(1 - smooth(0.7 * E.r5, E.r5, d), 0.5 * (1 - smooth(0.85 * E.rth, E.rth, d))); // (rth can exceed r5)
        if (R > 0 && d < R) cd += Dp * (1 - (d / R) ** 2);
      }
      const n = ns * ns, k = j * MW + i;
      this.mStress[k] += st / n; this.mScorch[k] = Math.max(this.mScorch[k], sc / n); this.mCrater[k] = Math.max(this.mCrater[k], cd / n);
      this.maxStress = Math.max(this.maxStress, this.mStress[k]);
      const o = k * 4, q = this.mBytes;
      q[o] = Math.min(255, Math.round(this.mScorch[k] * 255)); q[o + 1] = Math.min(255, Math.round(this.mStress[k] * 32));
      q[o + 2] = this.mCrater[k] > 0 ? Math.min(255, Math.round((Math.log2(1 + this.mCrater[k]) / Math.log2(60001)) * 255)) : 0; q[o + 3] = 255;
    }
    this.mapDirty = true; this.padGen++;
    this.bShader.setUniform('u_mapOn', 1);
  }
  private stressAt(carto) {
    const MW = this.MW, MH = this.MH, x = (carto.longitude / (2 * Math.PI) + 0.5) * MW - 0.5, y = (carto.latitude / Math.PI + 0.5) * MH - 0.5;
    const i = Math.floor(x), j = Math.max(0, Math.min(MH - 2, Math.floor(y))), fx = x - i, fy = Math.max(0, Math.min(1, y - j));
    const g = (a, b) => this.mBytes[(b * MW + (((a % MW) + MW) % MW)) * 4 + 1] / 32;
    return lerp(lerp(g(i, j), g(i + 1, j), fx), lerp(g(i, j + 1), g(i + 1, j + 1), fx), fy);
  }
  /** CPU mirror of the shader's subsidence, without the fissure noise (its mean instead) */
  private subsAt(carto) { if (this.maxStress <= 6 || !carto) return 0; const st = this.stressAt(carto); return st <= 6 ? 0 : 5000 * smooth(6, 8, st) * 0.75; }

  // ---- bare-earth heightmaps (one 64x64 grid per blast, packed in a 4x4 float atlas, tile = shader slot) ----
  private atlas = new Float32Array(256 * 256 * 4); private atlasDirty = false; private lastAtlas = 0;
  private terrainP = null; private jobs = [];
  private atlasUniform() {
    const F = Cesium.TextureMinificationFilter.NEAREST, G = Cesium.TextureMagnificationFilter.NEAREST;
    return new Cesium.TextureUniform({ typedArray: this.atlas, width: 256, height: 256, pixelFormat: Cesium.PixelFormat.RGBA, pixelDatatype: Cesium.PixelDatatype.FLOAT, minificationFilter: F, magnificationFilter: G });
  }
  /** sampleHeight costs ~10 ms (an offscreen pick): CPU work like that goes through this queue, ≤ 8 ms per frame */
  private runJobs() {
    const t0 = performance.now();
    if (this.jobs.length) {
      const restore = this.hideForSampling();
      try { while (this.jobs.length && performance.now() - t0 < 8) { const r = this.jobs[0](); if (r === 'wait') break; if (r) this.jobs.shift(); } } finally { restore(); }
    }
    if (this.mapDirty && performance.now() - this.lastMap > 250) { // ≤ 4 uploads a second (8 MB each)
      this.mapDirty = false; this.lastMap = performance.now();
      this.bShader.setUniform('u_map', this.mapUniform());
    }
    if (this.atlasDirty && performance.now() - this.lastAtlas > 250) {
      this.atlasDirty = false; this.lastAtlas = performance.now();
      this.bShader.setUniform('u_hm', this.atlasUniform());
    }
  }
  /** height of the 3D tiles only: plain sampleHeight also hits clouds, billboards and models (8 km "ground") */
  //  (objectsToExclude does not work for billboards: the pick reports the billboard, not its collection, so
  //  everything that is not the tileset is hidden for the duration; no frame is drawn in between)
  private sampleH(carto) {
    const restore = this.hideForSampling();
    try { return this.scene.sampleHeight(carto, this.viewer.entities.values); } catch { return undefined; } finally { restore(); }
  }
  private hiding = false;
  private hideForSampling() {
    if (this.hiding) return () => {};
    const P = this.scene.primitives, off = [];
    for (let i = 0; i < P.length; i++) { const q = P.get(i); if (q !== this.tileset && q.show) { q.show = false; off.push(q); } }
    this.hiding = true;
    return () => { off.forEach((q) => (q.show = true)); this.hiding = false; };
  }
  /**
   * Bare-earth estimate around a blast, async (never blocks the blast): Cesium World Terrain on a 64x64 grid over
   * ±S, opened to drop the buildings it carries, then shifted onto the Google streets (calP). Fallbacks:
   * a plane through the lowest Google samples, then a flat plane. Heights are relative to the origin.
   * It takes ~2-4 s (sampleHeight is ~10 ms a call), longer than the shock needs to cross a small bomb's r5, so it
   * is PREPARED ahead when possible: while the armed cursor rests, when a missile is fired, for chain-reaction sites.
   */
  private preps = [];
  private hmSize(E) { return Math.min(30000, Math.max(300, 1.1 * damageOf(E).r5)); }
  prepHeightmap(origin, S) {
    if (!this.tileset) return null;
    const C3 = Cesium.Cartesian3, N = 64;
    const near = this.preps.find((q) => !q.dead && q.S >= S * 0.9 && q.S <= S * 2 && C3.distance(q.origin, origin) < 0.03 * S);
    if (near) return near;
    const enu = Cesium.Transforms.eastNorthUpToFixedFrame(origin), oc = Cesium.Cartographic.fromCartesian(origin), h0 = oc.height;
    const Q: any = { origin: C3.clone(origin), S, h0, ready: false, waiters: [], dead: false };
    const cartoAt = (x, y) => Cesium.Cartographic.fromCartesian(Cesium.Matrix4.multiplyByPoint(enu, new C3(x, y, 0), new C3()));
    /** Google heights (relative to h0) at blast-local points, through the frame-budgeted job queue */
    const sample = (pts) => new Promise((resolve) => {
      const out = pts.map(() => null); let k = 0;
      let wait = 0;
      this.jobs.push(() => {
        if (Q.dead) { resolve(out); return true; }
        // while tiles are still loading, sampleHeight hits coarse LODs (seen: -26 km, then +1 km right after load)
        if (!this.tileset.tilesLoaded && (wait ||= performance.now()) && performance.now() - wait < 3000) return 'wait';
        const [x, y] = pts[k]; const h = this.sampleH(cartoAt(x, y)); if (h !== undefined) out[k] = { x, y, h: h - h0 };
        if (++k >= pts.length) { resolve(out); return true; }
        return false;
      });
    });
    const grid = []; for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) grid.push(cartoAt(-S + (2 * S * i) / (N - 1), -S + (2 * S * j) / (N - 1)));
    const level = Math.max(0, Math.min(13, Math.round(Math.log2((20037508 * Math.max(0.2, Math.cos(oc.latitude))) / (64 * ((2 * S) / (N - 1)))))));
    // World Terrain is NOT bare earth in cities: it carries smoothed buildings (central Milan: +6..31 m over the
    // streets). A morphological opening (~250 m) drops blocks but keeps slopes; a light blur smooths the steps.
    Q.dtmP = (this.terrainP ||= Cesium.createWorldTerrainAsync().catch(() => null))
      .then((tp) => (tp && !Q.dead ? Cesium.sampleTerrain(tp, level, grid) : null))
      .then((res) => {
        if (!res || !res.every((c) => Number.isFinite(c.height))) return null;
        const kr = Math.max(1, Math.min(6, Math.round(250 / ((2 * S) / (N - 1)))));
        return filt2(filt2(filt2(Float32Array.from(res, (c) => c.height - h0), N, kr, Math.min), N, kr, Math.max), N, Math.max(1, kr >> 1), null);
      })
      .catch(() => null);
    const at = (dtm, x, y) => { const gx = Math.max(0, Math.min(N - 1.001, ((x / S) * 0.5 + 0.5) * (N - 1))), gy = Math.max(0, Math.min(N - 1.001, ((y / S) * 0.5 + 0.5) * (N - 1))); const i = Math.floor(gx), j = Math.floor(gy), fx = gx - i, fy = gy - j, g = (a, b) => dtm[b * N + a]; return lerp(lerp(g(i, j), g(i + 1, j), fx), lerp(g(i, j + 1), g(i + 1, j + 1), fx), fy); };
    // Google - terrain is a regional offset: a prep within ~5 km of another reuses its calibration (no sampling)
    const donor = this.preps.find((q) => !q.dead && q.calP && q.calOk !== false && C3.distance(q.origin, origin) < Math.max(5000, 2 * S));
    if (donor) Q.calP = donor.calP;
    else {
      // 12 clusters of 4 Google samples within ~30 m: the lowest of each is most likely a street or courtyard
      const pts = [];
      for (let k = 0; k < 12; k++) { const r = 0.7 * S * Math.sqrt((k + 0.5) / 12), a = k * 2.39996; for (let m = 0; m < 4; m++) { const b = Math.random() * 6.283, q = 30 * Math.sqrt(Math.random()); pts.push([r * Math.cos(a) + q * Math.cos(b), r * Math.sin(a) + q * Math.sin(b)]); } }
      Q.calP = Promise.all([Q.dtmP, sample(pts)]).then(([dtm, got]) => {
        if (!dtm) return null;
        // one robust offset: the median over clusters of (lowest sample - terrain). A fitted plane chased the
        // lowest points (a harbour) and tilted the ground under the hills (Genoa: slopes 15-46 m too low)
        const res = [];
        for (let k = 0; k < 12; k++) { const cl = got.slice(k * 4, k * 4 + 4).filter(Boolean); if (cl.length) { const lo = cl.reduce((a, b) => (b.h < a.h ? b : a)); res.push(lo.h - at(dtm, lo.x, lo.y)); } }
        res.sort((a, b) => a - b);
        if (res.length < 3) return null;
        // where the terrain is unreliable (residuals spread wide: ±25 m in Genoa) lift the estimate, so hillsides
        // it gets wrong are not flattened as if they were buildings; only the upper floors fall there
        const iqr = res.length >= 4 ? res[Math.floor(res.length * 0.75)] - res[Math.floor(res.length * 0.25)] : 0;
        const off = res[res.length >> 1], ok = got.filter(Boolean);
        // real Google-vs-terrain offsets are tens of metres. Right after load the tiles are still coarse and
        // sampleHeight can be ~1 km off: such a calibration put the "ground" 980 m up and nothing collapsed
        if (Math.abs(off) > 150) return null;
        // share of samples standing > 6 m above the ground estimate: how built-up the place is (debris rate)
        const urban = ok.length ? ok.filter((q) => q.h - at(dtm, q.x, q.y) - off > 6).length / ok.length : 0.3;
        return { off, margin: Math.min(12, 0.75 * iqr), res, urban };
      });
    }
    Promise.all([Q.dtmP, Q.calP]).then(async ([dtm, cal]) => {
      Q.calOk = !!cal; // a rejected calibration is never shared with later preps
      if (Q.dead) return;
      const hm = new Float32Array(N * N);
      if (dtm) {
        const c = cal || { off: 0, margin: 8 };
        for (let k = 0; k < N * N; k++) hm[k] = dtm[k] + c.off + c.margin;
        Q.src = cal ? 'terrain' : 'terrain-uncal'; Q.res = c.res; Q.margin = c.margin; Q.urban = c.urban ?? 0.3;
      } else {
        // no terrain: lower envelope of a 7x7 net of Google samples, else flat
        const net = []; for (let j = 0; j < 7; j++) for (let i = 0; i < 7; i++) net.push([S * 0.85 * (i / 3 - 1), S * 0.85 * (j / 3 - 1)]);
        const pl = lowerEnvelope((await sample(net)).filter(Boolean));
        for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) { const x = -S + (2 * S * i) / (N - 1), y = -S + (2 * S * j) / (N - 1); hm[j * N + i] = pl ? pl[0] + pl[1] * x + pl[2] * y : 0; }
        Q.src = pl ? 'plane' : 'flat';
      }
      Q.hm = hm; Q.ready = true;
      Q.waiters.forEach((D) => !D.dead && this.applyPrep(D, Q)); Q.waiters = [];
    });
    this.preps.push(Q);
    // keep a few finished ones for reuse (in-progress ones always stay: a blast may be about to wait on them)
    while (this.preps.filter((q) => q.ready).length > 4) this.preps.splice(this.preps.findIndex((q) => q.ready), 1);
    return Q;
  }
  /** prepare for a weapon about to hit `pos` (hover, missile in flight, chain site) */
  private prepFor(pos, w) {
    if (!this.tileset || !pos || !(w.W > 0) || !['nuke', 'asteroid', 'rod', 'icbm'].includes(w.kind)) return;
    this.prepHeightmap(pos, this.hmSize(effects(w.W, w.air, w.hob)));
  }
  private startHeightmap(D) {
    if (!this.tileset) return;
    D.hmS = this.hmSize(D.E); D.hm = null;
    const Q = this.prepHeightmap(D.origin, D.hmS);
    if (!Q) return;
    D.hmS = Q.S; D.prep = Q;
    if (Q.ready) this.applyPrep(D, Q); else Q.waiters.push(D);
  }
  /** a blast takes a prepared heightmap (its origin may sit a little off and higher or lower: re-reference it) */
  private applyPrep(D, Q) {
    const h0 = Cesium.Cartographic.fromCartesian(D.origin).height, dz = Q.h0 - h0;
    D.hm = dz ? Q.hm.map((v) => v + dz) : Q.hm; D.h0 = h0; D.hmS = Q.S;
    // A click during the first seconds after load lands on coarse tiles (~1 km off): if ground zero is far from
    // the ground estimate, the whole blast moves down (or up) onto it
    const off = D.hm[32 * 64 + 32] - (Q.margin || 0);
    if (Math.abs(off) > 150) {
      const C3 = Cesium.Cartesian3, sh = C3.multiplyByScalar(D.up, off, new C3());
      C3.add(D.origin, sh, D.origin); C3.add(D.groundPos, sh, D.groundPos);
      D.enu = Cesium.Transforms.eastNorthUpToFixedFrame(D.groundPos); D.enuO = null;
      D.invEnu = Cesium.Matrix4.inverseTransformation(Cesium.Transforms.eastNorthUpToFixedFrame(D.origin), new Cesium.Matrix4());
      D.hm = D.hm.map((v) => v - off); D.h0 += off; D.reanchored = off;
    }
    D.hmSrc = Q.src; D.hmRes = Q.res; D.hmMargin = Q.margin; D.urban = Q.urban ?? 0.3;
    this.padGen++; // padOf changes once a heightmap exists (leaning blocks)
    this.writeAtlas(D);
  }
  private writeAtlas(D) {
    if (!D.hm || D.slot < 0) return;
    const tx = D.slot % 4, ty = Math.floor(D.slot / 4);
    for (let j = 0; j < 64; j++) for (let i = 0; i < 64; i++) this.atlas[((ty * 64 + j) * 256 + tx * 64 + i) * 4] = D.hm[j * 64 + i];
    this.atlasDirty = true; this.poke();
  }
  /** CPU bilinear of a blast's heightmap at blast-local x, y (m, relative to the origin) */
  private hmAt(D, x, y) {
    const N = 64, S = D.hmS, gx = Math.max(0, Math.min(N - 1.001, ((x / S) * 0.5 + 0.5) * (N - 1))), gy = Math.max(0, Math.min(N - 1.001, ((y / S) * 0.5 + 0.5) * (N - 1)));
    const i = Math.floor(gx), j = Math.floor(gy), fx = gx - i, fy = gy - j, g = (a, b) => D.hm[b * N + a];
    return lerp(lerp(g(i, j), g(i + 1, j), fx), lerp(g(i, j + 1), g(i + 1, j + 1), fx), fy);
  }

  private MAX = 16;
  private setupShader() {
    const U = Cesium.UniformType, uniforms = {};
    // ONE loop over the slots, not 16 copies of the body: the unrolled shader was 75 KB and took 2.5 s to compile
    // on every new tile variant (labels on/off...), far worse with Direct3D on Windows. Uniforms cannot be
    // indexed, so small getters pick slot i's.
    let get = '';
    for (const [fn, ty, u] of [['sM', 'mat4', 'u_m'], ['sA', 'vec4', 'u_a'], ['sB', 'vec4', 'u_b'], ['sD', 'vec4', 'u_d'], ['sE', 'vec4', 'u_e']]) {
      get += `${ty} ${fn}(int i) {`;
      for (let i = 0; i < this.MAX - 1; i++) get += ` if (i == ${i}) return ${u}${i};`;
      get += ` return ${u}${this.MAX - 1}; }\n`;
    }
    for (let i = 0; i < this.MAX; i++) {
      // u_m = inverse(blast ENU) * inverse(view), built in doubles every frame: eye coords -> blast-local metres,
      // precise near the blast (float32 world coords are only good to ~0.5 m)
      uniforms['u_m' + i] = { type: U.MAT4, value: new Cesium.Matrix4() };
      uniforms['u_a' + i] = { type: U.VEC4, value: new Cesium.Cartesian4() }; // shock, r20, r5, r1
      uniforms['u_b' + i] = { type: U.VEC4, value: new Cesium.Cartesian4(0, 0, 0, 1) }; // rth, burn, glowB, glow radius
      uniforms['u_d' + i] = { type: U.VEC4, value: new Cesium.Cartesian4() }; // crater radius, crater progress, heat, seed
      uniforms['u_e' + i] = { type: U.VEC4, value: new Cesium.Cartesian4() }; // atlas idx, atlas half-extent, collapse, hob
    }
    uniforms.u_n = { type: U.FLOAT, value: 0 };
    uniforms.u_one = { type: U.FLOAT, value: 1 }; // always 1: a loop bound the compiler cannot see through     // slots in use (highest index + 1)
    uniforms.u_mapOn = { type: U.FLOAT, value: 0 }; // anything in the global damage map at all
    uniforms.u_hm = { type: U.SAMPLER_2D, value: this.atlasUniform() };
    uniforms.u_map = { type: U.SAMPLER_2D, value: this.mapUniform() };
    uniforms.u_rings = { type: U.FLOAT, value: this.showRings ? 1 : 0 };
    this.bShader = new Cesium.CustomShader({
      uniforms,
      varyings: { v_col: Cesium.VaryingType.VEC4, v_rxy: Cesium.VaryingType.VEC2 },
      vertexShaderText: get + GLSL_COMMON + GLSL_COLLAPSE + `
      // displacement of one blast, in eye coordinates (summed over blasts, then taken back to model space)
      vec3 vfx(vec3 pEC, mat4 M, vec4 a, vec4 b, vec4 dd, vec4 e) {
        if (a.y <= 0.0 || dd.y <= 0.0) return vec3(0.0);
        vec3 l = (M * vec4(pEC, 1.0)).xyz;
        float z = craterZ(l.xy, dd.x, dd.y, dd.w, max((b.w - e.w) / 3.0, 1.0), e.w);
        return z == 0.0 ? vec3(0.0) : transpose(mat3(M)) * vec3(0.0, 0.0, z);
      }
      void vertexMain(VertexInput vsInput, inout czm_modelVertexOutput vsOutput) {
        vec3 pEC = (czm_modelView * vec4(vsOutput.positionMC, 1.0)).xyz;
        vec3 dEC = vec3(0.0);
        vec4 best = vec4(0.0); vec3 bestEC = vec3(0.0); vec2 bestXY = vec2(0.0);
        int n = int(u_n);
        for (int i = 0; i < n; i++) {
          mat4 M = sM(i); vec4 a = sA(i), b = sB(i), dd = sD(i), e = sE(i);
          dEC += vfx(pEC, M, a, b, dd, e);
          cfx(pEC, M, a, b, dd, e, best, bestEC, bestXY);
        }
        // overlapping craters add up; never deeper than ~60 km
        float sub = 0.0;
        if (u_mapOn > 0.0) {
          vec2 ll = lonLat(pEC);
          sub = subsidence(dmgAt(ll).g * 255.0 / 32.0, globeXY(ll));
          dEC -= normalize(pEC - czm_view[3].xyz) * sub; // czm_view[3]: the Earth's centre in eye coordinates
        }
        float L = length(dEC);
        if (L > 60000.0) dEC *= 60000.0 / L;
        v_col = vec4(best.xyz, sub); v_rxy = bestXY;
        vsOutput.positionMC += mat3(czm_inverseModelView) * (dEC + bestEC);
      }`,
      fragmentShaderText: get + GLSL_COMMON + `
      void fx(vec3 pEC, mat4 M, vec4 a, vec4 b, vec4 dd, vec4 e, vec3 tint, inout czm_modelMaterial m,
              inout vec4 ck, inout vec4 ck2, inout vec2 ckXY, inout vec3 ckUp) {
        if (a.y <= 0.0) return;
        vec3 l = (M * vec4(pEC, 1.0)).xyz;
        float d = length(l.xy), maxR = a.w * 1.15;
        if (d > maxR * 1.05) return;
        ck2.z = max(ck2.z, 1.0 - smoothstep(0.9 * a.w, 1.1 * a.w, d)); // this slot draws its own scar out to r1
        // blast darkening behind the front (as before)
        float lim = min(a.x, a.z);
        float k = (1.0 - smoothstep(lim * 0.85, lim, d)) * mix(0.55, 0.9, 1.0 - smoothstep(a.y * 0.7, a.y * 1.2, d));
        m.diffuse = mix(m.diffuse, vec3(0.1, 0.08, 0.065) * tint, k);
        // the old ground decal, now on the tiles themselves (a classification volume cannot reach a crater floor)
        float Rfb = max((b.w - e.w) / 3.0, 1.0), burn = b.y;
        float scorch = burn * (0.45 * (1.0 - smoothstep(Rfb * 0.8, Rfb * 3.0, d)) + 0.2 * (1.0 - smoothstep(b.x * 0.85, b.x, d)));
        m.diffuse = mix(m.diffuse, vec3(0.07, 0.05, 0.035) * tint, clamp(scorch, 0.0, 0.95));
        float R = dd.x;
        if (R > 0.0 && dd.y > 0.0 && d < R * 2.5) {
          float r = d / R, crv = dd.y;
          vec2 q = l.xy / R + dd.w;
          float n = vn(q * 3.0), n2 = vn(q * 18.0);
          float ej = crv * 0.45 * smoothstep(0.95, 1.1, r) * (1.0 - smoothstep(1.2, 2.5, r + 0.3 * (n - 0.5)));
          m.diffuse = mix(m.diffuse, vec3(0.17, 0.145, 0.115) * tint * (0.75 + 0.5 * n2), ej);
          float rim = crv * smoothstep(0.8, 1.0, r) * (1.0 - smoothstep(1.0, 1.35, r));
          m.diffuse = mix(m.diffuse, vec3(0.24, 0.2, 0.155) * tint * (0.8 + 0.4 * n), rim * 0.7);
          // the bowl: dark vitrified glass with a faint sheen, glowing while hot
          float bowl = crv * (1.0 - smoothstep(0.85, 1.0, r));
          ck2.w = max(ck2.w, max(bowl, rim)); // the crater wins over rubble tint (drawn after this loop)
          vec3 glass = mix(vec3(0.022, 0.02, 0.024), vec3(0.07, 0.065, 0.07), n2 * n2) * tint;
          m.diffuse = mix(m.diffuse, glass, bowl * 0.95);
          float heat = dd.z * bowl * (1.0 - smoothstep(0.3, 0.95, r));
          m.diffuse += vec3(1.0, 0.36, 0.08) * heat * (0.35 + 0.9 * smoothstep(0.45, 0.8, vn(q * 7.0)));
        }
        // shock ring travelling outward (ring toggle)
        float sh = a.x / maxR;
        if (u_rings > 0.0 && sh > 0.001) {
          float rr = d / maxR;
          float ring = smoothstep(sh - 0.035, sh, rr) * (1.0 - smoothstep(sh, sh + 0.006, rr)) * (1.0 - smoothstep(0.75, 1.0, sh));
          m.diffuse = mix(m.diffuse, vec3(1.0, 0.8, 0.55), ring * 0.5);
          m.diffuse += vec3(1.0, 0.7, 0.4) * ring * 0.25;
        }
        m.diffuse += vec3(1.0, 0.55, 0.2) * b.z / (1.0 + pow(d / b.w, 2.0));
        // ground cracks: strongest from the crater rim out to r20, gone by r5; ground bursts far more than air bursts.
        // Only the strongest blast's field is kept (its precise local frame also carries the shared crack web).
        float gf = R > 0.0 ? 1.0 : 0.35 * (1.0 - smoothstep(Rfb, 4.0 * Rfb, e.w));
        float ci = gf * (1.0 - smoothstep(a.y, a.z, d)) * smoothstep(d, d + 0.1 * a.y + 1.0, a.x);
        if (ci > ck.x) {
          float ang = atan(l.y, l.x) / 6.2832 + 0.5, wl = vn(l.xy / (0.15 * a.y + 1.0) + dd.w);
          // radial cracks: hashed angular sectors (domain-warped), each running out to its own length
          float ns = floor(10.0 + 14.0 * h21(vec2(dd.w, 3.7))), sec = ang * ns + 0.35 * (wl - 0.5);
          float rLen = mix(0.45, 1.0, h21(vec2(floor(sec + 0.5), dd.w))) * a.y, r0 = R > 0.0 ? 0.9 * R : 0.15 * a.y;
          float wRad = clamp(0.02 * max(R, 0.1 * a.y), 0.4, 40.0) * (1.0 - smoothstep(0.6 * rLen, rLen, d)) * step(r0, d);
          // concentric arcs at multiples of the crater radius (or of r20 for air bursts)
          float sp = R > 0.0 ? 0.55 * R : 0.18 * a.y, rq = (d - r0) / sp + 0.4 * (wl - 0.5);
          float wCon = 0.7 * clamp(0.02 * max(R, 0.1 * a.y), 0.4, 40.0) * step(0.5, vn(vec2(ang * 9.0, floor(rq + 0.5)) + dd.w)) * step(r0, d) * (1.0 - smoothstep(0.5 * a.y, a.y, d));
          ck = vec4(ci, dd.z, wRad, wCon);
          ck2 = vec4(abs(fract(sec + 0.5) - 0.5) / ns * 6.2832 * d, abs(fract(rq + 0.5) - 0.5) * sp, ck2.z, ck2.w);
          ckXY = l.xy; ckUp = transpose(mat3(M)) * vec3(0.0, 0.0, 1.0);
        }
      }
      // NB: Google tiles are unlit, and the unlit path ignores material.emissive: glows are added to diffuse
      void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
        vec3 p = fsInput.attributes.positionWC, pEC = fsInput.attributes.positionEC;
        // per-pixel day/night: the sun lights half the globe, with a soft terminator and a warm golden band
        float sd = dot(normalize(p), czm_sunDirectionWC);
        float day = smoothstep(-0.10, 0.12, sd);
        float golden = day * (1.0 - smoothstep(0.04, 0.38, sd));
        vec3 tint = mix(vec3(0.09, 0.12, 0.21), vec3(1.0), day) * mix(vec3(1.0), vec3(1.14, 0.86, 0.66), golden);
        material.diffuse *= tint;
        // derivatives up here, in uniform control flow: metres per pixel and the surface normal (tiles have none)
        vec3 dpx = dFdx(pEC), dpy = dFdy(pEC);
        float px = max(max(length(dpx), length(dpy)), 1e-3);
        vec3 nEC = normalize(cross(dpx, dpy));
        vec4 ck = vec4(0.0), ck2 = vec4(0.0); vec2 ckXY = vec2(0.0); vec3 ckUp = vec3(0.0, 0.0, 1.0);
        int n = int(u_n);
        for (int i = 0; i < n; i++) fx(pEC, sM(i), sA(i), sB(i), sD(i), sE(i), tint, material, ck, ck2, ckXY, ckUp);
        // collapsed buildings: the stretched photo turns into rubble (burnt in the fire zone); soot on standing walls
        float col = v_col.x, abv = v_col.y, fire = v_col.z;
        if (col > 0.02) {
          float r = vn(v_rxy / 2.5) * 0.6 + vn(v_rxy / 0.7) * 0.4;
          vec3 rub = mix(vec3(0.34, 0.31, 0.28), vec3(0.17, 0.15, 0.13), r) * mix(1.0, 0.5, fire);
          material.diffuse = mix(material.diffuse, rub * tint, smoothstep(0.25, 0.7, col) * smoothstep(0.5, 2.5, abv) * 0.9 * (1.0 - smoothstep(4.0, 20.0, px)) * (1.0 - ck2.w));
        }
        material.diffuse *= 1.0 - 0.45 * fire * smoothstep(3.0, 10.0, abv) * (1.0 - smoothstep(0.1, 0.4, col));
        // the global damage map: old scars no slot draws (weighted by 1 - slot coverage), and cumulative stress
        vec2 ll = vec2(0.0), gxy = vec2(0.0); vec4 dm = vec4(0.0);
        if (u_mapOn > 0.0) { ll = lonLat(pEC); dm = dmgAt(ll); gxy = globeXY(ll); }
        float far = 1.0 - ck2.z;
        vec3 upEC = normalize(pEC - czm_view[3].xyz);
        float lvl = smoothstep(0.55, 0.85, abs(dot(nEC, upEC)));
        material.diffuse = mix(material.diffuse, vec3(0.07, 0.055, 0.04) * tint, 0.85 * dm.r * far);
        float cdep = exp2(dm.b * log2(60001.0)) - 1.0;
        material.diffuse = mix(material.diffuse, vec3(0.03, 0.028, 0.03) * tint, smoothstep(5.0, 300.0, cdep) * far);
        float st = dm.g * 255.0 / 32.0;
        if (st > 2.0) { // > 2: cracks appear; > 4: they widen and glow, for good
          float I = smoothstep(2.0, 4.0, st), hot = smoothstep(4.0, 6.0, st);
          float e1 = vorEdge(gxy / 1500.0) * 1500.0, w1 = mix(1.0, 7.0, I) * (1.0 + hot) * step(0.6 - 0.25 * I, vn(gxy / 4000.0 + 1.7));
          float e2 = vorEdge(gxy / 150.0 + 3.3) * 150.0, w2 = mix(0.3, 1.5, I) * step(0.55, vn(gxy / 500.0));
          float big = fissure(e1, w1, px) * lvl, small = crackLine(e2, w2, px) * lvl;
          float halo = crackLine(e1, w1 * 2.2, px) * lvl;
          material.diffuse *= 1.0 - 0.4 * halo * I;
          material.diffuse = mix(material.diffuse, vec3(0.012, 0.01, 0.009), max(big, small) * I);
          material.diffuse += vec3(1.0, 0.33, 0.06) * hot * (0.9 * big + 0.1 * halo); // only the big fissures glow
        }
        // the floor of the deepest subsidence: a crust over glowing magma
        float sub = v_col.w;
        if (sub > 1200.0) {
          float mg = smoothstep(1200.0, 5000.0, sub), n = vn(gxy / 2500.0), n2 = vn(gxy / 600.0 + 1.3);
          material.diffuse = mix(material.diffuse, vec3(0.06, 0.03, 0.025) * mix(0.6, 1.2, n2) * tint, mg);
          material.diffuse += vec3(1.0, 0.3, 0.04) * mg * (0.08 + 1.1 * smoothstep(0.62, 0.85, n) * smoothstep(0.35, 0.7, n2));
        }
        // cracks: a broken Voronoi web (~60 m and ~8 m cells) plus the blast's radial and concentric cracks.
        // Dark core, wider inner shadow, glowing while hot. Ground and rubble only: never on walls or standing roofs.
        if (ck.x > 0.01) {
          float level = smoothstep(0.55, 0.85, abs(dot(nEC, ckUp)));
          float grd = clamp((1.0 - smoothstep(1.0, 4.0, abv)) + smoothstep(0.4, 0.8, col), 0.0, 1.0);
          float I = ck.x, k = I * level * grd;
          if (k > 0.01) {
            float e1 = vorEdge(ckXY / 60.0) * 60.0, w1 = mix(0.15, 1.1, I) * step(1.0 - 0.45 * I, vn(ckXY / 140.0 + 5.1));
            float e2 = vorEdge(ckXY / 8.0 + 7.3) * 8.0, w2 = 0.18 * smoothstep(0.45, 0.85, I) * step(0.45, vn(ckXY / 25.0 + 2.2));
            float core = max(max(crackLine(e1, w1, px), crackLine(e2, w2, px)), max(fissure(ck2.x, ck.z, px), fissure(ck2.y, ck.w, px)));
            float halo = max(max(crackLine(e1, w1 * 2.0, px), crackLine(e2, w2 * 2.0, px)), max(crackLine(ck2.x, ck.z * 2.2, px), crackLine(ck2.y, ck.w * 2.2, px)));
            material.diffuse *= 1.0 - 0.5 * halo * k;
            material.diffuse = mix(material.diffuse, vec3(0.012, 0.01, 0.009), core * k);
            material.diffuse += vec3(1.0, 0.36, 0.07) * pow(ck.y, 1.5) * k * (1.4 * core + 0.2 * halo); // the glow fades before the heat
          }
        }
      }`,
    });
  }

  private setupPost() {
    const st = this.scene.postProcessStages;
    st.add(new Cesium.PostProcessStage({
      fragmentShader: `
        uniform sampler2D colorTexture; uniform float u_flash; uniform float u_warm;
        in vec2 v_textureCoordinates;
        void main() {
          vec3 c = texture(colorTexture, v_textureCoordinates).rgb;
          c *= vec3(1.0 + 0.45 * u_warm, 1.0 + 0.18 * u_warm, 1.0 - 0.1 * u_warm);
          // gentle cinematic grade: a bit of saturation and contrast, teal shadows / warm highlights
          float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
          c = mix(vec3(l), c, 1.1);
          c = (c - 0.5) * 1.07 + 0.5;
          c += vec3(-0.012, 0.004, 0.022) * (1.0 - l) + vec3(0.022, 0.008, -0.016) * l;
          vec2 uv = v_textureCoordinates - 0.5;
          c *= mix(0.68, 1.0, smoothstep(0.85, 0.2, length(uv * vec2(1.15, 1.0))));
          out_FragColor = vec4(mix(c, vec3(1.0, 0.98, 0.93), u_flash), 1.0);
        }`,
      uniforms: { u_flash: () => this.FLASH, u_warm: () => this.WARM },
    }));
  }

  // ======================================================================= controls
  private pickWorld(pos) {
    const scene = this.scene;
    let p = scene.pickPositionSupported ? scene.pickPosition(pos) : undefined;
    if (!Cesium.defined(p) && scene.globe.show) p = scene.globe.pick(this.camera.getPickRay(pos), scene);
    if (!Cesium.defined(p)) p = this.camera.pickEllipsoid(pos);
    return p;
  }
  /**
   * The ground point under the cursor for navigation pivots. pickPosition reads the depth buffer: when the pixel
   * is sky, a tile still loading, or the depth is stale, it misses or lands somewhere else (then the pivot fell
   * onto the ellipsoid, under the real ground). Validate it against the cursor ray; else cast the ray into the
   * tiles; else the ellipsoid.
   */
  navPick(pos) {
    const scene = this.scene, C3 = Cesium.Cartesian3, ray = this.camera.getPickRay(pos);
    if (!ray) return undefined;
    const onRay = (p) => {
      if (!p) return false;
      const v = C3.subtract(p, ray.origin, new C3()), t = C3.dot(v, ray.direction);
      if (t <= 0) return false;
      const off = C3.distance(p, C3.add(ray.origin, C3.multiplyByScalar(ray.direction, t, new C3()), new C3()));
      return off < Math.max(3, 0.01 * t);
    };
    let p = scene.pickPositionSupported ? scene.pickPosition(pos) : undefined;
    if (onRay(p)) return p;
    if (this.tileset) {
      const restore = this.hideForSampling();
      try { const r = scene.pickFromRay(ray, this.viewer.entities.values); if (r && onRay(r.position)) return r.position; } catch {} finally { restore(); }
    }
    return this.camera.pickEllipsoid(pos) || p;
  }
  private centerPoint() { return this.pickWorld(new Cesium.Cartesian2(this.cv.clientWidth / 2, this.cv.clientHeight / 2)); }

  private setupControls() {
    const { scene, camera, cv } = this;
    const C3 = Cesium.Cartesian3;
    const ctl = scene.screenSpaceCameraController;
    const T = Cesium.CameraEventType, M = Cesium.KeyboardEventModifier;
    ctl.rotateEventTypes = T.LEFT_DRAG;
    ctl.translateEventTypes = T.LEFT_DRAG;
    ctl.zoomEventTypes = [T.PINCH]; // wheel zoom is ours (see 'wheel' below): Cesium's escapes into space when no globe is under the cursor
    ctl.enableTilt = false;
    ctl.lookEventTypes = [{ eventType: T.LEFT_DRAG, modifier: M.CTRL }];
    ctl.minimumZoomDistance = 15;
    ctl.maximumZoomDistance = 2.5e7; // whole globe in view, never lost in deep space
    ctl.enableCollisionDetection = true;
    this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

    const on = (t, type, fn, o?) => { t.addEventListener(type, fn, o); this.disposers.push(() => t.removeEventListener(type, fn, o)); };
    on(cv, 'contextmenu', (e) => e.preventDefault());
    // Wheel zoom: always toward/away from a point ON the globe (under the cursor, or the nearest one),
    // eased over a few frames. Zooming out also arms the gentle re-centring (heading frozen at its value now).
    on(cv, 'wheel', (e) => {
      e.preventDefault();
      const r = cv.getBoundingClientRect(), pos = new Cesium.Cartesian2(e.clientX - r.left, e.clientY - r.top);
      const dy = e.deltaMode === 1 ? e.deltaY * 40 : e.deltaY;
      let P = this.navPick(pos) || camera.pickEllipsoid(new Cesium.Cartesian2(cv.clientWidth / 2, cv.clientHeight / 2));
      if (!P) { // looking at space: zoom toward the point of the Earth right below the camera
        const c = Cesium.Cartographic.fromCartesian(camera.positionWC); c.height = 0;
        P = Cesium.Cartographic.toCartesian(c);
      }
      this.zoomTarget = P;
      // capped low and drained fast: a hard flick must not keep the zoom rolling after the wheel stops
      this.zoomPending = Cesium.Math.clamp((this.zoomPending || 0) + dy * 0.0016, -1.2, 1.2);
      if (dy > 0) {
        if (performance.now() > this.zoomOutUntil) this.recenterHeading = camera.heading;
        this.zoomOutUntil = performance.now() + 300;
      }
      this.poke();
    }, { passive: false });
    on(cv, 'mousedown', (e) => { if (e.button === 1) e.preventDefault(); });
    const evPos = (e) => { const r = cv.getBoundingClientRect(); return new Cesium.Cartesian2(e.clientX - r.left, e.clientY - r.top); };
    const orbit = (P, axis, angle) => {
      const R = Cesium.Matrix3.fromQuaternion(Cesium.Quaternion.fromAxisAngle(axis, angle));
      const rel = C3.subtract(camera.positionWC, P, new C3());
      return { pos: C3.add(P, Cesium.Matrix3.multiplyByVector(R, rel, new C3()), new C3()), dir: Cesium.Matrix3.multiplyByVector(R, camera.directionWC, new C3()), up: Cesium.Matrix3.multiplyByVector(R, camera.upWC, new C3()) };
    };
    const elevation = (pos, P, up) => { const v = C3.subtract(pos, P, new C3()); return Math.asin(C3.dot(v, up) / C3.magnitude(v)); };
    on(cv, 'pointerdown', (e) => {
      const mode = e.button === 1 || (e.button === 0 && e.shiftKey) ? 'tilt' : e.button === 2 ? 'zoom' : null;
      if (!mode) return;
      const P = this.navPick(evPos(e)); if (!P) return;
      const d: any = { mode, P, up: Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(P, new C3()), last: evPos(e), start: evPos(e) };
      this.zoomPending = 0; // a pending wheel zoom would drag the pivot away
      if (mode === 'tilt') {
        // freeze the orbit at drag start: every move is ONE rigid rotation of the start pose about P, so P cannot
        // leave the cursor (rebuilding heading/pitch in the camera's own frame let it slide, far out or at limits)
        d.pos0 = C3.clone(camera.positionWC); d.dir0 = C3.clone(camera.directionWC); d.up0 = C3.clone(camera.upWC);
        d.v0 = C3.subtract(d.pos0, P, new C3());
        const R = C3.magnitude(d.v0);
        d.el0 = Math.asin(Cesium.Math.clamp(C3.dot(d.v0, d.up) / R, -1, 1));
        const ax = C3.cross(d.up, d.v0, new C3());
        d.axis = C3.magnitude(ax) > 1e-6 * R ? C3.normalize(ax, ax) : C3.negate(camera.rightWC, new C3()); // horizontal, ⟂ to P->camera
        d.p0 = camera.pitch;
        d.h0alt = Cesium.Cartographic.fromCartesian(camera.positionWC).height;
      }
      this.drag = d;
      try { cv.setPointerCapture(e.pointerId); } catch {}
    });
    on(cv, 'pointermove', (e) => {
      const p = evPos(e);
      if (this.armed && !this.drag) { this.hoverPx = p; this.poke(); }
      const d = this.drag; if (!d) return;
      const dx = p.x - d.last.x, dy = p.y - d.last.y; d.last = p;
      if (d.mode === 'zoom') {
        const dist = C3.distance(camera.positionWC, d.P);
        const nd = Cesium.Math.clamp(dist * Math.exp(-dy * 0.006), 20, 3e7);
        camera.move(C3.normalize(C3.subtract(d.P, camera.positionWC, new C3()), new C3()), dist - nd);
        return;
      }
      // Orbit around the point grabbed at drag start, from the TOTAL mouse offset (no accumulated error):
      //   vertical   -> elevation of the camera above that point (tilt),
      //   horizontal -> bearing around it (rotate).
      // A small dead zone keeps a vertical drag from also rotating, and vice versa. Roll is always 0.
      const dead = (v) => Math.sign(v) * Math.max(0, Math.abs(v) - 10);
      const tx = dead(p.x - d.start.x), ty = dead(p.y - d.start.y);
      // tilt range shrinks with altitude: from far away you cannot tilt the globe off screen
      const pMax = this.maxPitch(d.h0alt);
      const lo = Math.max(Cesium.Math.toRadians(3), d.el0 - Math.max(0, pMax - d.p0)), hi = Cesium.Math.toRadians(89.5);
      const el = Cesium.Math.clamp(d.el0 + ty * (Math.PI / cv.clientHeight), Math.min(lo, d.el0), Math.max(hi, d.el0));
      const az = tx * ((2 * Math.PI) / cv.clientWidth);
      // elevation: about the horizontal axis through P; bearing: about P's vertical. Same rotation for position,
      // direction and up: rigid, so the grabbed point stays exactly under the cursor
      const q = Cesium.Quaternion.multiply(Cesium.Quaternion.fromAxisAngle(d.up, -az), Cesium.Quaternion.fromAxisAngle(d.axis, d.el0 - el), new Cesium.Quaternion());
      const Rm = Cesium.Matrix3.fromQuaternion(q), rot = (v) => Cesium.Matrix3.multiplyByVector(Rm, v, new C3());
      const pos = C3.add(d.P, rot(d.v0), new C3()), dir = rot(d.dir0), up = rot(d.up0);
      // grabbed off-centre, that rotation also rolls the view. Turning the camera about its own ray to P leaves P on
      // the same pixel, so pick the turn that makes the camera's right vector horizontal again (roll 0)
      const u = C3.normalize(C3.subtract(d.P, pos, new C3()), new C3()), n = Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(pos, new C3());
      const r = C3.cross(dir, up, new C3()), ur = C3.cross(u, r, new C3());
      const A = C3.dot(r, n), B = C3.dot(ur, n), Cc = C3.dot(u, r) * C3.dot(u, n), K = A - Cc, R0 = Math.hypot(K, B);
      if (R0 > 1e-9 && Math.abs(Cc / R0) <= 1) {
        const phi = Math.atan2(B, K), w = Math.acos(-Cc / R0);
        const turn = (th) => Cesium.Matrix3.fromQuaternion(Cesium.Quaternion.fromAxisAngle(u, th));
        let best = null;
        for (const th of [phi + w, phi - w]) {
          const t = Cesium.Math.negativePiToPi(th), M = turn(t), up2 = Cesium.Matrix3.multiplyByVector(M, up, new C3());
          if (C3.dot(up2, n) > 0 && (!best || Math.abs(t) < Math.abs(best.t))) best = { t, M, up2 };
        }
        if (best && Math.abs(best.t) < 1.2) { Cesium.Matrix3.multiplyByVector(best.M, dir, dir); C3.clone(best.up2, up); }
      }
      // write the vectors directly: setView converts them to heading/pitch/roll, which is degenerate looking
      // straight down (gimbal lock) and let P slip ~70 px from orbit
      camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
      C3.clone(pos, camera.position); C3.clone(dir, camera.direction); C3.clone(up, camera.up); C3.cross(dir, up, camera.right);
    });
    on(cv, 'pointerup', () => (this.drag = null));
    on(cv, 'pointercancel', () => (this.drag = null));

    // click = act (after 250 ms, to tell it from a double click = zoom)
    const handler = new Cesium.ScreenSpaceEventHandler(cv);
    this.disposers.push(() => handler.destroy());
    let downPos = null, clickTimer = null;
    handler.setInputAction((e) => { downPos = Cesium.Cartesian2.clone(e.position); }, Cesium.ScreenSpaceEventType.LEFT_DOWN);
    const click = (alt) => (e) => {
      if (!this.armed || !downPos || Cesium.Cartesian2.distance(downPos, e.position) > 4) return;
      const pos = Cesium.Cartesian2.clone(e.position);
      clearTimeout(clickTimer);
      clickTimer = setTimeout(() => { const p = this.pickWorld(pos); if (p) this.act(p, alt); }, 250);
    };
    handler.setInputAction(click(false), Cesium.ScreenSpaceEventType.LEFT_CLICK);
    handler.setInputAction(click(true), Cesium.ScreenSpaceEventType.LEFT_CLICK, Cesium.KeyboardEventModifier.ALT);
    handler.setInputAction((e) => {
      clearTimeout(clickTimer);
      const p = this.pickWorld(e.position); if (!p) return;
      camera.flyTo({ destination: C3.lerp(camera.positionWC, p, 0.5, new C3()), orientation: { heading: camera.heading, pitch: camera.pitch, roll: 0 }, duration: 0.6 });
    }, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
    this.disposers.push(() => clearTimeout(clickTimer));

    // keyboard navigation (toggles are handled by the UI)
    const isField = (t) => t && (t.tagName === 'INPUT' || t.tagName === 'SELECT' || t.tagName === 'TEXTAREA');
    on(document, 'keydown', (e) => {
      if (isField(e.target)) return;
      const k = e.key.toLowerCase();
      if (k === 'n') this.northUp();
      if (k === 'u') this.topDown();
      if (k === 'r') this.reset();
      this.keys.add(e.key);
      if (e.key.startsWith('Arrow') || e.key.startsWith('Page')) e.preventDefault();
    });
    on(document, 'keyup', (e) => this.keys.delete(e.key));
    on(window, 'blur', () => this.keys.clear());
  }

  private flyAround(heading, pitch) {
    const t = this.centerPoint(), camera = this.camera;
    if (!t) { camera.flyTo({ destination: camera.positionWC, orientation: { heading, pitch: Math.min(pitch, -0.8), roll: 0 }, duration: 0.6 }); return; }
    camera.flyToBoundingSphere(new Cesium.BoundingSphere(t, 0), { offset: new Cesium.HeadingPitchRange(heading, pitch, Cesium.Cartesian3.distance(camera.positionWC, t)), duration: 0.6 });
  }
  northUp() { this.flyAround(0, this.camera.pitch); }
  topDown() { this.flyAround(this.camera.heading, Cesium.Math.toRadians(-89.5)); }
  private zoomOutUntil = 0; private recenterHeading = null;
  private zoomPending = 0; private zoomTarget = null;
  /** apply part of the pending wheel zoom (log-distance steps toward/away from zoomTarget), never past the limits */
  private applyZoom(dt) {
    if (!this.zoomPending || !this.zoomTarget) return;
    const C3 = Cesium.Cartesian3, cam = this.camera;
    const step = this.zoomPending * Math.min(1, dt * 20);
    this.zoomPending -= step;
    if (Math.abs(this.zoomPending) < 0.002) this.zoomPending = 0;
    const P = this.zoomTarget, rel = C3.subtract(cam.positionWC, P, new C3());
    const d = C3.magnitude(rel);
    let nd = Cesium.Math.clamp(d * Math.exp(step), 20, 4e7);
    let pos = C3.add(P, C3.multiplyByScalar(rel, nd / d, new C3()), new C3());
    // never above the max altitude, never below the surface
    const at = (x) => C3.add(P, C3.multiplyByScalar(rel, x / d, new C3()), new C3());
    const H = (x) => Cesium.Cartographic.fromCartesian(at(x)).height;
    if (nd > d && H(nd) > 2.5e7) {
      // the farthest distance that stays under the 25,000 km ceiling
      let lo = d, hi = nd;
      for (let i = 0; i < 20; i++) { const mid = (lo + hi) / 2; if (H(mid) > 2.5e7) hi = mid; else lo = mid; }
      nd = lo; pos = at(nd);
      this.zoomPending = 0;
    }
    // never below the (deformed) surface: tile collision only knows the original geometry, the ellipsoid even less
    const pc = Cesium.Cartographic.fromCartesian(pos);
    const floor = this.floorAt(pc);
    if (pc.height < floor) { this.zoomPending = 0; return; }
    cam.setView({ destination: pos, orientation: { heading: cam.heading, pitch: cam.pitch, roll: cam.roll } });
  }

  /** camera floor: surfaceHeight + 15 m, cached (sampleHeight costs ~10 ms, zoom runs every frame) */
  private floorC = null;
  private floorAt(pc) {
    const f = this.floorC, now = performance.now();
    if (f && now - f.t < 400 && Math.abs(f.lon - pc.longitude) < 2e-5 && Math.abs(f.lat - pc.latitude) < 2e-5) return f.h;
    if (pc.height > 3000 + (f ? f.h : 0)) return -Infinity; // far above anything: no need to look
    const h = (this.surfaceHeight(pc) ?? this.deformAt(Cesium.Cartographic.toCartesian(new Cesium.Cartographic(pc.longitude, pc.latitude, 0)))) + 15;
    this.floorC = { t: now, lon: pc.longitude, lat: pc.latitude, h };
    return h;
  }

  private handleKeys(dt) {
    const { keys, camera } = this, C3 = Cesium.Cartesian3;
    if (!keys.size) return;
    const step = Math.max(Cesium.Cartographic.fromCartesian(camera.positionWC).height, 50) * 0.9 * dt;
    if (keys.has('Shift')) {
      let dh = 0, dp = 0;
      if (keys.has('ArrowLeft')) dh -= 1.2 * dt; if (keys.has('ArrowRight')) dh += 1.2 * dt;
      if (keys.has('ArrowUp')) dp += 0.8 * dt; if (keys.has('ArrowDown')) dp -= 0.8 * dt;
      const t = (dh || dp) && this.centerPoint();
      if (t) {
        camera.lookAt(t, new Cesium.HeadingPitchRange(camera.heading + dh, Cesium.Math.clamp(camera.pitch + dp, Cesium.Math.toRadians(-89.5), -0.02), C3.distance(camera.positionWC, t)));
        camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
      }
    } else {
      const enu = Cesium.Transforms.eastNorthUpToFixedFrame(camera.positionWC);
      const east = C3.fromCartesian4(Cesium.Matrix4.getColumn(enu, 0, new Cesium.Cartesian4()));
      const north = C3.fromCartesian4(Cesium.Matrix4.getColumn(enu, 1, new Cesium.Cartesian4()));
      const s = Math.sin(camera.heading), c = Math.cos(camera.heading);
      const comb = (a, ka, b, kb) => C3.add(C3.multiplyByScalar(a, ka, new C3()), C3.multiplyByScalar(b, kb, new C3()), new C3());
      const fwd = comb(north, c, east, s), right = comb(east, c, north, -s);
      if (keys.has('ArrowUp')) camera.move(fwd, step); if (keys.has('ArrowDown')) camera.move(fwd, -step);
      if (keys.has('ArrowRight')) camera.move(right, step); if (keys.has('ArrowLeft')) camera.move(right, -step);
    }
    if (keys.has('PageUp') || keys.has('+') || keys.has('=')) camera.zoomIn(step * 1.5);
    if (keys.has('PageDown') || keys.has('-')) camera.zoomOut(step * 1.5);
  }

  // ======================================================================= public setters
  setTool(t: Tool) {
    // (the silo belongs to launch mode, not to a tool)
    this.tool = t; this.cancelLine(); this.updateHint();
  }
  setArmed(v: boolean) { this.armed = v; this.cv.style.cursor = v ? 'crosshair' : ''; if (!v) { this.cancelLine(); this.hover = null; } this.updateHint(); }
  setChain(v: boolean) { this.chain = v; }
  setSound(v: boolean) { this.soundOn = v; if (v) this.audio(); }
  setRings(v: boolean) {
    this.showRings = v;
    for (const D of this.blasts) { D.entities.forEach((e) => (e.show = v)); if (D.groundMat) D.groundMat.uniforms.rings = v ? 1 : 0; }
    this.bShader.setUniform('u_rings', v ? 1 : 0);
    this.poke();
  }
  private removeBase() {
    if (this.base) { this.viewer.entities.remove(this.base.entity); this.base = null; this.poke(); }
  }

  /** Full reset: straight down, north up, over the point we are above (fixes any "looking at the sky" mess). */
  reset() {
    const c = Cesium.Cartographic.fromCartesian(this.camera.positionWC);
    const h = Cesium.Math.clamp(c.height, 1500, 2.0e7);
    this.drag = null;
    this.camera.flyTo({ destination: Cesium.Cartesian3.fromRadians(c.longitude, c.latitude, h), orientation: { heading: 0, pitch: Cesium.Math.toRadians(-89.5), roll: 0 }, duration: 0.8 });
  }
  setLabels(on: boolean) {
    this.labelsOn = on;
    const url = 'https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}';
    const prov = () => new Cesium.UrlTemplateImageryProvider({ url, maximumLevel: 19, credit: 'Esri World Boundaries and Places' });
    if (this.labGlobe) { this.viewer.imageryLayers.remove(this.labGlobe); this.labGlobe = null; }
    if (this.labTiles && this.tileset) { this.tileset.imageryLayers.remove(this.labTiles); this.labTiles = null; }
    if (!on) return;
    this.labGlobe = this.viewer.imageryLayers.addImageryProvider(prov());
    if (this.tileset) this.labTiles = this.tileset.imageryLayers.addImageryProvider(prov());
  }
  setSunHour(h: number) { this.sunHour = h; this.poke(); }

  async search(text: string): Promise<boolean> {
    try {
      const res = await this.geocoder.geocode(text, Cesium.GeocodeType.SEARCH);
      if (!res.length) return false;
      this.camera.flyTo({ destination: res[0].destination, duration: 2 });
      return true;
    } catch { return false; }
  }

  clear() {
    [...this.blasts].forEach((D) => this.removeBlast(D));
    this.slots.fill(null); this.slotsN = 0; this.bShader.setUniform('u_n', 0);
    this.jobs = []; this.atlas.fill(0); this.atlasDirty = true;
    this.preps.forEach((q) => (q.dead = true)); this.preps = [];
    this.mStress.fill(0); this.mScorch.fill(0); this.mCrater.fill(0); this.mBytes.fill(0); this.maxStress = 0; this.mapDirty = true;
    this.bShader.setUniform('u_mapOn', 0);
    this.flyers.forEach((f) => { this.rm(f.head); f.entity && this.viewer.entities.remove(f.entity); }); this.flyers = [];
    this.particles.forEach((p) => this.rm(p.b)); this.particles = [];
    this.chunks.forEach((c) => this.rm(c.b)); this.chunks = [];
    this.ducks.forEach((d) => { d.model && this.scene.primitives.remove(d.model); d.bb && this.rm(d.bb); }); this.ducks = [];
    this.turrets.forEach((t) => this.removeTurret(t)); this.turrets = [];
    this.planes.forEach((P) => { this.removeShape(P.shape); this.rm(P.strobe); }); this.planes = [];
    this.bombs.forEach((b) => this.rm(b.b)); this.bombs = [];
    this.ufos.forEach((u) => this.removeUfo(u)); this.ufos = [];
    this.removeBase();
    this.cancelLine();
    this.FLASH = this.WARM = 0;
    this.updateHint();
    this.poke();
  }

  // ---- saved places ----
  view(): SavedView {
    const c = Cesium.Cartographic.fromCartesian(this.camera.positionWC), cam = this.camera;
    return { lon: Cesium.Math.toDegrees(c.longitude), lat: Cesium.Math.toDegrees(c.latitude), h: c.height, heading: cam.heading, pitch: cam.pitch, roll: cam.roll };
  }
  thumbnail(): Promise<string> {
    return new Promise((resolve) => {
      const cb = () => {
        this.scene.postRender.removeEventListener(cb);
        const src = this.cv, W = 320, H = 180, c = document.createElement('canvas'); c.width = W; c.height = H;
        const ar = src.width / src.height, sw = ar > W / H ? src.height * W / H : src.width, sh = ar > W / H ? src.height : src.width * H / W;
        c.getContext('2d').drawImage(src, (src.width - sw) / 2, (src.height - sh) / 2, sw, sh, 0, 0, W, H);
        resolve(c.toDataURL('image/jpeg', 0.72));
      };
      this.scene.postRender.addEventListener(cb);
    });
  }
  teleport(v: SavedView) {
    this.camera.setView({ destination: Cesium.Cartesian3.fromDegrees(v.lon, v.lat, v.h), orientation: { heading: v.heading, pitch: v.pitch, roll: v.roll } });
  }

  // ======================================================================= acting on a click
  private updateHint() {
    const k = this.tool.kind;
    if (!this.armed) return this.ev.hint('Press D or ARM, then click the map');
    if (k === 'carpet') return this.ev.hint(this.lineStart ? 'Click the end of the line' : 'Click the start of the bombing line');
    if (this.launchMode) return this.ev.hint(this.base ? 'Click a target · Alt+click moves the silo' : 'Launch mode: click where to place your silo');
    if (k === 'railgun') return this.ev.hint(`Click to place a turret (${this.turrets.length}/4)`);
    if (k === 'ufo') return this.ev.hint(`Click to summon a UFO (${this.ufos.length}/4)`);
    if (k === 'wind') return this.ev.hint('Click where the wind should blow · Esc to disarm');
    this.ev.hint('Click the map · Esc to disarm');
  }

  private act(p, alt) {
    const w = this.tool;
    this.audio();
    this.poke();
    if (w.kind === 'wind') return this.blowWind(p);
    if (w.kind === 'carpet') {
      if (!this.lineStart) return this.startLine(p);
      const a = this.lineStart; this.cancelLine(); this.updateHint();
      return this.carpetBomb(a, p, w);
    }
    if (this.launchMode) {
      if (!this.base || alt) return this.setBase(p);
      if (w.kind === 'cruise') return this.fireCruise(p, w);
      return this.launch(p, w);
    }
    return this.deliver(p, w);
  }

  /** what a payload does when it arrives at (or is dropped on) a point */
  private deliver(p, w) {
    switch (w.kind) {
      case 'duck': return this.dropDuck(p);
      case 'ufo': return this.spawnUfo(p);
      case 'asteroid': case 'rod': return this.launchMode ? this.detonate(p, w) : this.fireFromSky(p, w);
      case 'cruise': return this.launchMode ? this.smallBoom(p, 2.2 * Math.cbrt(w.W / 0.00045)) : this.fireCruise(p, w);
      case 'railgun': return this.placeTurret(p);
      default: return this.detonate(p, w);
    }
  }

  // ======================================================================= audio
  private audio() {
    if (!this.soundOn) return null;
    if (!this.actx) {
      const a = (this.actx = new (window.AudioContext || window.webkitAudioContext)());
      const comp = a.createDynamicsCompressor(); comp.threshold.value = -16; comp.ratio.value = 6;
      this.master = a.createGain(); this.master.gain.value = 0.9; this.master.connect(comp); comp.connect(a.destination);
      const len = a.sampleRate * 8; this.noiseBuf = a.createBuffer(1, len, a.sampleRate);
      const d = this.noiseBuf.getChannelData(0); let last = 0;
      for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; }
    }
    if (this.actx.state === 'suspended') this.actx.resume();
    return this.actx;
  }
  private noise(a) { const s = a.createBufferSource(); s.buffer = this.noiseBuf; s.loop = true; s.loopStart = Math.random() * 6; return s; }
  private env(g, t, peak, attack, decay) { g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay); }
  private boom(loud, size, far) {
    const a = this.audio(); if (!a) return;
    const t = a.currentTime + 0.02, out = a.createGain(); out.gain.value = loud; out.connect(this.master);
    if (far < 0.7) {
      const n = this.noise(a), hp = a.createBiquadFilter(), g = a.createGain();
      hp.type = 'highpass'; hp.frequency.value = 900; n.connect(hp); hp.connect(g); g.connect(out); this.env(g, t, 0.9 * (1 - far), 0.004, 0.35);
      n.start(t); n.stop(t + 0.5);
    }
    { const n = this.noise(a), lp = a.createBiquadFilter(), g = a.createGain();
      lp.type = 'lowpass'; lp.frequency.setValueAtTime(lerp(2600, 500, far), t); lp.frequency.exponentialRampToValueAtTime(70, t + size * 0.6);
      n.connect(lp); lp.connect(g); g.connect(out); this.env(g, t, 1.4, 0.015, size * 0.7); n.start(t); n.stop(t + size); }
    { const o = a.createOscillator(), g = a.createGain();
      o.type = 'sine'; o.frequency.setValueAtTime(62, t); o.frequency.exponentialRampToValueAtTime(24, t + size * 0.5);
      o.connect(g); g.connect(out); this.env(g, t, 1.2, 0.02, size * 0.5); o.start(t); o.stop(t + size); }
    if (size > 1.5) { const n = this.noise(a), lp = a.createBiquadFilter(), g = a.createGain();
      lp.type = 'lowpass'; lp.frequency.value = 140; n.connect(lp); lp.connect(g); g.connect(out);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.9, t + 0.4); g.gain.exponentialRampToValueAtTime(0.0001, t + size * 2);
      n.start(t); n.stop(t + size * 2 + 0.1); }
  }
  private smallBoomSound(pos) {
    const now = performance.now(); if (now - this.lastSmallSound < 60) return; this.lastSmallSound = now;
    const dist = Cesium.Cartesian3.distance(this.camera.positionWC, pos);
    const far = clamp01(dist / 20000);
    this.boom(0.55 * (1 - far * 0.7), 0.9, far);
  }
  private whoosh(dur, pitch = 1) {
    const a = this.audio(); if (!a) return;
    const t = a.currentTime, n = this.noise(a), bp = a.createBiquadFilter(), g = a.createGain();
    bp.type = 'bandpass'; bp.Q.value = 1.4;
    bp.frequency.setValueAtTime(300 * pitch, t); bp.frequency.exponentialRampToValueAtTime(2400 * pitch, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.5, t + dur * 0.85); g.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.1);
    n.connect(bp); bp.connect(g); g.connect(this.master); n.start(t); n.stop(t + dur + 0.2);
  }
  private zap() {
    const a = this.audio(); if (!a) return;
    const t = a.currentTime, o = a.createOscillator(), g = a.createGain();
    o.type = 'sawtooth'; o.frequency.setValueAtTime(2400, t); o.frequency.exponentialRampToValueAtTime(140, t + 0.18);
    o.connect(g); g.connect(this.master); this.env(g, t, 0.25, 0.003, 0.2); o.start(t); o.stop(t + 0.25);
  }
  private squeak() {
    const a = this.audio(); if (!a) return;
    const t = a.currentTime, o = a.createOscillator(), vib = a.createOscillator(), vg = a.createGain(), g = a.createGain();
    o.type = 'triangle'; o.frequency.setValueAtTime(700, t); o.frequency.linearRampToValueAtTime(1500, t + 0.09); o.frequency.linearRampToValueAtTime(900, t + 0.28);
    vib.frequency.value = 32; vg.gain.value = 60; vib.connect(vg); vg.connect(o.frequency);
    o.connect(g); g.connect(this.master); this.env(g, t, 0.45, 0.01, 0.3);
    o.start(t); vib.start(t); o.stop(t + 0.35); vib.stop(t + 0.35);
  }
  chime() {
    const a = this.audio(); if (!a) return;
    const t = a.currentTime;
    [880, 1320, 1760].forEach((f, i) => { const o = a.createOscillator(), g = a.createGain(); o.type = 'sine'; o.frequency.value = f; o.connect(g); g.connect(this.master); this.env(g, t + i * 0.08, 0.18, 0.01, 0.6); o.start(t + i * 0.08); o.stop(t + i * 0.08 + 0.7); });
  }

  private addShake(amp) { const s = this.shake; s.amp = Math.max(s.amp * Math.exp(-s.t * 2.2), amp); s.t = 0; }
  private applyShake(dt) {
    const s = this.shake, cam = this.camera;
    if (s.v || s.h) { cam.lookRight(-s.h); cam.lookUp(-s.v); s.v = s.h = 0; }
    if (s.amp <= 0 || this.drag) return;
    s.t += dt;
    const a = s.amp * Math.exp(-s.t * 2.2);
    if (a < 0.00005) { s.amp = 0; return; }
    s.v = (Math.random() - 0.5) * a; s.h = (Math.random() - 0.5) * a;
    cam.lookUp(s.v); cam.lookRight(s.h);
  }

  // ======================================================================= sun
  private updateSun() {
    // the slider is UTC time: the lit half of the globe depends on it alone, not on where you look
    const view = this.camera.pickEllipsoid(new Cesium.Cartesian2(this.cv.clientWidth / 2, this.cv.clientHeight / 2)) || this.camera.positionWC;
    if (this.sunHour !== this.sunHourSet) {
      this.sunHourSet = this.sunHour;
      const d = new Date(); d.setUTCHours(0, 0, 0, 0);
      this.viewer.clock.currentTime = Cesium.JulianDate.fromDate(new Date(d.getTime() + this.sunHour * 3600e3));
      const t = this.viewer.clock.currentTime, C3 = Cesium.Cartesian3;
      const p = Cesium.Simon1994PlanetaryPositions.computeSunPositionInEarthInertialFrame(t, new C3());
      const m = Cesium.Transforms.computeIcrfToFixedMatrix(t) || Cesium.Transforms.computeTemeToPseudoFixedMatrix(t);
      this.sunDir = C3.normalize(Cesium.Matrix3.multiplyByVector(m, p, p), p);
    }
    this.tint = this.tintAt(view);
  }
  private sunDir = new Cesium.Cartesian3(1, 0, 0); private sunHourSet;
  /** same day/night/golden-hour tint as the building shader, for a world position (smoke, particles) */
  private tintAt(pos) {
    const sd = Cesium.Cartesian3.dot(Cesium.Cartesian3.normalize(pos, new Cesium.Cartesian3()), this.sunDir);
    const day = smooth(-0.1, 0.12, sd), golden = day * (1 - smooth(0.04, 0.38, sd));
    const night = [0.09, 0.12, 0.21];
    const t: any = [0, 1, 2].map((i) => lerp(night[i], 1, day) * lerp(1, [1.14, 0.86, 0.66][i], golden));
    t.day = day;
    return t;
  }

  // ======================================================================= blasts
  private setSlot(slot, D) {
    const s = this.bShader;
    s.setUniform('u_m' + slot, D ? Cesium.Matrix4.multiply(D.invEnu, this.camera.inverseViewMatrix, new Cesium.Matrix4()) : new Cesium.Matrix4());
    s.setUniform('u_a' + slot, D ? new Cesium.Cartesian4(D.shock, D.X.r20, D.X.r5, D.X.r1) : new Cesium.Cartesian4());
    s.setUniform('u_b' + slot, D ? new Cesium.Cartesian4(D.E.rth, D.burn, D.glowB, D.E.Rfb * 3 + D.E.hob) : new Cesium.Cartesian4(0, 0, 0, 1));
    s.setUniform('u_d' + slot, D ? new Cesium.Cartesian4(D.X.crater, D.crv, D.heat, D.seed) : new Cesium.Cartesian4());
    s.setUniform('u_e' + slot, D ? new Cesium.Cartesian4(D.hm ? D.slot : -1, D.hmS || 0, D.cshock, D.E.hob) : new Cesium.Cartesian4(-1, 0, 0, 0));
  }
  /** an old blast gives up its animation layers; the scar (crater, rubble, cracks, heightmap) stays */
  private retire(D) {
    if (D.retired) return;
    D.retired = true;
    D.entities.forEach((e) => this.viewer.entities.remove(e)); D.entities = [];
    if (D.ground) { this.scene.primitives.remove(D.ground); D.ground = null; D.groundMat = null; }
  }
  private animating(D) { return D.t < D.E.Trise * 3 || !D.heard || D.heat > 0; }
  /**
   * Hand the 16 shader slots out to the scars that matter most for this view (closest to the look-at point,
   * relative to their size), blasts still animating strongly preferred, with hysteresis so slots do not flap.
   * A scar under ~2 px on screen gets none: the global damage map draws it.
   */
  private schedule(force = false) {
    const C3 = Cesium.Cartesian3, cam = this.camera, N = this.MAX;
    if (!force && !this.blasts.length) return;
    const look = cam.pickEllipsoid(new Cesium.Cartesian2(this.cv.clientWidth / 2, this.cv.clientHeight / 2)) || cam.positionWC;
    const k = this.cv.clientHeight / (2 * Math.tan((cam.frustum.fovy || 1) / 2));
    // (a Tsar "animates" for ~13 real minutes: plain animating-first would starve every old crater in view)
    const score = (D) => {
      const r = D.X.r1, dc = C3.distance(cam.positionWC, D.groundPos);
      if ((r / Math.max(dc - r, 1)) * k < 2) return Infinity;
      let sc = Math.max(0, C3.distance(look, D.groundPos) - r) / r;
      if (this.animating(D)) sc = sc * 0.3 - (D.t < D.E.Trise ? 2 : 1); // still blasting: wins unless far off
      if (D.slot >= 0) sc -= 0.25 + 0.3 * Math.abs(sc); // hysteresis (subtract: scores can be negative)
      return sc;
    };
    const want = this.blasts.map((D) => [score(D), D]).filter((x) => x[0] < Infinity).sort((a, b) => a[0] - b[0]).slice(0, N).map((x) => x[1]);
    const keep = new Set(want);
    for (let i = 0; i < N; i++) { const H = this.slots[i]; if (H && !keep.has(H)) { H.slot = -1; this.slots[i] = null; } }
    for (const D of want) {
      if (D.slot >= 0) continue;
      const i = this.slots.indexOf(null); if (i < 0) break;
      this.slots[i] = D; D.slot = i;
      this.writeAtlas(D);
    }
    for (let i = 0; i < N; i++) this.setSlot(i, this.slots[i]);
    let top = 0; for (let i = 0; i < N; i++) if (this.slots[i]) top = i + 1;
    if (top !== this.slotsN) { this.slotsN = top; this.bShader.setUniform('u_n', top); }
  }
  private slotsN = -1;
  private removeBlast(D) {
    D.dead = true;
    if (D.ground) this.scene.primitives.remove(D.ground);
    D.entities.forEach((e) => this.viewer.entities.remove(e));
    if (D.slot >= 0) { this.slots[D.slot] = null; this.setSlot(D.slot, null); D.slot = -1; }
    this.blasts = this.blasts.filter((b) => b !== D); this.padGen++;
  }
  private makePuffs(E, scale) {
    const P = [], R = Math.random, n = (k) => Math.max(8, Math.round(k * scale));
    const ball = () => { let x, y, z; do { x = R() * 2 - 1; y = R() * 2 - 1; z = R() * 2 - 1; } while (x * x + y * y + z * z > 1); return { ux: x, uy: y, uz: z }; };
    const add = (type, k, extra?) => { for (let i = 0, N = n(k); i < N; i++) P.push(Object.assign({ type, th: R() * Math.PI * 2, ph: R() * Math.PI * 2, r1: R(), r2: R(), r3: R(), r4: R(), rot: R() * Math.PI * 2 }, extra && extra(i, N))); };
    add('torus', 440); add('fill', 140, ball); add('core', 60, ball);
    add('stem', 260, (i, N) => ({ r1: (i + R()) / N }));
    add('shock', 110);
    if (E.air && E.hob > 0) add('wilson', 80, () => ({ el: Math.pow(R(), 0.7) * 1.3 - 0.15 }));
    if (!E.air) add('dust', 100);
    if (this.tileset) add('rubble', 150); // dust kicked up by collapsing buildings, then a haze over the ruins
    return P;
  }

  detonate(picked, w, opts: any = {}) {
    const C3 = Cesium.Cartesian3;
    const groundPos = C3.clone(picked);
    const E = effects(w.W, w.air, w.hob);
    if (opts.mini) E.Trise = 12; // a conventional hit: no cloud to raise, done animating fast
    // every blast stays as a permanent scar until clear(); the 16 shader slots are handed out each frame (schedule)
    const slot = -1;
    const enu = Cesium.Transforms.eastNorthUpToFixedFrame(groundPos);
    const local = (x, y, z, out?) => Cesium.Matrix4.multiplyByPoint(D.enu, C3.fromElements(x, y, z, out || new C3()), out || new C3());
    const gen = opts.gen || 0;
    const D: any = {
      E, w, slot, id: ++this.blastId, groundPos, enu, local, cloudA: 1, t: 0, real: 0, shock: 0, burn: 0, glowB: 0, entities: [], rings: {},
      up: Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(groundPos, new C3()),
      puffs: opts.mini ? [] : this.makePuffs(E, gen ? 0.55 : 1), heard: !!opts.mini, gen, children: [], mini: !!opts.mini,
    };
    D.root = opts.root || D;
    // The shader evaluates every blast from the ORIGINAL surface, but pickPosition sees the deformed one:
    // a bomb dropped on a crater floor gets its origin moved back up to where that floor was.
    const sunk = this.deformAt(groundPos);
    D.origin = C3.add(groundPos, C3.multiplyByScalar(D.up, -sunk, new C3()), new C3());
    D.invEnu = Cesium.Matrix4.inverseTransformation(Cesium.Transforms.eastNorthUpToFixedFrame(D.origin), new Cesium.Matrix4());
    D.crv = 0; D.heat = 1; D.seed = Math.random() * 97; D.cshock = 0; D.X = damageOf(E);
    D.maxR = E.r1 * 1.15;
    // the ground decal is only needed on the globe fallback: on the 3D tiles the tile shader draws all of it
    if (!this.tileset) D.groundMat = new Cesium.Material({
      fabric: {
        uniforms: { shock: 0, glow: 0, burn: 0, rings: this.showRings ? 1 : 0, rth: E.rth / D.maxR, rfb: E.Rfb / D.maxR, cr: E.crater / D.maxR, crv: 0 },
        source: `
        czm_material czm_getMaterial(czm_materialInput mi) {
          czm_material m = czm_getDefaultMaterial(mi);
          float r = length(mi.st - 0.5) * 2.0;
          float ring = shock > 0.001 ? smoothstep(shock - 0.035, shock, r) * (1.0 - smoothstep(shock, shock + 0.006, r)) : 0.0;
          ring *= (1.0 - smoothstep(0.75, 1.0, shock)) * rings;
          float g = glow * exp(-pow(r / max(rfb * 3.0, 0.005), 2.0));
          float scorch = burn * (0.45 * (1.0 - smoothstep(rfb * 0.8, rfb * 3.0, r)) + 0.2 * (1.0 - smoothstep(rth * 0.85, rth, r)));
          float crater = cr > 0.0 ? crv * (1.0 - smoothstep(cr * 0.85, cr, r)) : 0.0;
          float rim = cr > 0.0 ? crv * smoothstep(cr * 0.8, cr, r) * (1.0 - smoothstep(cr, cr * 1.35, r)) : 0.0;
          vec3 base = mix(vec3(0.07, 0.05, 0.035), vec3(0.03, 0.025, 0.02), crater);
          base = mix(base, vec3(0.36, 0.29, 0.21), rim);
          m.diffuse = mix(base, vec3(1.0, 0.8, 0.55), clamp(ring + g, 0.0, 1.0));
          m.emission = vec3(1.0, 0.7, 0.4) * (ring * 0.5 + g);
          m.alpha = clamp(max(scorch, max(crater * 0.92, rim * 0.75)) + ring * 0.5 + g, 0.0, 0.95);
          return m;
        }`,
      },
    });
    if (D.groundMat) D.ground = this.scene.primitives.add(new Cesium.GroundPrimitive({
      geometryInstances: new Cesium.GeometryInstance({ geometry: new Cesium.EllipseGeometry({ center: groundPos, semiMajorAxis: D.maxR, semiMinorAxis: D.maxR }) }),
      appearance: new Cesium.MaterialAppearance({ material: D.groundMat, translucent: true, flat: true }),
      asynchronous: false,
    }));
    this.blasts.push(D); this.padGen++;
    // only the newest 16 keep their animation layers (clouds, rings, globe decal), like the old 16-blast cap did
    const big = this.blasts.filter((b) => !b.mini), old = opts.mini ? null : big[big.length - 1 - this.MAX]; // minis never push a nuke's cloud out
    if (old) this.retire(old);
    this.startHeightmap(D);
    this.schedule(true);
    if (opts.mini) return D;

    if (this.chain && gen < 2) {
      for (let i = 0, n = gen === 0 ? 3 : 2; i < n; i++)
        D.children.push({ dist: E.r5 * (1.3 + Math.random() * 1.4), a: Math.random() * Math.PI * 2, W: w.W * (0.35 + Math.random() * 0.3) });
      for (const ch of D.children) this.prepFor(D.local(ch.dist * Math.cos(ch.a), ch.dist * Math.sin(ch.a), 0), { ...w, W: ch.W });
    }

    const s = this.stats;
    s.count++; s.area += Math.PI * (E.r5 / 1000) ** 2; s.cloud = Math.max(s.cloud, E.H);
    this.ev.stats({ ...s });
    const u = (id) => this.ev.unlock(id);
    u('first');
    if (E.H > 8848) u('everest');
    if (E.H >= 99000) u('karman');
    if (['tsar', 'dino', 'rod'].includes(w.id)) u(w.id);
    if (this.blasts.filter((b) => !b.retired).length >= 6) u('six');
    if (s.area >= 1000) u('area');
    D.root.chainCount = (D.root.chainCount || 0) + 1;
    if (D.root.chainCount >= 9) u('chain');
    return D;
  }

  private addRing(D, key, R, color) {
    if (D.rings[key]) return;
    D.rings[key] = true;
    const pts = [];
    for (let i = 0; i <= 160; i++) { const a = (i / 160) * Math.PI * 2; pts.push(D.local(R * Math.cos(a), R * Math.sin(a), 0)); }
    D.entities.push(this.viewer.entities.add({ show: this.showRings, polyline: { positions: pts, clampToGround: true, width: 5, material: this.hiMat(color) } }));
  }

  /** High-contrast line material: bright colour with a black outline, readable on any map. */
  private hiMat(color, dashed = false) {
    const c = Cesium.Color.fromCssColorString(color);
    return dashed
      ? new Cesium.PolylineDashMaterialProperty({ color: c, gapColor: Cesium.Color.BLACK.withAlpha(0.85), dashLength: 16 })
      : new Cesium.PolylineOutlineMaterialProperty({ color: c, outlineColor: Cesium.Color.BLACK, outlineWidth: 1.6 });
  }

  private geom(D, t) {
    const E = D.E;
    const Rf = E.Rfb * Math.pow(clamp01(t / E.tmax), 0.4);
    const u = Math.min(t / E.Trise, 1), e = 1 - Math.pow(1 - u, 2.5);
    const thickF = Math.min(E.Rcap * 0.6, E.H * 0.42);
    const thick = lerp(Rf * 1.8, thickF, e);
    const top = lerp(E.hob + Rf * 0.9, E.H, e);
    const spread = 1 + 0.12 * Math.min(1.5, Math.max(0, t / E.Trise - 1));
    const Rc = Math.max(Rf, lerp(Rf, E.Rcap, Math.pow(e, 1.15))) * spread;
    const stemTop = Math.max(0, top - thick * 0.75) * Math.pow(clamp01((t - 2 * E.tmax) / (E.Trise * 0.5)), 0.8);
    const Rstem = Math.max(E.Rstem * (0.35 + 0.65 * e), Rf * 0.3);
    return { Rf, u, thick, top, zc: top - thick / 2, Rc, stemTop, Rstem, omega: -(0.09 * (1 - u) + 0.012) };
  }

  /** Appends this blast's visible smoke puffs to `items` (sorted and drawn together with every other cloud). */
  private cloudItems(D, dtSim, items) {
    const E = D.E, t = D.t, G = this.geom(D, t);
    const glow = Math.exp(-t / E.tglow), glow2 = Math.exp(-t / (E.tglow * 3));
    const f = t / E.tglow;
    let fc;
    if (f < 0.25) fc = [1, 0.96, 0.82];
    else if (f < 0.7) { const k = (f - 0.25) / 0.45; fc = [1, lerp(0.96, 0.55, k), lerp(0.82, 0.18, k)]; }
    else { const k = clamp01((f - 0.7) / 1.3); fc = [lerp(1, 0.55, k), lerp(0.55, 0.16, k), lerp(0.18, 0.06, k)]; }
    const sm = clamp01(t / (E.Trise * 0.35));
    const moon = [0.24, 0.27, 0.36];
    D.tn = this.tintAt(D.groundPos); const tn = D.tn.map((x, i) => Math.max(x, moon[i]));
    const smoke = [lerp(0.62, 0.95, sm) * tn[0], lerp(0.42, 0.93, sm) * tn[1], lerp(0.30, 0.91, sm) * tn[2]];
    const capBot = G.zc - G.thick / 2;
    const camPos = this.camera.positionWC;
    const fadeIn = smooth(0, 0.03, t);
    // wind: every gust in this blast's local frame (centre, horizontal direction, speed now, radius)
    const dtR = this.dtReal, now = performance.now() / 1000;
    const gl = this.gusts.length ? this.gusts.map((g) => {
      const pl = Cesium.Matrix4.multiplyByPoint(D.invEnu, g.P, new Cesium.Cartesian3()), dl = Cesium.Matrix4.multiplyByPointAsVector(D.invEnu, g.dir, new Cesium.Cartesian3());
      const h = Math.hypot(dl.x, dl.y) || 1;
      return { x: pl.x, y: pl.y, dx: dl.x / h, dy: dl.y / h, U: g.U * g.env, R: g.R };
    }) : null;
    const nItems = items.length;
    const night = 1 - D.tn.day;
    for (const p of D.puffs) {
      let x, y, z, size, shade = 1, heat = 0, alpha, base = smoke, under = 0;
      if (p.type === 'torus') {
        p.ph += dtSim * G.omega * (0.7 + 0.6 * p.r4);
        const ring = G.Rc * (0.58 + 0.1 * p.r1), b = G.Rc * 0.36 * (0.75 + 0.4 * p.r2), rr = ring + b * Math.cos(p.ph);
        x = rr * Math.cos(p.th); y = rr * Math.sin(p.th); z = G.zc + G.thick * 0.45 * Math.sin(p.ph);
        size = G.Rc * (0.6 + 0.35 * p.r3);
        shade = 0.4 + 0.6 * clamp01((z - capBot) / G.thick); heat = 0.75; under = Math.max(0, -Math.sin(p.ph));
        alpha = 0.42 * fadeIn;
      } else if (p.type === 'fill') {
        x = G.Rc * 0.55 * p.ux; y = G.Rc * 0.55 * p.uy; z = G.zc + G.thick * 0.35 * p.uz;
        size = G.Rc * (0.75 + 0.3 * p.r3); shade = 0.5 + 0.45 * clamp01((z - capBot) / G.thick); heat = 1; alpha = 0.4 * fadeIn;
      } else if (p.type === 'core') {
        alpha = 0.7 * Math.exp(-t / (E.tglow * 1.4)); if (alpha < 0.01) continue;
        const R = G.Rf * 0.5; x = R * p.ux; y = R * p.uy; z = G.zc + R * p.uz;
        size = G.Rf * (1.0 + 0.5 * p.r3) + 1; heat = 1;
      } else if (p.type === 'stem') {
        const h = p.r1; z = h * Math.max(G.top - G.thick * 0.6, 0);
        if (z > G.stemTop || G.stemTop <= 0) continue;
        let rs = G.Rstem * (0.55 + 0.45 * h * h);
        if (h > 0.8) rs += ((h - 0.8) / 0.2) * G.Rc * 0.28;
        const a = p.th + t * 0.03, rr = rs * 0.35 * p.r2;
        x = rr * Math.cos(a); y = rr * Math.sin(a);
        size = rs * 2.7 + G.Rstem * 0.4; shade = 0.55 + 0.35 * h;
        base = [lerp(0.5, 0.72, sm) * tn[0], lerp(0.42, 0.66, sm) * tn[1], lerp(0.34, 0.6, sm) * tn[2]];
        alpha = 0.38 * smooth(0, 0.08 * G.stemTop + 1, G.stemTop - z);
      } else if (p.type === 'shock') {
        const r = D.shock * (0.96 + 0.06 * p.r1);
        if (r < E.Rfb || D.shock > E.r1) continue;
        x = r * Math.cos(p.th); y = r * Math.sin(p.th);
        const hgt = Math.min(E.r5 * 0.08, 400) + E.Rfb * 0.1;
        z = p.r2 * hgt; size = hgt * 2.2 + r * 0.04; shade = 0.85;
        base = [0.74 * tn[0], 0.66 * tn[1], 0.56 * tn[2]];
        alpha = 0.3 * (1 - smooth(E.r20, E.r1, D.shock));
      } else if (p.type === 'rubble') {
        const R = E.Rfb + (E.r5 - E.Rfb) * Math.sqrt(p.r1);
        if (D.shock < R) continue;
        const wall = smooth(R, R + 0.12 * E.r5, D.shock), hz = 30 + 0.02 * E.r5;
        x = R * Math.cos(p.th); y = R * Math.sin(p.th); z = p.r2 * hz * (1 + wall);
        size = Math.max(60, 0.07 * E.r5) * (0.7 + 0.6 * p.r3) * (1 + 0.8 * wall); shade = 0.92;
        base = [0.66 * tn[0], 0.6 * tn[1], 0.53 * tn[2]];
        alpha = 0.26 * wall * (1 - 0.45 * smooth(0, 1, (D.shock - R) / (0.6 * E.r5))) * (1 - smooth(E.Trise * 0.8, E.Trise * 2.6, t)) * (1 - 0.6 * smooth(E.r20, E.r5, R));
      } else if (p.type === 'wilson') {
        const tw = t - E.tmax * 0.6;
        if (tw < 0 || tw > E.tmax * 4 + 2.5) continue;
        const R = Math.min(D.shock, E.r20 * 1.4), el = p.el;
        x = R * Math.cos(el) * Math.cos(p.th); y = R * Math.cos(el) * Math.sin(p.th); z = E.hob + R * Math.sin(el) * 0.75;
        if (z < 0) continue;
        size = R * 0.32; base = [0.97 * tn[0], 0.97 * tn[1], tn[2]];
        alpha = 0.32 * smooth(0, 0.3, tw) * (1 - smooth(E.tmax * 2, E.tmax * 4 + 2.5, tw));
      } else {
        const dR = Math.min(D.shock, E.r20 * 1.2), dH = G.Rstem * 0.9 * smooth(0, E.Trise * 0.3, t) + 50;
        if (dR < 10) continue;
        const r = dR * Math.sqrt(p.r1); x = r * Math.cos(p.th); y = r * Math.sin(p.th); z = p.r2 * dH;
        size = dH * 1.8 + dR * 0.15; shade = 0.9; base = [0.78 * tn[0], 0.7 * tn[1], 0.62 * tn[2]];
        alpha = 0.2 * (1 - smooth(E.Trise * 0.4, E.Trise * 1.1, t));
      }
      if (gl && dtR) {
        let vx = 0, vy = 0;
        const qx = x + (p.wx || 0), qy = y + (p.wy || 0);
        // power-law wind profile: the cap runs ahead of the stem, so the mushroom shears over before it goes
        const shear = Math.pow(Math.max(z, 50) / Math.max(0.5 * E.H, 500), 0.25);
        for (const g of gl) { const f = 1 - smooth(0.6 * g.R, 1.5 * g.R, Math.hypot(qx - g.x, qy - g.y)); if (f > 0) { vx += g.dx * g.U * f * shear; vy += g.dy * g.U * f * shear; } }
        const sp = Math.hypot(vx, vy);
        if (sp > 0) {
          // turbulence: eddies across the flow, different for every puff, and a little lift
          const tw = 0.3 * sp * Math.sin(now * 0.9 + p.th * 7 + p.r2 * 13);
          p.wx = (p.wx || 0) + (vx - (vy / sp) * tw) * dtR; p.wy = (p.wy || 0) + (vy + (vx / sp) * tw) * dtR;
          p.wz = (p.wz || 0) + 0.05 * sp * (p.r3 - 0.4) * dtR;
          // turbulent diffusion: the puff grows with the distance it travels (see below: and thins)
          p.ws = (p.ws || 0) + (0.6 * sp * dtR) / Math.max(size, 50);
          D.blown = true;
        }
      }
      if (p.wx) { x += p.wx; y += p.wy; z += p.wz || 0; }
      if (p.ws) { size *= 1 + p.ws; alpha /= (1 + p.ws) * (1 + p.ws); } // same smoke over a larger area
      alpha *= D.cloudA;
      if (size < 0.5 || alpha <= 0.005) continue;
      const pos = D.local(x, y, z, new Cesium.Cartesian3());
      const k = clamp01(heat * glow), o = under * glow2 * (0.6 + 0.6 * night), v = 0.95 + 0.1 * p.r4;
      items.push({
        pos, d: Cesium.Cartesian3.distanceSquared(pos, camPos), alpha, size, rot: p.rot,
        r: Math.min(1, (lerp(base[0] * shade, fc[0], k) + o) * v), g: Math.min(1, (lerp(base[1] * shade, fc[1], k) + o * 0.45) * v), b: Math.min(1, (lerp(base[2] * shade, fc[2], k) + o * 0.12) * v),
      });
    }
    if (D.blown && items.length === nItems) D.puffs = []; // blown away and spread to nothing: the cloud is gone
  }

  // ---- wind: gusts from the viewer toward the clicked point, over everything in view ----
  private gusts = []; private dtReal = 0;
  private blowWind(P) {
    const C3 = Cesium.Cartesian3, cam = this.camera, n = Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(P, new C3());
    const flat = (v) => C3.subtract(v, C3.multiplyByScalar(n, C3.dot(v, n), new C3()), v);
    let d = flat(C3.subtract(P, cam.positionWC, new C3()));
    if (C3.magnitude(d) < 1e-3 * C3.distance(P, cam.positionWC)) d = flat(C3.clone(cam.upWC)); // looking straight down: blow "up" the screen
    C3.normalize(d, d);
    const R = Cesium.Math.clamp(0.8 * C3.distance(cam.positionWC, P), 2000, 600000);
    // cartoon-strong (clears a mushroom in a few seconds), but shaped like wind: shear, eddies, diffusion
    this.gusts.push({ P: C3.clone(P), dir: d, R, U: R / 2.5, t: 0, dur: 5, env: 0 });
    this.whoosh(1.8, 0.5);
    const enu = Cesium.Transforms.eastNorthUpToFixedFrame(P);
    for (let i = 0; i < 16; i++) { // dust riding the gust, so it can be seen
      const a = Math.random() * 6.283, r = 0.45 * R * Math.sqrt(Math.random());
      const pos = Cesium.Matrix4.multiplyByPoint(enu, new C3(r * Math.cos(a), r * Math.sin(a), 0.02 * R + Math.random() * 0.12 * R), new C3());
      this.spawn(pos, { s0: 0.03 * R, s1: 0.09 * R, life: 2.5 + Math.random() * 1.5, c0: [0.82, 0.8, 0.76], c1: [0.8, 0.79, 0.77], a0: 0.22, vel: C3.multiplyByScalar(d, 0.15 * R, new C3()) });
    }
  }
  private updateGusts(dt) {
    this.dtReal = dt;
    for (const g of this.gusts) { g.t += dt; g.env = smooth(0, 0.4, g.t) * (1 - smooth(g.dur - 1.5, g.dur, g.t)); }
    this.gusts = this.gusts.filter((g) => g.t < g.dur);
  }
  /** wind velocity (world vector, m/s) at a world point, or null */
  private windAt(X) {
    const C3 = Cesium.Cartesian3; let v = null;
    for (const g of this.gusts) {
      const f = 1 - smooth(0.6 * g.R, 1.5 * g.R, C3.distance(X, g.P)); if (f <= 0) continue;
      v = C3.add(v || new C3(), C3.multiplyByScalar(g.dir, g.U * g.env * f, new C3()), v || new C3());
    }
    return v;
  }

  private updateBlast(D, dt) {
    const E = D.E;
    D.real += dt;
    const k = D.t > E.Trise * 1.3 ? 1 : 1 + 11 * smooth(0.8, 4.5, D.real);
    const dtSim = D.t > E.Trise * 3 ? 0 : dt * k;
    D.t += dtSim;
    const t = D.t;
    const shock0 = D.shock;
    if (D.shock < D.maxR * 1.2) D.shock += 340 * E.shockBoost * (1 + (2.5 * E.Rfb) / Math.max(D.shock, E.Rfb)) * dtSim;
    // collapse follows the front, but needs the bare-earth heightmap: if that lands late, it catches up in ~1.5 s
    if (D.hm) D.cshock = Math.min(D.shock, D.cshock + Math.max(D.shock - shock0, (D.X.r5 / 1.5) * dt));
    D.dtSim = dtSim;
    this.spawnChunks(D);
    const glow = Math.exp(-t / E.tglow), night = 1 - (D.tn ? D.tn.day : 1);
    D.flash = t < 0.04 ? 1 : 0.95 * Math.exp(-(t - 0.04) / (0.12 + 0.35 * E.tmax));
    D.warm = 0.6 * glow * (1 + night);
    if (D.mini) D.flash = D.warm = 0; // smallBoom draws its own flash
    D.burn = smooth(0, E.tmax, t); D.glowB = 1.6 * glow * (1 + 1.5 * night);
    D.crv = smooth(E.tmax * 0.5, E.tmax * 3 + 1, t);
    // glowing crater floor and cracks: cools in REAL time (sim time runs up to 12x faster), black after ~a minute
    const heat = Math.min(1, smooth(0, 1.5, D.real) * 1.2) * Math.exp(-D.real / 20); D.heat = D.real > 2 && heat < 0.01 ? 0 : heat;
    // retired blasts fade their cloud out, then drop it
    if (!D.splatted && (D.shock >= E.r1 || !this.animating(D))) { D.splatted = true; if (this.tileset) this.splat(D); }
    // what a gust left of a cloud (blown far off, thinned) fades once the wind drops, then is freed
    if (D.blown && !this.gusts.length && D.puffs.length) { D.cloudA = Math.max(0, D.cloudA - dt / 2); if (!D.cloudA) D.puffs = []; }
    if (D.retired && D.puffs.length) { D.cloudA = Math.max(0, D.cloudA - dt / 8); if (!D.cloudA) D.puffs = []; }
    if (D.groundMat) { const u = D.groundMat.uniforms; u.shock = D.shock / D.maxR; u.glow = Math.min(0.9, 1.2 * glow); u.burn = smooth(0, E.tmax * 2, t); u.crv = D.crv; }
    if (!D.mini) this.addRing(D, 'fb', E.Rfb, '#ffd84a');
    if (D.mini) {} else if (t > E.tmax) { this.addRing(D, 'rad', E.rrad, '#55dd66'); this.addRing(D, 'th', E.rth, '#ffb84d'); }
    if (!D.mini && D.shock > E.r20) this.addRing(D, 'p20', E.r20, '#ff3030');
    if (!D.mini && D.shock > E.r5) this.addRing(D, 'p5', E.r5, '#ff8a2a');
    if (!D.mini && D.shock > E.r1) this.addRing(D, 'p1', E.r1, '#7fb2ff');

    if (!D.heard) {
      const dist = Cesium.Cartesian3.distance(this.camera.positionWC, D.local(0, 0, E.hob));
      if (D.shock >= dist || t * 340 * E.shockBoost >= dist) {
        D.heard = true;
        const rel = dist / Math.max(E.r1, 1);
        this.boom(Math.min(1, 0.25 + 0.9 / (1 + rel * 0.8)) * (D.gen ? 0.6 : 1), Math.min(14, 2.2 + Math.log10(E.W + 1) * 1.6), clamp01(rel / 6));
        this.addShake(Math.min(0.03, 0.012 / (0.3 + rel)) * (D.gen ? 0.6 : 1));
      }
    }
    for (const ch of D.children) {
      if (ch.done || D.shock < ch.dist) continue;
      ch.done = true;
      const carto = Cesium.Cartographic.fromCartesian(D.local(ch.dist * Math.cos(ch.a), ch.dist * Math.sin(ch.a), 0));
      carto.height = this.surfaceHeight(carto) ?? Cesium.Cartographic.fromCartesian(D.groundPos).height;
      this.detonate(Cesium.Cartographic.toCartesian(carto), { ...D.w, W: ch.W, id: undefined }, { gen: D.gen + 1, root: D.root });
    }
  }

  // ======================================================================= particles & flyers
  private spawn(pos, o) {
    const b = this.bb(null, o.glow ? 'glow' : 'puff', { sizeInMeters: true, position: pos, width: o.s0, height: o.s0, rotation: Math.random() * 6.28 });
    this.particles.push({ b, pos: Cesium.Cartesian3.clone(pos), age: 0, life: o.life, s0: o.s0, s1: o.s1, c0: o.c0, c1: o.c1, a0: o.a0 ?? 0.55, vel: o.vel, lit: o.glow });
  }
  private updateParticles(dt) {
    const tn = this.tint;
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i]; p.age += dt;
      const f = p.age / p.life;
      if (f >= 1) { this.rm(p.b); this.particles.splice(i, 1); continue; }
      if (p.vel) { Cesium.Cartesian3.add(p.pos, Cesium.Cartesian3.multiplyByScalar(p.vel, dt, new Cesium.Cartesian3()), p.pos); p.b.position = p.pos; }
      if (this.gusts.length) { const v = this.windAt(p.pos); if (v) { Cesium.Cartesian3.add(p.pos, Cesium.Cartesian3.multiplyByScalar(v, dt, v), p.pos); p.b.position = p.pos; } }
      p.b.width = p.b.height = lerp(p.s0, p.s1, Math.sqrt(f));
      const dk = p.lit ? [1, 1, 1] : tn;
      const cf = p.lit ? f : 1 - Math.pow(1 - f, 4); // fire colour fades to smoke quickly
      p.b.color = new Cesium.Color(lerp(p.c0[0], p.c1[0] * dk[0], cf), lerp(p.c0[1], p.c1[1] * dk[1], cf), lerp(p.c0[2], p.c1[2] * dk[2], cf), p.a0 * (1 - f) * Math.min(1, p.age * 8));
    }
  }
  // ---- debris: fake ballistic chunks (no physics engine): gravity, spin, one bounce, rest, fade ----
  /** chunks thrown outward and up from the band the collapse front just crossed, near the camera only */
  private spawnChunks(D) {
    if (!this.tileset || !D.hm || D.retired) return;
    const E = D.X, C3 = Cesium.Cartesian3, r0 = Math.max(D.chunkR || 0, 0.3 * E.Rfb), r1 = Math.min(D.cshock, E.r5);
    if (r1 <= r0) return;
    D.chunkR = r1;
    const cam = this.camera.positionWC, dc = C3.distance(cam, D.groundPos);
    if (dc > 3 * E.r5 + 2000 || this.chunks.length >= 600) return;
    // rate: built-up share of the place x annulus area, capped per frame and globally (≤ 600 live)
    const area = Math.PI * (r1 * r1 - r0 * r0) / 1e6, k = this.cv.clientHeight / (2 * Math.tan((this.camera.frustum.fovy || 1) / 2));
    let n = Math.min(40, 600 - this.chunks.length, Math.round(area * 60 * (D.urban ?? 0.3) + Math.random()));
    if (!D.enuO) D.enuO = Cesium.Transforms.eastNorthUpToFixedFrame(D.origin);
    for (; n > 0; n--) {
      const a = Math.random() * 6.2832, r = Math.sqrt(r0 * r0 + Math.random() * (r1 * r1 - r0 * r0));
      const x = r * Math.cos(a), y = r * Math.sin(a), size = 3 + 12 * Math.random() ** 2;
      const pos = Cesium.Matrix4.multiplyByPoint(D.enuO, new C3(x, y, this.hmAt(D, x, y) + 6 + Math.random() * 25), new C3());
      if ((size / Math.max(C3.distance(cam, pos), 1)) * k < 1) continue; // under a pixel: not worth a billboard
      const s = 1 - 0.6 * smooth(E.r20, E.r5, r), out = (30 + 80 * Math.random()) * s, upv = 15 + 40 * Math.random();
      const vel = Cesium.Matrix4.multiplyByPointAsVector(D.enuO, new C3(out * Math.cos(a), out * Math.sin(a), upv), new C3());
      const b = this.bb(null, 'chunk', { sizeInMeters: true, position: pos, width: size, height: size * (0.6 + 0.5 * Math.random()), rotation: Math.random() * 6.28 });
      this.chunks.push({ b, pos, vel, D, size, spin: (Math.random() - 0.5) * 8, bounced: false, rest: 0 });
    }
  }
  private updateChunks(dt) {
    if (!this.chunks.length) return;
    const C3 = Cesium.Cartesian3, tn = this.tint, l = new C3(), g = new C3();
    for (let i = this.chunks.length - 1; i >= 0; i--) {
      const c = this.chunks[i], D = c.D;
      if (c.rest > 0) {
        c.rest += dt; const a = 1 - smooth(4, 10, c.rest);
        if (a <= 0) { this.rm(c.b); this.chunks.splice(i, 1); continue; }
        c.b.color = new Cesium.Color(tn[0], tn[1], tn[2], a);
        continue;
      }
      C3.add(c.vel, C3.multiplyByScalar(D.up, -9.81 * dt, g), c.vel);
      C3.add(c.pos, C3.multiplyByScalar(c.vel, dt, g), c.pos);
      c.b.position = c.pos; c.b.rotation += c.spin * dt;
      // the ground: this blast's bare-earth estimate plus every crater / subsidence (CPU mirror, no sampleHeight)
      Cesium.Matrix4.multiplyByPoint(D.invEnu, c.pos, l);
      const ground = (D.hm ? this.hmAt(D, l.x, l.y) : 0) + this.deformAt(c.pos) + c.size * 0.3;
      if (l.z > ground) continue;
      const up = C3.dot(c.vel, D.up);
      if (!c.bounced) { // one bounce: lose most of the speed, kick a little dust
        c.bounced = true;
        C3.add(C3.multiplyByScalar(c.vel, 0.35, c.vel), C3.multiplyByScalar(D.up, -up * 0.35 * 1.6, g), c.vel);
        c.spin *= 0.5;
        if (Math.random() < 0.35) this.spawn(C3.clone(c.pos), { s0: c.size * 1.2, s1: c.size * 5, life: 2.2, c0: [0.62, 0.57, 0.5], c1: [0.55, 0.5, 0.45], a0: 0.35 });
      } else { c.rest = 0.001; c.vel = new C3(); }
    }
  }

  private launchFlyer(o) {
    const head = this.bb(null, o.image || 'glow', { sizeInMeters: !o.headPixels, position: o.path(0), width: o.headPixels || o.headSize, height: o.headPixels || o.headSize, color: o.headColor, alignedAxis: Cesium.Cartesian3.ZERO });
    const f = { ...o, t: 0, head, acc: 0, size: o.headPixels || o.headSize };
    this.flyers.push(f);
    return f;
  }
  private updateFlyers(dt) {
    for (const f of [...this.flyers]) {
      f.t += dt;
      const s = Math.min(1, f.t / f.dur), pos = f.path(s);
      f.head.position = pos;
      if (f.orient) { const ahead = f.path(Math.min(1, s + 0.002)); const dir = Cesium.Cartesian3.subtract(ahead, pos, new Cesium.Cartesian3()); if (Cesium.Cartesian3.magnitude(dir) > 0) f.head.alignedAxis = Cesium.Cartesian3.normalize(dir, dir); }
      else f.head.width = f.head.height = f.size * (0.85 + Math.random() * 0.3);
      f.onStep && f.onStep(s, pos);
      if (f.trail) {
        f.acc += dt;
        while (f.acc > f.trail.every) { f.acc -= f.trail.every; this.spawn(f.path(Math.max(0, s - 0.003 * Math.random())), { s0: f.trail.size * 0.4, s1: f.trail.size * (1.4 + Math.random()), life: f.trail.life, c0: f.trail.c0, c1: f.trail.c1, a0: f.trail.a0 }); }
      }
      if (s >= 1) {
        this.rm(f.head);
        f.entity && this.viewer.entities.remove(f.entity);
        this.flyers = this.flyers.filter((x) => x !== f);
        f.onArrive && f.onArrive();
      }
    }
  }

  /** A conventional explosion: cheap particle effect, no mushroom. */
  private smallBoom(pos, scale = 1) {
    scale *= 2.2; // conventional blasts are tiny from afar: exaggerate a bit so they read on screen
    const C3 = Cesium.Cartesian3, up = Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(pos, new C3());
    this.spawn(pos, { glow: true, s0: 30 * scale, s1: 140 * scale, life: 0.35, c0: [1, 0.95, 0.8], c1: [1, 0.6, 0.2], a0: 1 });
    for (let i = 0; i < 6; i++) {
      const v = C3.multiplyByScalar(up, (6 + Math.random() * 10) * scale, new C3());
      this.spawn(pos, { s0: 20 * scale, s1: (70 + Math.random() * 50) * scale, life: 2.5 + Math.random() * 3, c0: [1, 0.6, 0.25], c1: [0.22, 0.2, 0.19], a0: 0.7, vel: v });
    }
    const enu = Cesium.Transforms.eastNorthUpToFixedFrame(pos);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + Math.random();
      this.spawn(Cesium.Matrix4.multiplyByPoint(enu, new C3(Math.cos(a) * 25 * scale, Math.sin(a) * 25 * scale, 5), new C3()), { s0: 20 * scale, s1: 80 * scale, life: 3, c0: [0.7, 0.62, 0.52], c1: [0.6, 0.55, 0.5], a0: 0.4 });
    }
    this.smallBoomSound(pos);
    // conventional weapons damage the ground too: a small permanent scar (crater, rubble, cracks, debris), sized
    // like a tens-of-tonnes blast (cruise ~30 m crater, collapse out to ~330 m), no cloud, rings or flash
    if (this.tileset) this.detonate(pos, { id: 'mini', kind: 'mini', W: 0.0039 * (scale / 2.2) ** 3, air: false }, { mini: true });
    const dist = C3.distance(this.camera.positionWC, pos);
    if (dist < 2000 * scale) this.addShake(0.001 * scale * (1 - dist / (2000 * scale)));
  }

  private groundAt(carto, fallbackH) {
    carto.height = this.surfaceHeight(carto) ?? fallbackH;
    return Cesium.Cartographic.toCartesian(carto);
  }

  // ---- from the sky ----
  private fireFromSky(groundPos, w) {
    this.prepFor(groundPos, w);
    const C3 = Cesium.Cartesian3, E = effects(w.W, w.air, w.hob);
    const enu = Cesium.Transforms.eastNorthUpToFixedFrame(groundPos);
    const local = (x, y, z) => Cesium.Matrix4.multiplyByPoint(enu, new C3(x, y, z), new C3());
    const isRod = w.kind === 'rod';
    const az = Math.random() * Math.PI * 2, el = Cesium.Math.toRadians(isRod ? 84 : 25 + Math.random() * 20);
    const Ls = isRod ? 80000 : Math.max(120000, (w.size || 50) * 40);
    const end = [0, 0, E.hob], start = [Ls * Math.cos(el) * Math.cos(az), Ls * Math.cos(el) * Math.sin(az), E.hob + Ls * Math.sin(el)];
    const vis = isRod ? 120 : Math.max(500, (w.size || 50) * 12), dur = isRod ? 0.9 : 2.4;
    this.whoosh(dur, isRod ? 1.8 : 0.7);
    this.launchFlyer({
      path: (s) => local(lerp(start[0], end[0], s), lerp(start[1], end[1], s), lerp(start[2], end[2], s)),
      dur, headSize: vis * 1.6, headColor: isRod ? new Cesium.Color(0.8, 0.9, 1, 1) : new Cesium.Color(1, 0.85, 0.6, 1),
      trail: { size: vis, life: isRod ? 1.2 : 5, c0: isRod ? [0.85, 0.92, 1] : [1, 0.7, 0.35], c1: [0.42, 0.4, 0.38], every: isRod ? 0.012 : 0.018, a0: 0.55 },
      onArrive: () => this.detonate(groundPos, w),
    });
  }

  // ---- 3D shapes (real scale, built from Cesium primitives; no external models) ----
  /** parts: [{ geom: 'box'|'ellipsoid'|'cylinder', size: [x,y,z] | {length,top,bottom}, at: [x,y,z], color, alpha? }] */
  private makeShape(parts) {
    const VF = Cesium.PerInstanceColorAppearance.VERTEX_FORMAT;
    return parts.map((p) => {
      const geometry = p.geom === 'box' ? Cesium.BoxGeometry.fromDimensions({ dimensions: new Cesium.Cartesian3(...p.size), vertexFormat: VF })
        : p.geom === 'ellipsoid' ? new Cesium.EllipsoidGeometry({ radii: new Cesium.Cartesian3(...p.size), vertexFormat: VF, stackPartitions: 16, slicePartitions: 24 })
        : new Cesium.CylinderGeometry({ length: p.size.length, topRadius: p.size.top, bottomRadius: p.size.bottom, vertexFormat: VF, slices: 16 });
      const color = Cesium.Color.fromCssColorString(p.color).withAlpha(p.alpha ?? 1);
      const prim = this.scene.primitives.add(new Cesium.Primitive({
        geometryInstances: new Cesium.GeometryInstance({ geometry, attributes: { color: Cesium.ColorGeometryInstanceAttribute.fromColor(color) } }),
        appearance: new Cesium.PerInstanceColorAppearance({ translucent: color.alpha < 1, closed: true }),
        asynchronous: false,
      }));
      return { prim, at: p.at || [0, 0, 0] };
    });
  }
  /** place a shape: frame = local 4x4 (x forward, z up) in world coordinates */
  private poseShape(shape, frame) {
    for (const s of shape) s.prim.modelMatrix = Cesium.Matrix4.multiply(frame, Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(...s.at)), new Cesium.Matrix4());
  }
  private removeShape(shape) { shape.forEach((s) => this.scene.primitives.remove(s.prim)); }
  private frameAt(pos, heading = 0) {
    return Cesium.Transforms.headingPitchRollToFixedFrame(pos, new Cesium.HeadingPitchRoll(heading, 0, 0));
  }

  // ---- launch-from-silo mode: any payload can be delivered by a ballistic missile ----
  launchMode = false;
  setLaunchMode(on: boolean) {
    this.launchMode = on;
    if (!on) this.removeBase();
    this.updateHint();
    this.poke();
  }
  private setBase(pos) {
    if (this.base) this.viewer.entities.remove(this.base.entity);
    const gold = Cesium.Color.fromCssColorString('#ffd23f');
    this.base = {
      pos: Cesium.Cartesian3.clone(pos),
      entity: this.viewer.entities.add({
        position: pos,
        point: { pixelSize: 13, color: gold, outlineColor: Cesium.Color.BLACK, outlineWidth: 3, disableDepthTestDistance: Number.POSITIVE_INFINITY },
        label: { text: 'SILO', font: '700 12px Roboto, system-ui', pixelOffset: new Cesium.Cartesian2(0, -20), fillColor: gold, outlineColor: Cesium.Color.BLACK, outlineWidth: 4, style: Cesium.LabelStyle.FILL_AND_OUTLINE, disableDepthTestDistance: Number.POSITIVE_INFINITY },
      }),
    };
    this.updateHint();
  }
  private geoPath(a, b, heightFn) {
    const ca = Cesium.Cartographic.fromCartesian(a), cb = Cesium.Cartographic.fromCartesian(b);
    const geo = new Cesium.EllipsoidGeodesic(ca, cb);
    const path = (s) => { const c = geo.interpolateUsingFraction(s); c.height = lerp(ca.height, cb.height, s) + heightFn(s, geo.surfaceDistance); return Cesium.Cartographic.toCartesian(c); };
    return { path, dist: geo.surfaceDistance };
  }
  private ballistic(from, to) {
    return this.geoPath(from, to, (s, d) => (Math.min(1200e3, d * 0.22) + Math.min(15e3, 2000 + d * 0.3)) * 4 * s * (1 - s));
  }
  /** fire whatever is selected from the silo; the payload is delivered on impact */
  private launch(target, w) {
    this.prepFor(target, w);
    const { path, dist } = this.ballistic(this.base.pos, target);
    const pts = []; for (let i = 0; i <= 120; i++) pts.push(path(i / 120));
    const entity = this.viewer.entities.add({ polyline: { positions: pts, width: 3, material: this.hiMat('#ffd23f', true), depthFailMaterial: this.hiMat('#ffd23f', true) } });
    const dur = 2.5 + 5.5 * Math.min(1, dist / 9e6), vis = Math.max(120, Math.min(120000, dist * 0.012));
    this.whoosh(Math.min(2.5, dur), 1.2);
    this.launchFlyer({
      path, dur, headPixels: 20, headColor: new Cesium.Color(1, 0.75, 0.4, 1), entity,
      trail: { size: vis, life: 4, c0: [1, 0.85, 0.6], c1: [0.85, 0.85, 0.85], every: 0.025, a0: 0.55 },
      onArrive: () => { this.deliver(target, w); if (dist >= 5.5e6) this.ev.unlock('icbm'); },
    });
  }
  /** cruise missile: without a silo it comes in low from behind the camera; with a silo it starts there */
  private fireCruise(target, w) {
    const C3 = Cesium.Cartesian3, enu = Cesium.Transforms.eastNorthUpToFixedFrame(target);
    let start;
    if (this.launchMode && this.base) start = this.base.pos;
    else {
      const hd = this.camera.heading + Math.PI + (Math.random() - 0.5) * 0.5, R = 25000;
      start = Cesium.Matrix4.multiplyByPoint(enu, new C3(Math.sin(hd) * R, Math.cos(hd) * R, 0), new C3());
    }
    const { path, dist } = this.geoPath(start, target, (s, d) => 300 * smooth(0, Math.min(0.08, 2000 / d), s) * (1 - smooth(1 - Math.min(0.08, 2000 / d), 1, s)));
    const dur = Cesium.Math.clamp(dist / 2500, 2, 14);
    this.whoosh(Math.min(2, dur), 1.6);
    this.launchFlyer({
      path, dur, headPixels: 12, headColor: new Cesium.Color(1, 0.85, 0.55, 1),
      trail: { size: Math.max(40, Math.min(3000, dist * 0.004)), life: 2.5, c0: [1, 0.95, 0.85], c1: [0.8, 0.8, 0.8], every: 0.03, a0: 0.4 },
      onArrive: () => { this.smallBoom(target, 2.2 * Math.cbrt(w.W / 0.00045)); this.ev.unlock('cruise'); },
    });
  }

  // ---- railgun turrets ----
  private placeTurret(pos) {
    if (this.turrets.length >= 4) this.removeTurret(this.turrets.shift());
    const shape = this.makeShape([
      { geom: 'cylinder', size: { length: 4, top: 5, bottom: 6 }, at: [0, 0, 2], color: '#3c434c' },
      { geom: 'box', size: [7, 5, 3], at: [0, 0, 5.5], color: '#6b7682' },
      { geom: 'box', size: [16, 0.8, 0.8], at: [8, -1.2, 6.2], color: '#2fd3e6' },
      { geom: 'box', size: [16, 0.8, 0.8], at: [8, 1.2, 6.2], color: '#2fd3e6' },
    ]);
    const t = { pos: Cesium.Cartesian3.clone(pos), shape, cool: 0.6, aim: Math.random() * 6.28 };
    this.poseShape(shape, this.frameAt(pos, t.aim));
    const entity = this.viewer.entities.add({ position: pos, point: { pixelSize: 9, color: Cesium.Color.fromCssColorString('#2fd3e6'), outlineColor: Cesium.Color.BLACK, outlineWidth: 3, disableDepthTestDistance: Number.POSITIVE_INFINITY } });
    (t as any).entity = entity;
    this.turrets.push(t);
    this.ev.unlock('railgun');
    this.updateHint();
  }
  private removeTurret(t) { this.removeShape(t.shape); this.viewer.entities.remove(t.entity); }
  private updateTurrets(dt) {
    const C3 = Cesium.Cartesian3;
    for (const t of this.turrets) {
      t.cool -= dt;
      if (t.cool > 0) continue;
      t.cool = 0.9 + Math.random() * 0.8;
      const enu = Cesium.Transforms.eastNorthUpToFixedFrame(t.pos);
      const a = Math.random() * Math.PI * 2, r = 3000 + Math.random() * 12000;
      t.aim = Math.PI / 2 - a; // ENU angle -> heading frame (x forward)
      this.poseShape(t.shape, this.frameAt(t.pos, t.aim - Math.PI / 2));
      const carto = Cesium.Cartographic.fromCartesian(Cesium.Matrix4.multiplyByPoint(enu, new C3(Math.cos(a) * r, Math.sin(a) * r, 0), new C3()));
      const target = this.groundAt(carto, Cesium.Cartographic.fromCartesian(t.pos).height);
      const muzzle = Cesium.Matrix4.multiplyByPoint(enu, new C3(Math.cos(a) * 16, Math.sin(a) * 16, 6), new C3());
      this.spawn(muzzle, { glow: true, s0: 20, s1: 70, life: 0.2, c0: [0.7, 0.95, 1], c1: [0.4, 0.8, 1], a0: 1 });
      this.zap();
      const { path } = this.geoPath(muzzle, target, (s, d) => d * 0.04 * 4 * s * (1 - s));
      this.launchFlyer({
        path, dur: 0.35 + r / 25000, headPixels: 9, headColor: new Cesium.Color(0.75, 0.97, 1, 1),
        trail: { size: 40, life: 0.8, c0: [0.7, 0.95, 1], c1: [0.6, 0.75, 0.85], every: 0.008, a0: 0.6 },
        onArrive: () => this.smallBoom(target, 1.6),
      });
    }
  }

  // ---- carpet bombing: three real-scale bombers; the longer the line, the higher they fly ----
  private planes = [];
  private startLine(p) {
    this.lineStart = Cesium.Cartesian3.clone(p);
    this.hover = Cesium.Cartesian3.clone(p);
    this.rubber = this.viewer.entities.add({
      polyline: {
        positions: new Cesium.CallbackProperty(() => this.liftedLine(this.lineStart, this.hover || this.lineStart), false),
        width: 4, material: this.hiMat('#ffd23f', true), depthFailMaterial: this.hiMat('#ffd23f', true),
      },
    });
    this.updateHint();
  }
  private liftedLine(a, b) {
    const ca = Cesium.Cartographic.fromCartesian(a), cb = Cesium.Cartographic.fromCartesian(b);
    const pts = [];
    for (let i = 0; i <= 24; i++) { const f = i / 24; pts.push(Cesium.Cartesian3.fromRadians(lerp(ca.longitude, cb.longitude, f), lerp(ca.latitude, cb.latitude, f), lerp(ca.height, cb.height, f) + 4)); }
    return pts;
  }
  private cancelLine() {
    if (this.rubber) this.viewer.entities.remove(this.rubber);
    this.rubber = null; this.lineStart = null;
  }
  private makeBomber() {
    return this.makeShape([
      // dark charcoal reads far better than light grey over a bright, detailed city
      { geom: 'ellipsoid', size: [24, 2.4, 2.6], at: [0, 0, 0], color: '#2c3238' },
      { geom: 'box', size: [9, 56, 0.9], at: [1, 0, 0.4], color: '#22272c' },
      { geom: 'box', size: [5, 18, 0.7], at: [-20, 0, 1.2], color: '#22272c' },
      { geom: 'box', size: [6, 0.7, 8], at: [-20, 0, 4.5], color: '#1b1f23' },
      { geom: 'cylinder', size: { length: 5, top: 1.1, bottom: 1.1 }, at: [3, -12, -1.6], color: '#59616b' },
      { geom: 'cylinder', size: { length: 5, top: 1.1, bottom: 1.1 }, at: [3, 12, -1.6], color: '#59616b' },
    ]);
  }
  private carpetBomb(a, b, w) {
    const ca = Cesium.Cartographic.fromCartesian(a), cb = Cesium.Cartographic.fromCartesian(b);
    const geo = new Cesium.EllipsoidGeodesic(ca, cb), len = Math.max(200, geo.surfaceDistance);
    const agl = Cesium.Math.clamp(len * 0.12, 120, 9000); // short run: low pass you can see; long run: high altitude
    const alt = Math.max(ca.height, cb.height) + agl;
    const lead = Math.max(2500, agl * 5), total = len + 2 * lead;
    const fly = (d, side) => {
      const s = (d - lead) / len;
      const c = geo.interpolateUsingFraction(Math.max(-lead / len, Math.min(1 + lead / len, s)));
      const hd = geo.startHeading + (geo.endHeading - geo.startHeading) * clamp01(s);
      const center = Cesium.Cartographic.toCartesian(new Cesium.Cartographic(c.longitude, c.latitude, alt));
      const enu = Cesium.Transforms.eastNorthUpToFixedFrame(center);
      const pos = Cesium.Matrix4.multiplyByPoint(enu, new Cesium.Cartesian3(Math.cos(hd) * side, -Math.sin(hd) * side, 0), new Cesium.Cartesian3());
      return { pos, hd };
    };
    const speed = Cesium.Math.clamp(len / 6, 160, 900), dur = total / speed, spacing = Math.max(60, len / 30);
    const sep = Math.max(90, Math.min(400, len * 0.03));
    this.whoosh(Math.min(4, dur * 0.4), 0.5);
    this.ev.unlock('carpet');
    const lastH = cb.height;
    [-sep, 0, sep].forEach((side, j) => {
      const shape = this.makeBomber();
      const strobe = this.bb(null, 'glow', { sizeInMeters: false, width: 16, height: 16, color: new Cesium.Color(1, 0.15, 0.15, 1), disableDepthTestDistance: 5000 });
      this.planes.push({ shape, strobe, t: -j * 0.35, dur, total, fly, side, nextDrop: lead + (j % 2) * spacing * 0.5, lead, len, spacing, w, lastH, trailAcc: 0 });
    });
  }
  private updatePlanes(dt) {
    for (let i = this.planes.length - 1; i >= 0; i--) {
      const P = this.planes[i];
      P.t += dt;
      const s = clamp01(P.t / P.dur), d = s * P.total;
      const { pos, hd } = P.fly(d, P.side);
      // heading from north (geodesic) -> Cesium HPR heading (x axis = forward)
      this.poseShape(P.shape, this.frameAt(pos, hd - Math.PI / 2));
      P.strobe.position = pos;
      const on = Math.floor(P.t * 2.5) % 2 === 0;
      P.strobe.color = on ? new Cesium.Color(1, 0.15, 0.15, 1) : new Cesium.Color(1, 1, 1, 0.9);
      P.trailAcc += dt;
      while (P.trailAcc > 0.05) { P.trailAcc -= 0.05; this.spawn(pos, { s0: 10, s1: 55, life: 7, c0: [1, 1, 1], c1: [0.95, 0.95, 0.97], a0: 0.7 }); }
      while (d >= P.nextDrop && P.nextDrop <= P.lead + P.len) {
        const drop = P.fly(P.nextDrop, P.side).pos;
        const g = Cesium.Cartographic.fromCartesian(drop);
        this.dropBomb(drop, this.groundAt(new Cesium.Cartographic(g.longitude, g.latitude, 0), P.lastH), P.w);
        P.nextDrop += P.spacing;
      }
      if (s >= 1) { this.removeShape(P.shape); this.rm(P.strobe); this.planes.splice(i, 1); }
    }
  }
  private dropBomb(from, to, w) {
    const b = this.bb(null, 'glow', { sizeInMeters: false, width: 6, height: 6, position: from, color: new Cesium.Color(0.05, 0.05, 0.05, 1) });
    const fall = Math.sqrt((2 * Math.max(50, Cesium.Cartesian3.distance(from, to))) / 9.81) * 0.5; // a bit faster than real
    this.bombs.push({ b, from, to, t: 0, dur: Math.max(0.8, fall), w });
  }
  private updateBombs(dt) {
    for (let i = this.bombs.length - 1; i >= 0; i--) {
      const bm = this.bombs[i]; bm.t += dt;
      const s = Math.min(1, bm.t / bm.dur);
      bm.b.position = Cesium.Cartesian3.lerp(bm.from, bm.to, s * s, new Cesium.Cartesian3());
      if (s >= 1) { this.rm(bm.b); this.bombs.splice(i, 1); this.smallBoom(bm.to, 1.3); }
    }
  }

  // ---- UFOs: a real-size saucer (32 m) parks low over the target and beams people up ----
  private ufos = [];
  private abducted = 0;
  private spawnUfo(target) {
    if (this.ufos.length >= 4) this.removeUfo(this.ufos.shift());
    const enu = Cesium.Transforms.eastNorthUpToFixedFrame(target);
    const hover = 110, beamR = 24;
    const a = Math.random() * Math.PI * 2;
    const parts = [
      { geom: 'ellipsoid', size: [16, 16, 2.6], at: [0, 0, 0], color: '#c3cad2' },
      { geom: 'ellipsoid', size: [11, 11, 1.6], at: [0, 0, -1.4], color: '#5f6873' },
      { geom: 'ellipsoid', size: [6, 6, 4.8], at: [0, 0, 2.2], color: '#7fe9ff', alpha: 0.75 },
      { geom: 'ellipsoid', size: [5, 5, 0.6], at: [0, 0, -2.9], color: '#9dffb7' },
    ];
    for (let i = 0; i < 10; i++) {
      const th = (i / 10) * Math.PI * 2;
      parts.push({ geom: 'ellipsoid', size: [0.8, 0.8, 0.8], at: [Math.cos(th) * 15.6, Math.sin(th) * 15.6, -0.2], color: ['#ffe14d', '#59ff9a', '#ff5fd2'][i % 3] });
    }
    const u: any = {
      enu, target: Cesium.Cartesian3.clone(target), hover, beamR, t: 0, arrive: 3.2, beam: null, people: [], spawn: 0, spin: 0,
      from: [Math.cos(a) * 6000, Math.sin(a) * 6000, 3500], shape: this.makeShape(parts),
      marker: this.viewer.entities.add({ position: target, point: { pixelSize: 8, color: Cesium.Color.fromCssColorString('#59ff9a'), outlineColor: Cesium.Color.BLACK, outlineWidth: 3, disableDepthTestDistance: Number.POSITIVE_INFINITY } }),
    };
    this.ufos.push(u);
    this.theremin();
    this.updateHint();
  }
  private removeUfo(u) {
    this.removeShape(u.shape);
    if (u.beam) this.viewer.entities.remove(u.beam);
    this.viewer.entities.remove(u.marker);
    u.people.forEach((p) => this.removeShape(p.shape));
  }
  private makePerson() {
    const shirt = ['#e53935', '#1e88e5', '#43a047', '#fdd835', '#8e24aa', '#fb8c00', '#eceff1'][Math.floor(Math.random() * 7)];
    return this.makeShape([
      { geom: 'cylinder', size: { length: 0.85, top: 0.12, bottom: 0.15 }, at: [0, 0, 0.42], color: '#37474f' },
      { geom: 'cylinder', size: { length: 0.65, top: 0.22, bottom: 0.18 }, at: [0, 0, 1.15], color: shirt },
      { geom: 'ellipsoid', size: [0.12, 0.12, 0.14], at: [0, 0, 1.63], color: '#f1c27d' },
    ]);
  }
  private updateUfos(dt) {
    const C3 = Cesium.Cartesian3;
    for (const u of this.ufos) {
      u.t += dt; u.spin += dt * 0.8;
      const s = smooth(0, u.arrive, u.t);
      const bob = 1.5 * Math.sin(u.t * 1.6);
      const x = lerp(u.from[0], 0, s), y = lerp(u.from[1], 0, s), z = lerp(u.from[2], u.hover, s) + bob * s;
      const pos = Cesium.Matrix4.multiplyByPoint(u.enu, new C3(x, y, z), new C3());
      this.poseShape(u.shape, this.frameAt(pos, u.spin));
      if (u.t < u.arrive) continue;
      if (!u.beam) {
        u.beam = this.viewer.entities.add({
          position: Cesium.Matrix4.multiplyByPoint(u.enu, new C3(0, 0, (u.hover - 3) / 2), new C3()),
          cylinder: { length: u.hover - 3, topRadius: 6, bottomRadius: u.beamR, material: Cesium.Color.fromCssColorString('#a8ffbf').withAlpha(0.2), outline: true, outlineColor: Cesium.Color.fromCssColorString('#59ff9a').withAlpha(0.6), numberOfVerticalLines: 12 },
        });
        this.ev.unlock('ufo');
      }
      u.spawn -= dt;
      if (u.spawn <= 0 && u.people.length < 40) {
        u.spawn = 0.35 + Math.random() * 0.4;
        const r = Math.sqrt(Math.random()) * u.beamR * 0.85, th = Math.random() * Math.PI * 2;
        u.people.push({ r, th, z: 0, v: 0.6, spin: (Math.random() < 0.5 ? -1 : 1) * (0.4 + Math.random() * 0.5), tumble: Math.random() * 6, shape: this.makePerson() });
      }
      for (let i = u.people.length - 1; i >= 0; i--) {
        const p = u.people[i];
        p.v = Math.min(9, p.v + 1.2 * dt); // slow lift-off, then steadier
        p.z += p.v * dt; p.th += p.spin * dt; p.tumble += dt;
        const k = p.z / u.hover, rr = p.r * (1 - 0.8 * k);
        const ppos = Cesium.Matrix4.multiplyByPoint(u.enu, new C3(rr * Math.cos(p.th), rr * Math.sin(p.th), p.z), new C3());
        const frame = Cesium.Transforms.headingPitchRollToFixedFrame(ppos, new Cesium.HeadingPitchRoll(p.th, Math.sin(p.tumble) * 0.6 * k, Math.cos(p.tumble * 0.8) * 0.8 * k));
        this.poseShape(p.shape, frame);
        if (p.z >= u.hover - 6) { this.removeShape(p.shape); u.people.splice(i, 1); this.abducted++; this.ev.abducted(this.abducted); }
      }
    }
  }
  private theremin() {
    const a = this.audio(); if (!a) return;
    const t = a.currentTime, o = a.createOscillator(), vib = a.createOscillator(), vg = a.createGain(), g = a.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(420, t); o.frequency.exponentialRampToValueAtTime(980, t + 0.9); o.frequency.exponentialRampToValueAtTime(610, t + 2.2);
    vib.frequency.value = 6; vg.gain.value = 22; vib.connect(vg); vg.connect(o.frequency);
    o.connect(g); g.connect(this.master); this.env(g, t, 0.16, 0.25, 2.4);
    o.start(t); vib.start(t); o.stop(t + 2.8); vib.stop(t + 2.8);
  }

  // ---- armed cursor preview: where it will hit and how far it reaches ----
  private hover = null; private hoverRest = null;
  private previewEnts = null;
  private previewRadii() {
    const w = this.tool;
    if (['nuke', 'asteroid', 'rod'].includes(w.kind)) {
      const E = effects(w.W, w.air, w.hob);
      return [[E.r20, '#ff3b30'], [E.r5, '#ff9500'], [E.r1, '#4fc3ff']];
    }
    if (w.kind === 'cruise') return [[60, '#ff9500']];
    if (w.kind === 'railgun') return [[15000, '#2fd3e6'], [3000, '#2fd3e6']];
    if (w.kind === 'ufo') return [[24, '#59ff9a']];
    if (w.kind === 'duck') return [[130, '#ffd23f']];
    return [];
  }
  private ensurePreview() {
    if (this.previewEnts) return;
    const ring = (i) => this.viewer.entities.add({
      show: false,
      polyline: {
        positions: new Cesium.CallbackProperty(() => this.ringAt(i), false),
        width: 4,
        material: new Cesium.PolylineOutlineMaterialProperty({ color: new Cesium.CallbackProperty(() => Cesium.Color.fromCssColorString((this.previewRadii()[i] || [0, '#fff'])[1]), false), outlineColor: Cesium.Color.BLACK, outlineWidth: 1.6 }),
        depthFailMaterial: new Cesium.PolylineOutlineMaterialProperty({ color: Cesium.Color.WHITE.withAlpha(0.55), outlineColor: Cesium.Color.BLACK.withAlpha(0.55), outlineWidth: 1 }),
      },
    });
    this.previewEnts = {
      rings: [ring(0), ring(1), ring(2)],
      dot: this.viewer.entities.add({ show: false, position: new Cesium.CallbackProperty(() => this.hover, false), point: { pixelSize: 10, color: Cesium.Color.fromCssColorString('#ffd23f'), outlineColor: Cesium.Color.BLACK, outlineWidth: 3, disableDepthTestDistance: Number.POSITIVE_INFINITY } }),
      arc: this.viewer.entities.add({
        show: false,
        polyline: { positions: new Cesium.CallbackProperty(() => this.arcPreview(), false), width: 3, material: this.hiMat('#ffd23f', true), depthFailMaterial: this.hiMat('#ffd23f', true) },
      }),
    };
  }
  private ringAt(i) {
    const r = this.previewRadii()[i];
    if (!r || !this.hover) return [];
    const R = r[0], c = Cesium.Cartographic.fromCartesian(this.hover);
    const enu = Cesium.Transforms.eastNorthUpToFixedFrame(this.hover), pts = [];
    for (let k = 0; k <= 96; k++) {
      const a = (k / 96) * Math.PI * 2;
      const g = Cesium.Cartographic.fromCartesian(Cesium.Matrix4.multiplyByPoint(enu, new Cesium.Cartesian3(Math.cos(a) * R, Math.sin(a) * R, 0), new Cesium.Cartesian3()));
      pts.push(Cesium.Cartesian3.fromRadians(g.longitude, g.latitude, c.height + 4));
    }
    return pts;
  }
  private arcPreview() {
    if (!this.base || !this.hover) return [];
    const { path } = this.ballistic(this.base.pos, this.hover);
    const pts = []; for (let i = 0; i <= 60; i++) pts.push(path(i / 60));
    return pts;
  }
  private updatePreview() {
    this.ensurePreview();
    const on = this.armed && !!this.hover && !this.drag;
    const radii = this.previewRadii();
    this.previewEnts.rings.forEach((e, i) => (e.show = on && i < radii.length));
    this.previewEnts.dot.show = on;
    this.previewEnts.arc.show = on && this.launchMode && !!this.base && this.tool.kind !== 'carpet';
  }

  // ---- rubber duck ----
  private async dropDuck(groundPos) {
    const C3 = Cesium.Cartesian3, enu = Cesium.Transforms.eastNorthUpToFixedFrame(groundPos), HEIGHT = 250;
    const duck: any = { enu, z: 2600, v: 0, bounces: 0, squash: 1, yaw: Math.random() * Math.PI * 2, scale: 1, rest: false };
    this.whoosh(1.6, 1.4);
    try {
      const model = await Cesium.Model.fromGltfAsync({ url: 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/Duck/glTF-Binary/Duck.glb', modelMatrix: Cesium.Matrix4.multiply(enu, Cesium.Matrix4.fromTranslation(new C3(0, 0, 2600)), new Cesium.Matrix4()) });
      this.scene.primitives.add(model);
      await new Promise((res, rej) => { model.readyEvent.addEventListener(res); setTimeout(() => rej(new Error('timeout')), 15000); });
      duck.scale = HEIGHT / (model.boundingSphere.radius * 2);
      model.minimumPixelSize = 40;
      duck.model = model;
    } catch {
      const c = document.createElement('canvas'); c.width = c.height = 128;
      const g = c.getContext('2d'); g.font = '100px serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('🦆', 64, 70);
      duck.bb = this.cols.misc.add({ image: c, sizeInMeters: true, width: HEIGHT, height: HEIGHT, position: groundPos, verticalOrigin: Cesium.VerticalOrigin.BOTTOM });
    }
    this.ducks.push(duck);
    this.ev.unlock('duck');
  }
  private updateDucks(dt) {
    const C3 = Cesium.Cartesian3;
    for (const d of this.ducks) {
      if (!d.rest) {
        d.v -= 2200 * dt; d.z += d.v * dt;
        if (d.z <= 0) {
          d.z = 0; this.squeak();
          if (d.bounces === 0) {
            for (let i = 0; i < 24; i++) { const a = (i / 24) * Math.PI * 2; this.spawn(Cesium.Matrix4.multiplyByPoint(d.enu, new C3(Math.cos(a) * 140, Math.sin(a) * 140, 20), new C3()), { s0: 60, s1: 260, life: 2.5, c0: [0.75, 0.68, 0.58], c1: [0.6, 0.55, 0.5], a0: 0.5 }); }
            this.addShake(0.004);
          }
          if (d.bounces < 3) { d.v = Math.abs(d.v) * 0.42; d.bounces++; d.squash = 0.6; } else { d.rest = true; d.v = 0; }
        }
      }
      d.squash += (1 - d.squash) * Math.min(1, dt * 9);
      if (!d.rest) d.yaw += dt * 0.6;
      const sxy = d.scale * (1 + (1 - d.squash) * 0.5), sz = d.scale * d.squash;
      if (d.model) {
        const m = Cesium.Matrix4.multiply(d.enu, Cesium.Matrix4.fromTranslation(new C3(0, 0, d.z)), new Cesium.Matrix4());
        Cesium.Matrix4.multiply(m, Cesium.Matrix4.fromRotation(Cesium.Matrix3.fromRotationZ(d.yaw)), m);
        Cesium.Matrix4.multiply(m, Cesium.Matrix4.fromScale(new C3(sxy, sxy, sz)), m);
        d.model.modelMatrix = m;
      } else if (d.bb) d.bb.position = Cesium.Matrix4.multiplyByPoint(d.enu, new C3(0, 0, d.z), new C3());
    }
  }

  // ======================================================================= frame
  /** Billboard with a shared texture: a canvas passed as `image` would be copied into the atlas once per billboard. */
  private bb(col, id, opts) {
    const b = (col || this.cols[id]).add(opts);
    b.setImage(id, { puff: this.puffTex, glow: this.glowTex, jet: this.jetTex, ufo: this.ufoTex, person: this.personTex, chunk: this.chunkTex }[id]);
    return b;
  }
  private rm(b) { b._billboardCollection?.remove(b); }

  /** Cesium's translucent billboards write depth: clouds would hide each other and catch clicks/drags. Turn that off. */
  private noDepth(bb) {
    if (bb._rsTranslucent && bb._rsTranslucent.depthMask) {
      bb._rsTranslucent = Cesium.RenderState.fromCache({ depthTest: { enabled: true, func: Cesium.DepthFunction.LESS_OR_EQUAL }, depthMask: false, blending: Cesium.BlendingState.ALPHA_BLEND });
    }
  }

  /** Google Earth feel: the further out you zoom, the more the view tilts back to straight down, so the globe stays centred. */
  private recentering = false;
  private recenter(dt) {
    // Only while the user is zooming OUT with the wheel, and never all the way to -90°:
    // straight down, heading and roll are undefined and reading them back makes the globe spin.
    this.recentering = false;
    if (this.drag) return;
    const cam = this.camera, h = Cesium.Cartographic.fromCartesian(cam.positionWC).height;
    const zoomingOut = performance.now() <= this.zoomOutUntil;
    // 1) the higher you are, the less you may tilt (Google Earth): never tilt the globe off screen
    const allowed = this.maxPitch(h);
    let target = null, rate = 4;
    if (cam.pitch > allowed + 0.003) target = allowed;
    // 2) while zooming out, ease further toward (almost) straight down so the globe stays centred
    if (zoomingOut) {
      const k = smooth(150e3, 2.5e6, h);
      const t2 = lerp(cam.pitch, Cesium.Math.toRadians(-88), k);
      if (k > 0 && t2 < cam.pitch - 0.002) { target = Math.min(target ?? t2, t2); rate = 3 * Math.max(k, 0.3); }
    }
    if (target === null) return;
    this.recentering = true;
    const f = Math.min(1, dt * rate);
    cam.setView({ orientation: { heading: zoomingOut ? (this.recenterHeading ?? cam.heading) : cam.heading, pitch: cam.pitch + (target - cam.pitch) * f, roll: 0 } });
  }
  /** steepest-to-horizon pitch allowed at a given altitude: -1° near the ground, ~-80° when the whole globe is in view */
  private maxPitch(h) {
    return -Cesium.Math.toRadians(lerp(1, 86, smooth(120e3, 6e6, h)));
  }

  private lastHeading = 999;
  private frame(dt) {
    this.applyShake(dt);
    this.handleKeys(dt);
    this.applyZoom(dt);
    this.recenter(dt);
    this.updateSun();
    this.runJobs();
    // tile collision would stop the camera at the ORIGINAL surface, i.e. above a crater: off over sunk ground
    if (this.tileset) this.tileset.enableCollision = !(this.blasts.length && this.deformAt(this.camera.positionWC) < -10);
    const hd = Cesium.Math.toDegrees(this.camera.heading);
    if (Math.abs(hd - this.lastHeading) > 0.5) { this.lastHeading = hd; this.ev.heading(hd); }
    this.noDepth(this.puffs); Object.values(this.cols).forEach((c) => this.noDepth(c));

    this.updateGusts(dt); this.updateFlyers(dt); this.updateBombs(dt); this.updateParticles(dt); this.updateChunks(dt); this.updateDucks(dt); this.updateTurrets(dt); this.updateUfos(dt); this.updatePlanes(dt);
    if (this.hoverPx && this.armed) { const h = this.pickWorld(this.hoverPx); if (h) this.hover = h; this.hoverPx = null; }
    // the cursor rests on a target: start its bare-earth heightmap now, the click will likely land there
    if (this.armed && this.hover && this.tileset && !this.launchMode && !this.lineStart) {
      const hv = this.hoverRest;
      if (!hv || Cesium.Cartesian3.distance(hv.p, this.hover) > 25) this.hoverRest = { p: Cesium.Cartesian3.clone(this.hover), t: performance.now(), done: false };
      else if (!hv.done && performance.now() - hv.t > 350) { hv.done = true; this.prepFor(hv.p, this.tool); }
    }
    this.updatePreview();

    // every cloud of every blast goes into ONE collection, sorted far → near, so overlapping clouds blend correctly
    const items = [];
    let flash = 0, warm = 0;
    for (const D of [...this.blasts]) {
      if (D.done) continue; // a finished scar: nothing left to animate
      this.updateBlast(D, dt);
      this.cloudItems(D, D.dtSim, items);
      flash = Math.max(flash, D.flash); warm = Math.max(warm, D.warm);
      if (D.retired && !D.puffs.length && !this.animating(D)) D.done = true;
    }
    this.FLASH = flash; this.WARM = warm;
    this.schedule();
    items.sort((a, b) => b.d - a.d);
    const pool = this.puffPool;
    while (pool.length < items.length) pool.push(this.bb(this.puffs, 'puff', { sizeInMeters: true, width: 1, height: 1, show: false }));
    const col = new Cesium.Color();
    for (let i = 0; i < pool.length; i++) {
      const b = pool[i], it = items[i];
      if (!it) { if (b.show) b.show = false; continue; }
      b.show = true; b.position = it.pos; b.width = b.height = it.size; b.rotation = it.rot;
      col.red = it.r; col.green = it.g; col.blue = it.b; col.alpha = it.alpha;
      b.color = col;
    }
  }
}
