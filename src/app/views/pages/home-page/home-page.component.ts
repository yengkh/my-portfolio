import { Component } from '@angular/core';
import { HeroPageComponent } from '../hero-page/hero-page.component';

@Component({
  selector: 'app-home-page',
  imports: [HeroPageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
