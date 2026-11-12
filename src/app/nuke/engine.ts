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

  private blasts = []; private nextSlot = 0;
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
  private actx = null; private master = null; private noiseBuf = null; private lastSmallSound = 0;
  private geocoder;

  constructor(container: HTMLElement, tool: Tool, ev: EngineEvents) {
    this.ev = ev; this.tool = tool;
    const viewer = (this.viewer = new Cesium.Viewer(container, {
      baseLayer: false, geocoder: false, animation: false, timeline: false, baseLayerPicker: false, homeButton: false,
      sceneModePicker: false, navigationHelpButton: false, fullscreenButton: false, infoBox: false,
      selectionIndicator: false, msaaSamples: 4,
    }));
    viewer.useBrowserRecommendedResolution = false;
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
    this.cols = { puff: col(), glow: col(), jet: col(), misc: col() };
    this.setupControls();
    this.loadGoogle();

    let last = performance.now();
    const onPre = () => {
      const now = performance.now(), dt = Math.min(0.1, (now - last) / 1000); last = now;
      this.frame(dt);
    };
    scene.preRender.addEventListener(onPre);
    this.disposers.push(() => scene.preRender.removeEventListener(onPre));
  }

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
      this.scene.primitives.add(ts);
      this.scene.globe.show = false;
      this.tileset = ts;
      if (this.labelsOn) this.setLabels(true);
      this.ev.status('');
    } catch (e) {
      if (this.viewer.isDestroyed()) return;
      this.scene.globe.show = true;
      const busy = String(e.statusCode || e.message || e).includes('429');
      this.ev.status(busy ? `Google 3D occupato (token di prova condiviso), riprovo… (${attempt})` : 'Google 3D non disponibile: serve un token Cesium ion.');
      if (busy && attempt < 20) { const id = setTimeout(() => this.loadGoogle(attempt + 1), 8000); this.disposers.push(() => clearTimeout(id)); }
    }
  }

  private MAX = 16;
  private setupShader() {
    const U = Cesium.UniformType, uniforms = { u_tint: { type: U.VEC3, value: new Cesium.Cartesian3(1, 1, 1) } };
    let calls = '';
    for (let i = 0; i < this.MAX; i++) {
      uniforms['u_c' + i] = { type: U.VEC3, value: new Cesium.Cartesian3() };
      uniforms['u_n' + i] = { type: U.VEC3, value: new Cesium.Cartesian3(0, 0, 1) };
      uniforms['u_a' + i] = { type: U.VEC4, value: new Cesium.Cartesian4() };
      uniforms['u_b' + i] = { type: U.VEC4, value: new Cesium.Cartesian4(0, 0, 0, 1) };
      calls += `fx(p, u_c${i}, u_n${i}, u_a${i}, u_b${i}, material);\n`;
    }
    this.bShader = new Cesium.CustomShader({
      uniforms,
      fragmentShaderText: `
      void fx(vec3 p, vec3 c, vec3 up, vec4 a, vec4 b, inout czm_modelMaterial m) {
        if (a.y <= 0.0) return;
        vec3 d3 = p - c;
        float h = dot(d3, up);
        float d = length(d3 - up * h);
        float lim = min(a.x, a.z);
        float k = (1.0 - smoothstep(lim * 0.85, lim, d)) * mix(0.55, 0.9, 1.0 - smoothstep(a.y * 0.7, a.y * 1.2, d));
        m.diffuse = mix(m.diffuse, vec3(0.1, 0.08, 0.065) * u_tint, k);
        m.diffuse += vec3(1.0, 0.55, 0.2) * b.z / (1.0 + pow(d / b.w, 2.0));
      }
      void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
        vec3 p = fsInput.attributes.positionWC;
        material.diffuse *= u_tint;
        ${calls}
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
  private centerPoint() { return this.pickWorld(new Cesium.Cartesian2(this.cv.clientWidth / 2, this.cv.clientHeight / 2)); }

  private setupControls() {
    const { scene, camera, cv } = this;
    const C3 = Cesium.Cartesian3;
    const ctl = scene.screenSpaceCameraController;
    const T = Cesium.CameraEventType, M = Cesium.KeyboardEventModifier;
    ctl.rotateEventTypes = T.LEFT_DRAG;
    ctl.translateEventTypes = T.LEFT_DRAG;
    ctl.zoomEventTypes = [T.WHEEL, T.PINCH];
    ctl.enableTilt = false;
    ctl.lookEventTypes = [{ eventType: T.LEFT_DRAG, modifier: M.CTRL }];
    ctl.minimumZoomDistance = 15;
    ctl.enableCollisionDetection = true;
    this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

    const on = (t, type, fn, o?) => { t.addEventListener(type, fn, o); this.disposers.push(() => t.removeEventListener(type, fn, o)); };
    on(cv, 'contextmenu', (e) => e.preventDefault());
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
      const P = this.pickWorld(evPos(e)); if (!P) return;
      this.drag = { mode, P, up: Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(P, new C3()), last: evPos(e) };
      try { cv.setPointerCapture(e.pointerId); } catch {}
    });
    on(cv, 'pointermove', (e) => {
      const p = evPos(e);
      if (this.lineStart) this.mouseWorld = this.pickWorld(p);
      const d = this.drag; if (!d) return;
      const dx = p.x - d.last.x, dy = p.y - d.last.y; d.last = p;
      if (d.mode === 'zoom') {
        const dist = C3.distance(camera.positionWC, d.P);
        const nd = Cesium.Math.clamp(dist * Math.exp(-dy * 0.006), 20, 3e7);
        camera.move(C3.normalize(C3.subtract(d.P, camera.positionWC, new C3()), new C3()), dist - nd);
        return;
      }
      if (dx) { const o = orbit(d.P, d.up, -dx * (2 * Math.PI / cv.clientWidth)); camera.setView({ destination: o.pos, orientation: { direction: o.dir, up: o.up } }); }
      if (dy) {
        const right = C3.normalize(C3.cross(camera.directionWC, d.up, new C3()), new C3());
        const o = orbit(d.P, right, -dy * (Math.PI / cv.clientHeight));
        const el = elevation(o.pos, d.P, d.up);
        if (el > Cesium.Math.toRadians(3) && el < Cesium.Math.toRadians(89.5) && C3.dot(o.dir, d.up) < 0.02)
          camera.setView({ destination: o.pos, orientation: { direction: o.dir, up: o.up } });
      }
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
      if (k === 'n' || k === 'r') this.northUp();
      if (k === 'u' || k === 'r') this.topDown();
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
  topDown() { this.flyAround(this.camera.heading, -Cesium.Math.PI_OVER_TWO); }

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
        camera.lookAt(t, new Cesium.HeadingPitchRange(camera.heading + dh, Cesium.Math.clamp(camera.pitch + dp, -Cesium.Math.PI_OVER_TWO, -0.02), C3.distance(camera.positionWC, t)));
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
  setTool(t: Tool) { this.tool = t; this.cancelLine(); this.updateHint(); }
  setArmed(v: boolean) { this.armed = v; this.cv.style.cursor = v ? 'crosshair' : ''; if (!v) this.cancelLine(); this.updateHint(); }
  setChain(v: boolean) { this.chain = v; }
  setSound(v: boolean) { this.soundOn = v; if (v) this.audio(); }
  setRings(v: boolean) {
    this.showRings = v;
    for (const D of this.blasts) { D.entities.forEach((e) => (e.show = v)); D.groundMat.uniforms.rings = v ? 1 : 0; }
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
  setSunHour(h: number) { this.sunHour = h; }

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
    this.flyers.forEach((f) => { this.rm(f.head); f.entity && this.viewer.entities.remove(f.entity); }); this.flyers = [];
    this.particles.forEach((p) => this.rm(p.b)); this.particles = [];
    this.ducks.forEach((d) => { d.model && this.scene.primitives.remove(d.model); d.bb && this.rm(d.bb); }); this.ducks = [];
    this.turrets.forEach((t) => this.viewer.entities.remove(t.entity)); this.turrets = [];
    this.bombs.forEach((b) => this.rm(b.b)); this.bombs = [];
    if (this.base) { this.viewer.entities.remove(this.base.entity); this.base = null; }
    this.cancelLine();
    this.FLASH = this.WARM = 0;
    this.updateHint();
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
    if (!this.armed) return this.ev.hint('Premi D o DROP, poi clicca sulla mappa');
    if (k === 'icbm' || k === 'cruise') return this.ev.hint(this.base ? 'Clicca il bersaglio · Alt+clic sposta la base' : 'Clicca dove mettere la base di lancio');
    if (k === 'railgun') return this.ev.hint(`Clicca per piazzare una torretta (${this.turrets.length}/4)`);
    if (k === 'carpet') return this.ev.hint(this.lineStart ? 'Clicca la fine della linea' : 'Clicca l’inizio della linea di bombardamento');
    this.ev.hint('Clicca sulla mappa · Esc per uscire');
  }

  private act(p, alt) {
    const w = this.tool;
    this.audio();
    switch (w.kind) {
      case 'duck': return this.dropDuck(p);
      case 'asteroid': case 'rod': return this.fireFromSky(p, w);
      case 'icbm': case 'cruise':
        if (!this.base || alt) return this.setBase(p);
        return w.kind === 'icbm' ? this.fireIcbm(p, w) : this.fireCruise(p, w);
      case 'railgun': return this.placeTurret(p);
      case 'carpet':
        if (!this.lineStart) return this.startLine(p);
        { const a = this.lineStart; this.cancelLine(); this.updateHint(); return this.carpetBomb(a, p, w); }
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
    const c = Cesium.Cartographic.fromCartesian(this.camera.positionWC);
    const lon = Cesium.Math.toDegrees(c.longitude), lat = c.latitude;
    const d = new Date(); d.setUTCHours(0, 0, 0, 0);
    this.viewer.clock.currentTime = Cesium.JulianDate.fromDate(new Date(d.getTime() + (this.sunHour - lon / 15) * 3600e3));
    const doy = Math.floor((d.getTime() - Date.UTC(d.getUTCFullYear(), 0, 0)) / 864e5);
    const decl = Cesium.Math.toRadians(-23.44 * Math.cos((2 * Math.PI / 365) * (doy + 10)));
    const H = Cesium.Math.toRadians((this.sunHour - 12) * 15);
    const sinEl = Math.sin(lat) * Math.sin(decl) + Math.cos(lat) * Math.cos(decl) * Math.cos(H);
    const day = smooth(-0.12, 0.12, sinEl);
    const golden = day * (1 - smooth(0.05, 0.4, sinEl));
    const night = [0.11, 0.14, 0.24];
    const t = [0, 1, 2].map((i) => lerp(night[i], 1, day) * lerp(1, [1.14, 0.86, 0.66][i], golden));
    this.day = day; this.tint = t; this.golden = golden;
    this.bShader.setUniform('u_tint', new Cesium.Cartesian3(t[0], t[1], t[2]));
  }

  // ======================================================================= blasts
  private setSlot(slot, D) {
    const s = this.bShader;
    s.setUniform('u_c' + slot, D ? D.groundPos : new Cesium.Cartesian3());
    s.setUniform('u_n' + slot, D ? D.up : new Cesium.Cartesian3(0, 0, 1));
    s.setUniform('u_a' + slot, D ? new Cesium.Cartesian4(D.shock, D.E.r20, D.E.r5, D.E.r1) : new Cesium.Cartesian4());
    s.setUniform('u_b' + slot, D ? new Cesium.Cartesian4(D.E.rth, D.burn, D.glowB, D.E.Rfb * 3 + D.E.hob) : new Cesium.Cartesian4(0, 0, 0, 1));
  }
  private removeBlast(D) {
    this.scene.primitives.remove(D.ground);
    D.entities.forEach((e) => this.viewer.entities.remove(e));
    this.setSlot(D.slot, null);
    this.blasts = this.blasts.filter((b) => b !== D);
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
    return P;
  }

  detonate(picked, w, opts: any = {}) {
    const C3 = Cesium.Cartesian3;
    const groundPos = C3.clone(picked);
    const E = effects(w.W, w.air, w.hob);
    if (this.blasts.length >= this.MAX) this.removeBlast(this.blasts[0]);
    let slot = this.nextSlot; while (this.blasts.some((b) => b.slot === slot)) slot = (slot + 1) % this.MAX;
    this.nextSlot = (slot + 1) % this.MAX;
    const enu = Cesium.Transforms.eastNorthUpToFixedFrame(groundPos);
    const local = (x, y, z, out?) => Cesium.Matrix4.multiplyByPoint(enu, C3.fromElements(x, y, z, out || new C3()), out || new C3());
    const gen = opts.gen || 0;
    const D: any = {
      E, w, slot, groundPos, enu, local, t: 0, real: 0, shock: 0, burn: 0, glowB: 0, entities: [], rings: {},
      up: Cesium.Ellipsoid.WGS84.geodeticSurfaceNormal(groundPos, new C3()),
      puffs: this.makePuffs(E, gen ? 0.55 : 1), heard: false, gen, children: [],
    };
    D.root = opts.root || D;
    D.maxR = E.r1 * 1.15;
    D.groundMat = new Cesium.Material({
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
    D.ground = this.scene.primitives.add(new Cesium.GroundPrimitive({
      geometryInstances: new Cesium.GeometryInstance({ geometry: new Cesium.EllipseGeometry({ center: groundPos, semiMajorAxis: D.maxR, semiMinorAxis: D.maxR }) }),
      appearance: new Cesium.MaterialAppearance({ material: D.groundMat, translucent: true, flat: true }),
      asynchronous: false,
    }));
    this.blasts.push(D);
    this.setSlot(slot, D);

    if (this.chain && gen < 2) {
      for (let i = 0, n = gen === 0 ? 3 : 2; i < n; i++)
        D.children.push({ dist: E.r5 * (1.3 + Math.random() * 1.4), a: Math.random() * Math.PI * 2, W: w.W * (0.35 + Math.random() * 0.3) });
    }

    const s = this.stats;
    s.count++; s.area += Math.PI * (E.r5 / 1000) ** 2; s.cloud = Math.max(s.cloud, E.H);
    this.ev.stats({ ...s });
    const u = (id) => this.ev.unlock(id);
    u('first');
    if (E.H > 8848) u('everest');
    if (E.H >= 99000) u('karman');
    if (['tsar', 'dino', 'rod'].includes(w.id)) u(w.id);
    if (this.day < 0.2) u('night');
    else if (this.golden > 0.5) u('sunset');
    if (this.blasts.length >= 6) u('six');
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
    D.entities.push(this.viewer.entities.add({ show: this.showRings, polyline: { positions: pts, clampToGround: true, width: 2.5, material: Cesium.Color.fromCssColorString(color).withAlpha(0.9) } }));
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
    const tn = this.tint.map((x, i) => Math.max(x, moon[i]));
    const smoke = [lerp(0.62, 0.95, sm) * tn[0], lerp(0.42, 0.93, sm) * tn[1], lerp(0.30, 0.91, sm) * tn[2]];
    const capBot = G.zc - G.thick / 2;
    const camPos = this.camera.positionWC;
    const fadeIn = smooth(0, 0.03, t);
    const night = 1 - this.day;
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
      if (size < 0.5 || alpha <= 0.005) continue;
      const pos = D.local(x, y, z, new Cesium.Cartesian3());
      const k = clamp01(heat * glow), o = under * glow2 * (0.6 + 0.6 * night), v = 0.95 + 0.1 * p.r4;
      items.push({
        pos, d: Cesium.Cartesian3.distanceSquared(pos, camPos), alpha, size, rot: p.rot,
        r: Math.min(1, (lerp(base[0] * shade, fc[0], k) + o) * v), g: Math.min(1, (lerp(base[1] * shade, fc[1], k) + o * 0.45) * v), b: Math.min(1, (lerp(base[2] * shade, fc[2], k) + o * 0.12) * v),
      });
    }
  }

  private updateBlast(D, dt) {
    const E = D.E;
    D.real += dt;
    const k = D.t > E.Trise * 1.3 ? 1 : 1 + 11 * smooth(0.8, 4.5, D.real);
    const dtSim = D.t > E.Trise * 3 ? 0 : dt * k;
    D.t += dtSim;
    const t = D.t;
    if (D.shock < D.maxR * 1.2) D.shock += 340 * E.shockBoost * (1 + (2.5 * E.Rfb) / Math.max(D.shock, E.Rfb)) * dtSim;
    D.dtSim = dtSim;
    const glow = Math.exp(-t / E.tglow), night = 1 - this.day;
    D.flash = t < 0.04 ? 1 : 0.95 * Math.exp(-(t - 0.04) / (0.12 + 0.35 * E.tmax));
    D.warm = 0.6 * glow * (1 + night);
    D.burn = smooth(0, E.tmax, t); D.glowB = 1.6 * glow * (1 + 1.5 * night);
    this.setSlot(D.slot, D);
    const u = D.groundMat.uniforms;
    u.shock = D.shock / D.maxR; u.glow = Math.min(0.9, 1.2 * glow); u.burn = smooth(0, E.tmax * 2, t); u.crv = smooth(E.tmax * 0.5, E.tmax * 3 + 1, t);
    this.addRing(D, 'fb', E.Rfb, '#ffd84a');
    if (t > E.tmax) { this.addRing(D, 'rad', E.rrad, '#55dd66'); this.addRing(D, 'th', E.rth, '#ffb84d'); }
    if (D.shock > E.r20) this.addRing(D, 'p20', E.r20, '#ff3030');
    if (D.shock > E.r5) this.addRing(D, 'p5', E.r5, '#ff8a2a');
    if (D.shock > E.r1) this.addRing(D, 'p1', E.r1, '#7fb2ff');

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
      let h; try { h = this.scene.sampleHeight(carto); } catch {}
      carto.height = h ?? Cesium.Cartographic.fromCartesian(D.groundPos).height;
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
      p.b.width = p.b.height = lerp(p.s0, p.s1, Math.sqrt(f));
      const dk = p.lit ? [1, 1, 1] : tn;
      const cf = p.lit ? f : 1 - Math.pow(1 - f, 4); // fire colour fades to smoke quickly
      p.b.color = new Cesium.Color(lerp(p.c0[0], p.c1[0] * dk[0], cf), lerp(p.c0[1], p.c1[1] * dk[1], cf), lerp(p.c0[2], p.c1[2] * dk[2], cf), p.a0 * (1 - f) * Math.min(1, p.age * 8));
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
    const dist = C3.distance(this.camera.positionWC, pos);
    if (dist < 2000 * scale) this.addShake(0.001 * scale * (1 - dist / (2000 * scale)));
  }

  private groundAt(carto, fallbackH) {
    let h; try { h = this.scene.sampleHeight(carto); } catch {}
    carto.height = h ?? fallbackH;
    return Cesium.Cartographic.toCartesian(carto);
  }

  // ---- from the sky ----
  private fireFromSky(groundPos, w) {
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

  // ---- missiles ----
  private setBase(pos) {
    if (this.base) this.viewer.entities.remove(this.base.entity);
    const gold = Cesium.Color.fromCssColorString('#ffcf4a');
    this.base = {
      pos: Cesium.Cartesian3.clone(pos),
      entity: this.viewer.entities.add({
        position: pos,
        point: { pixelSize: 11, color: gold, outlineColor: Cesium.Color.BLACK, outlineWidth: 2, disableDepthTestDistance: Number.POSITIVE_INFINITY },
        label: { text: 'BASE', font: '600 12px Roboto, system-ui', pixelOffset: new Cesium.Cartesian2(0, -18), fillColor: gold, outlineColor: Cesium.Color.BLACK, outlineWidth: 3, style: Cesium.LabelStyle.FILL_AND_OUTLINE, disableDepthTestDistance: Number.POSITIVE_INFINITY },
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
  private fireIcbm(target, w) {
    const { path, dist } = this.geoPath(this.base.pos, target, (s, d) => (Math.min(1200e3, d * 0.22) + 15e3) * 4 * s * (1 - s));
    const pts = []; for (let i = 0; i <= 120; i++) pts.push(path(i / 120));
    const entity = this.viewer.entities.add({ polyline: { positions: pts, width: 1.5, material: new Cesium.PolylineDashMaterialProperty({ color: Cesium.Color.fromCssColorString('#ffcf4a').withAlpha(0.6), dashLength: 18 }) } });
    const dur = 3 + 5 * Math.min(1, dist / 9e6), vis = Math.max(250, Math.min(120000, dist * 0.012));
    this.whoosh(Math.min(2.5, dur), 1.2);
    this.launchFlyer({
      path, dur, headPixels: 22, headColor: new Cesium.Color(1, 0.75, 0.4, 1), entity,
      trail: { size: vis, life: 4, c0: [1, 0.85, 0.6], c1: [0.85, 0.85, 0.85], every: 0.025, a0: 0.55 },
      onArrive: () => { this.detonate(target, w); if (dist >= 5.5e6) this.ev.unlock('icbm'); },
    });
  }
  private fireCruise(target, w) {
    const { path, dist } = this.geoPath(this.base.pos, target, (s, d) => 300 * smooth(0, Math.min(0.08, 3000 / d), s) * (1 - smooth(1 - Math.min(0.06, 2000 / d), 1, s)));
    const dur = Cesium.Math.clamp(dist / 2500, 2, 12);
    this.whoosh(Math.min(2, dur), 1.6);
    this.launchFlyer({
      path, dur, headPixels: 12, headColor: new Cesium.Color(1, 0.85, 0.55, 1),
      trail: { size: Math.max(40, Math.min(3000, dist * 0.004)), life: 2.5, c0: [1, 0.95, 0.85], c1: [0.8, 0.8, 0.8], every: 0.03, a0: 0.4 },
      onArrive: () => { this.smallBoom(target, 2.2); this.ev.unlock('cruise'); },
    });
  }

  // ---- railgun turrets ----
  private placeTurret(pos) {
    if (this.turrets.length >= 4) { const old = this.turrets.shift(); this.viewer.entities.remove(old.entity); }
    const entity = this.viewer.entities.add({ position: pos, billboard: { image: this.turretTex, width: 34, height: 34, disableDepthTestDistance: Number.POSITIVE_INFINITY } });
    this.turrets.push({ pos: Cesium.Cartesian3.clone(pos), entity, cool: 0.6 });
    this.ev.unlock('railgun');
    this.updateHint();
  }
  private updateTurrets(dt) {
    const C3 = Cesium.Cartesian3;
    for (const t of this.turrets) {
      t.cool -= dt;
      if (t.cool > 0) continue;
      t.cool = 0.9 + Math.random() * 0.8;
      const enu = Cesium.Transforms.eastNorthUpToFixedFrame(t.pos);
      const a = Math.random() * Math.PI * 2, r = 3000 + Math.random() * 12000;
      const carto = Cesium.Cartographic.fromCartesian(Cesium.Matrix4.multiplyByPoint(enu, new C3(Math.cos(a) * r, Math.sin(a) * r, 0), new C3()));
      const target = this.groundAt(carto, Cesium.Cartographic.fromCartesian(t.pos).height);
      const muzzle = Cesium.Matrix4.multiplyByPoint(enu, new C3(0, 0, 30), new C3());
      this.spawn(muzzle, { glow: true, s0: 40, s1: 120, life: 0.2, c0: [0.7, 0.95, 1], c1: [0.4, 0.8, 1], a0: 1 });
      this.zap();
      const { path } = this.geoPath(muzzle, target, (s, d) => d * 0.04 * 4 * s * (1 - s));
      this.launchFlyer({
        path, dur: 0.35 + r / 25000, headPixels: 9, headColor: new Cesium.Color(0.75, 0.97, 1, 1),
        trail: { size: 60, life: 0.8, c0: [0.7, 0.95, 1], c1: [0.6, 0.75, 0.85], every: 0.008, a0: 0.6 },
        onArrive: () => this.smallBoom(target, 1.6),
      });
    }
  }

  // ---- carpet bombing ----
  private startLine(p) {
    this.lineStart = Cesium.Cartesian3.clone(p);
    this.mouseWorld = Cesium.Cartesian3.clone(p);
    this.rubber = this.viewer.entities.add({
      polyline: {
        positions: new Cesium.CallbackProperty(() => [this.lineStart, this.mouseWorld || this.lineStart], false),
        clampToGround: true, width: 3,
        material: new Cesium.PolylineDashMaterialProperty({ color: Cesium.Color.fromCssColorString('#ffcf4a'), dashLength: 16 }),
      },
    });
    this.updateHint();
  }
  private cancelLine() {
    if (this.rubber) this.viewer.entities.remove(this.rubber);
    this.rubber = null; this.lineStart = null;
  }
  private carpetBomb(a, b, w) {
    const C3 = Cesium.Cartesian3;
    const ca = Cesium.Cartographic.fromCartesian(a), cb = Cesium.Cartographic.fromCartesian(b);
    const geo = new Cesium.EllipsoidGeodesic(ca, cb), len = Math.max(200, geo.surfaceDistance);
    const lead = 20000, alt = Math.max(ca.height, cb.height) + 2500, total = len + 2 * lead;
    const at = (d, side) => {
      const s = (d - lead) / len;
      const c = geo.interpolateUsingFraction(Math.max(-lead / len, Math.min(1 + lead / len, s)));
      const pos = Cesium.Cartographic.toCartesian(new Cesium.Cartographic(c.longitude, c.latitude, alt));
      if (!side) return pos;
      const enu = Cesium.Transforms.eastNorthUpToFixedFrame(pos);
      const hd = geo.startHeading + (geo.endHeading - geo.startHeading) * clamp01(s);
      return Cesium.Matrix4.multiplyByPoint(enu, new C3(Math.cos(hd) * side, -Math.sin(hd) * side, 0), new C3());
    };
    const speed = 700, dur = Cesium.Math.clamp(total / speed, 6, 22), spacing = Math.max(150, len / 30);
    this.whoosh(Math.min(4, dur * 0.5), 0.5);
    this.ev.unlock('carpet');
    [-260, 0, 260].forEach((side, j) => {
      let nextDrop = lead + (j % 2) * spacing * 0.5;
      const lastH = Cesium.Cartographic.fromCartesian(b).height;
      this.launchFlyer({
        path: (s) => at(s * total, side), dur, headPixels: 34, image: 'jet', orient: true, headColor: Cesium.Color.WHITE,
        trail: { size: 60, life: 6, c0: [1, 1, 1], c1: [0.9, 0.9, 0.92], every: 0.035, a0: 0.45 },
        onStep: (s, pos) => {
          const d = s * total;
          while (d >= nextDrop && nextDrop <= lead + len) {
            const drop = at(nextDrop, side);
            const g = Cesium.Cartographic.fromCartesian(drop);
            this.dropBomb(drop, this.groundAt(new Cesium.Cartographic(g.longitude, g.latitude, 0), lastH), w);
            nextDrop += spacing;
          }
        },
      });
    });
  }
  private dropBomb(from, to, w) {
    const b = this.bb(null, 'glow', { sizeInMeters: false, width: 5, height: 5, position: from, color: new Cesium.Color(0.15, 0.15, 0.15, 1) });
    this.bombs.push({ b, from, to, t: 0, dur: 1.4 + Math.random() * 0.3, w });
  }
  private updateBombs(dt) {
    for (let i = this.bombs.length - 1; i >= 0; i--) {
      const bm = this.bombs[i]; bm.t += dt;
      const s = Math.min(1, bm.t / bm.dur);
      bm.b.position = Cesium.Cartesian3.lerp(bm.from, bm.to, s * s, new Cesium.Cartesian3());
      if (s >= 1) { this.rm(bm.b); this.bombs.splice(i, 1); this.smallBoom(bm.to, 1.3); }
    }
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
    b.setImage(id, { puff: this.puffTex, glow: this.glowTex, jet: this.jetTex }[id]);
    return b;
  }
  private rm(b) { b._billboardCollection?.remove(b); }

  /** Cesium's translucent billboards write depth: clouds would hide each other and catch clicks/drags. Turn that off. */
  private noDepth(bb) {
    if (bb._rsTranslucent && bb._rsTranslucent.depthMask) {
      bb._rsTranslucent = Cesium.RenderState.fromCache({ depthTest: { enabled: true, func: Cesium.DepthFunction.LESS_OR_EQUAL }, depthMask: false, blending: Cesium.BlendingState.ALPHA_BLEND });
    }
  }

  private frame(dt) {
    this.applyShake(dt);
    this.handleKeys(dt);
    this.updateSun();
    this.ev.heading(Cesium.Math.toDegrees(this.camera.heading));
    this.noDepth(this.puffs); Object.values(this.cols).forEach((c) => this.noDepth(c));

    this.updateFlyers(dt); this.updateBombs(dt); this.updateParticles(dt); this.updateDucks(dt); this.updateTurrets(dt);

    // every cloud of every blast goes into ONE collection, sorted far → near, so overlapping clouds blend correctly
    const items = [];
    let flash = 0, warm = 0;
    for (const D of [...this.blasts]) {
      this.updateBlast(D, dt);
      this.cloudItems(D, D.dtSim, items);
      flash = Math.max(flash, D.flash); warm = Math.max(warm, D.warm);
    }
    this.FLASH = flash; this.WARM = warm;
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
