import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { interval, map, pipe } from 'rxjs';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit {
  currentTime: string = this.getCurrentTime();

  constructor(private readonly pageToggleService: PageToggleService) {
    interval(1000)
      .pipe(
        map(() => {
          return this.getCurrentTime();
        })
      )
      .subscribe((data) => {
        this.currentTime = data;
      });
  }

  ngOnInit(): void {}

  routingCount: number = this.pageToggleService.routingCount;

  getCurrentTime() {
    return moment().format('YYYY-MM-DD HH:mm:ss');
  }

  goStopwatch() {
    this.pageToggleService.goPage('stopwatch');
  }
}
