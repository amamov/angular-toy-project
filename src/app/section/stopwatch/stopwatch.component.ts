import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css'],
})
export class StopwatchComponent implements OnInit {
  constructor(private readonly pageToggleService: PageToggleService) {}

  ngOnInit(): void {}

  mode: string = 'stop';
  commandText: string = '';

  routingCount: number = this.pageToggleService.routingCount;

  startTime(mode: string) {
    this.mode = mode;
  }

  goClock() {
    this.pageToggleService.goPage('clock');
  }
}
