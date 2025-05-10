import { Component } from '@angular/core';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { skillData } from '../../../data/skills.data';

@Component({
  selector: 'app-skills',
  imports: [PageTitleComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skillData = skillData;
}
