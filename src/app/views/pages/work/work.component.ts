import { Component, OnInit } from '@angular/core';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LabelComponent } from '../../components/label/label.component';
import { workData } from '../../../data/work.data';
import { WorkType } from '../../../types/work.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work',
  imports: [
    PageTitleComponent,
    MatCardModule,
    MatCardModule,
    MatIconModule,
    LabelComponent,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent implements OnInit {
  workData: WorkType[] = workData;
  constructor() {}

  ngOnInit(): void {}
}
