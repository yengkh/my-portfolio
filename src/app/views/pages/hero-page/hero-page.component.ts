import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../../services/toggle-drawer/toggle-drawer.service';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { p1, p2, p3, p4, p5, wellcomText } from '../../../data/about.data';
import { PageTitleComponent } from '../../components/page-title/page-title.component';

@Component({
  selector: 'app-hero-page',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    PageTitleComponent,
  ],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.scss',
  providers: [ThemeService],
})
export class HeroPageComponent implements OnInit {
  wellconText = wellcomText;
  p1 = p1;
  p2 = p2;
  p3 = p3;
  p4 = p4;
  p5 = p5;
  readonly myImage1 = 'assets/my-images/my-picture-1.jpg';
  readonly myImage2 = 'assets/my-images/my-picture-2.jpg';

  constructor() {}

  ngOnInit(): void {}
}
