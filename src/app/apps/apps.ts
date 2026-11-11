import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MINI_APPS } from '../mini-apps/mini-apps';

@Component({
  selector: 'app-apps',
  imports: [RouterLink, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <h1>Apps</h1>
    <div class="grid">
      @for (app of apps; track app.path) {
        <mat-card appearance="outlined">
          <mat-card-header>
            <mat-icon mat-card-avatar>{{ app.icon }}</mat-icon>
            <mat-card-title>{{ app.title }}</mat-card-title>
            <mat-card-subtitle>/{{ app.path }}</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content><p>{{ app.description }}</p></mat-card-content>
          <mat-card-actions align="end">
            <a mat-flat-button [routerLink]="'/' + app.path">Open</a>
          </mat-card-actions>
        </mat-card>
      }
    </div>
  `,
  styles: `
    :host { display: block; max-width: 1080px; margin: 0 auto; padding: 32px 20px; }
    h1 { font: var(--mat-sys-headline-medium); margin: 0 0 24px; }
    .grid { display: grid; gap: 16px; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); }
    mat-icon[mat-card-avatar] { display: grid; place-items: center; font-size: 28px; color: var(--mat-sys-primary); }
    p { color: var(--mat-sys-on-surface-variant); }
  `,
})
export class Apps {
  protected readonly apps = MINI_APPS;
}
