import { Injectable, Inject, PLATFORM_ID, inject, signal } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ThemeType } from '../../types/theme.type';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly currentTheme = signal<ThemeType>('light');
  private _themeModeSub = new BehaviorSubject<string>('light');
  checkMode$ = this._themeModeSub.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.setTheme(this.getThemeFromLocalStorage() || 'light');
    if (isPlatformBrowser(platformId)) {
      const storedTheme = this.getThemeFromLocalStorage() ?? 'light';
      this._themeModeSub.next(storedTheme);
    }
  }

  toggleTheme() {
    if (this.currentTheme() === 'light') {
      this.setTheme('dark');
    } else {
      this.setTheme('light');
    }
  }

  setTheme(theme: ThemeType) {
    this.currentTheme.set(theme);
    if (theme === 'dark') {
      this.document.documentElement.classList.add('dark-mode');
    } else {
      this.document.documentElement.classList.remove('dark-mode');
    }

    this.setThemeToLocalStorage(theme);
  }

  setThemeToLocalStorage(theme: ThemeType) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('my-theme', theme);
    }
  }

  getThemeFromLocalStorage() {
    if (isPlatformBrowser(this.platformId)) {
      return (localStorage.getItem('my-theme') as ThemeType) ?? 'light';
    }

    return;
  }
}
