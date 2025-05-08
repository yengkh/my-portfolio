import { Component, OnInit } from '@angular/core';
import { NAV_BAR_TYPE } from '../../../types/nav-bar.type';
import { NavBarService } from '../../../services/nav-bar-service/nav-bar.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent implements OnInit {
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
