import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MiniApp } from './mini-apps';

/** Hosts a static mini-app (a page under public/) full-screen. */
@Component({
  selector: 'app-frame-app',
  template: `<iframe [src]="url()" [title]="app().title" allow="fullscreen; clipboard-write" (load)="focus($event)"></iframe>`,
  styles: `
    :host { display: block; height: 100%; }
    iframe { display: block; width: 100%; height: 100%; border: 0; }
  `,
})
export class FrameApp {
  /** bound from the route's `data.app` */
  readonly app = input.required<MiniApp>();
  private readonly sanitizer = inject(DomSanitizer);
  protected readonly url = computed(() => this.sanitizer.bypassSecurityTrustResourceUrl('/' + this.app().src));

  protected focus(e: Event) {
    (e.target as HTMLIFrameElement).contentWindow?.focus();
  }
}
