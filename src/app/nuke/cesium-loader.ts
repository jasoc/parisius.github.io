const BASE = 'https://cdn.jsdelivr.net/npm/cesium@1.146.0/Build/Cesium/';
let loading: Promise<unknown> | null = null;

/** Loads CesiumJS (script + widget CSS) from the CDN once. */
export function loadCesium(): Promise<any> {
  const w = window as any;
  if (w.Cesium) return Promise.resolve(w.Cesium);
  return (loading ??= new Promise((resolve, reject) => {
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = BASE + 'Widgets/widgets.css';
    document.head.appendChild(css);
    const s = document.createElement('script');
    s.src = BASE + 'Cesium.js';
    s.onload = () => resolve(w.Cesium);
    s.onerror = () => { loading = null; reject(new Error('Cesium non caricato')); };
    document.head.appendChild(s);
  }));
}
