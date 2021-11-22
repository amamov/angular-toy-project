import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  mode: string = 'stop';
  commandText: string = '';

  startTime(mode: string) {
    this.mode = mode;
  }
}
