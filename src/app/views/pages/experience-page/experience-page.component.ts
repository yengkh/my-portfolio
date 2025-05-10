import { Component } from '@angular/core';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { experienceData } from '../../../data/experience.data';
import { MatCardModule } from '@angular/material/card';
import { LabelComponent } from '../../components/label/label.component';

@Component({
  selector: 'app-experience-page',
  imports: [PageTitleComponent, MatCardModule, LabelComponent],
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.scss',
})
export class ExperiencePageComponent {
  experienceData = experienceData;
}
