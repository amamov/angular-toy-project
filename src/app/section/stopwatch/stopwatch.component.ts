import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css'],
})
export class StopwatchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  mode: string = 'stop';
  commandText: string = '';

  startTime(mode: string) {
    this.mode = mode;
  }
}
