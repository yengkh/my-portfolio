import { Component, HostListener, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { DrawerComponent } from './shared/components/drawer/drawer.component';
import { ThemeService } from './services/toggle-drawer/toggle-drawer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NavBarComponent,
    DrawerComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isScroll: boolean = false;

  readonly themeService = inject(ThemeService);

  onScroll(event: Event): void {
    const target = event.target as HTMLElement;
    this.isScroll = target.scrollTop > 0;
  }
  constructor() {}
  ngOnInit(): void {}
}
