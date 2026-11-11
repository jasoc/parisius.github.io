# parisius.dev

Personal site: an Angular app (Angular Material) served by GitHub Pages at https://www.parisius.dev.

- `main` holds the Angular sources.
- `.github/workflows/deploy.yml` builds on every push to `main` and pushes the static output to the
  `gh-pages` branch, which GitHub Pages publishes.

## Mini-apps

Each mini-app has its own path (`/nuke-sim`, …). They are listed in
[`src/app/mini-apps/mini-apps.ts`](src/app/mini-apps/mini-apps.ts): routes, the toolbar menu and the
`/apps` gallery are generated from that list.

- Static mini-app: put a self-contained page in `public/mini/<name>/index.html` and add an entry with
  `src: 'mini/<name>/index.html'`. It is shown full-screen in an iframe.
- Angular mini-app: add an entry with `load: () => import('./…').then(m => m.MyComponent)`.

## Develop

```bash
npm ci
npm start        # http://localhost:4200
npm run build    # dist/site/browser
```

Preview exactly what Pages will serve (production build behind nginx, 404.html fallback like Pages):

```bash
docker compose up --build   # http://localhost:8080
```
