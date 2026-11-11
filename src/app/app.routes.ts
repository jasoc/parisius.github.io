import { Routes } from '@angular/router';
import { MINI_APPS } from './mini-apps/mini-apps';

const appRoutes: Routes = MINI_APPS.map((app) => ({
  path: app.path,
  title: `${app.title} · parisius.dev`,
  loadComponent: app.load ?? (() => import('./mini-apps/frame-app').then((m) => m.FrameApp)),
  data: { app },
}));

export const routes: Routes = [
  { path: '', title: 'parisius.dev', loadComponent: () => import('./landing/landing').then((m) => m.Landing) },
  { path: 'apps', title: 'Apps · parisius.dev', loadComponent: () => import('./apps/apps').then((m) => m.Apps) },
  ...appRoutes,
  { path: '**', redirectTo: '' },
];
