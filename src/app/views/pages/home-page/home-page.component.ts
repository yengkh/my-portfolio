import { Component } from '@angular/core';
import { HeroPageComponent } from '../hero-page/hero-page.component';
import { SkillsComponent } from '../skills/skills.component';
import { ExperiencePageComponent } from '../experience-page/experience-page.component';
import { WorkComponent } from '../work/work.component';

@Component({
  selector: 'app-home-page',
  imports: [
    HeroPageComponent,
    SkillsComponent,
    ExperiencePageComponent,
    WorkComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
