import { Component, Input } from '@angular/core';
import { NAV_BAR_TYPE } from '../../../types/nav-bar.type';
import { NavBarService } from '../../../services/nav-bar-service/nav-bar.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-drawer',
  imports: [MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent {
  @Input() drawer!: MatDrawer;
  navItems: NAV_BAR_TYPE[] = [];
  activeIndex = 0;

  constructor(private navBarService: NavBarService) {}

  ngOnInit(): void {
    this.navBarService.getNavBarItem().subscribe((item) => {
      this.navItems = item;
    });

    this.navBarService.currentNavIndex$.subscribe((index) => {
      this.activeIndex = index;
    });
  }
  handleChangeNavIndex(index: number): void {
    this.navBarService.setCurrentIndex(index);
  }
}
