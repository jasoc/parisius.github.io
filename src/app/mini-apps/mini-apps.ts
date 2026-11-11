import { Type } from '@angular/core';

/**
 * A mini-app lives at https://www.parisius.dev/<path>.
 *
 * Two kinds:
 *  - `src`: a self-contained static page under `public/` (any framework or none),
 *    shown full-screen in an iframe below the toolbar.
 *  - `load`: a lazily loaded Angular standalone component.
 *
 * To add one: append an entry here. Routes, the toolbar menu and the /apps gallery
 * are generated from this list.
 */
export interface MiniApp {
  path: string;
  title: string;
  description: string;
  /** Material Symbols icon name */
  icon: string;
  src?: string;
  load?: () => Promise<Type<unknown>>;
}

export const MINI_APPS: MiniApp[] = [
  {
    path: 'nuke-sim',
    title: 'Nuke Sim 3D',
    description:
      'Drop a nuclear weapon anywhere on a photorealistic 3D globe and watch the blast radii and the mushroom cloud, to scale.',
    icon: 'crisis_alert',
    src: 'mini/nuke-sim/index.html',
  },
  {
    path: 'page-tester',
    title: 'Page Tester',
    description: 'A live terminal log of everything your browser lets a page see you do: moves, clicks, keys, scrolls, copy/paste, drops, focus…',
    icon: 'terminal',
    load: () => import('../page-tester/page-tester').then((m) => m.PageTester),
  },
  {
    path: 'pong',
    title: 'Pong',
    description: 'Two players, one keyboard. W/S on the left, arrow keys on the right. First to 7.',
    icon: 'sports_esports',
    load: () => import('../pong/pong').then((m) => m.Pong),
  },
];
