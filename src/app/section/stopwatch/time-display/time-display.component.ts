import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css'],
})
export class TimeDisplayComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  @Input() modeAsInputData: string = 'stop';

  min: number = 0;
  sec: number = 0;
  ms: number = 0;

  timeInterval = setInterval(() => {}, 0);

  timeStart() {
    this.timeStop();
    this.timeInterval = setInterval(() => {
      this.ms++;
    }, 10);
  }

  timeStop() {
    clearInterval(this.timeInterval);
  }

  timeReset() {
    this.timeStop();
    this.ms = 0;
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (propName === 'modeAsInputData') {
        const currentMode: string = changes[propName].currentValue;
        if (currentMode === 'start') this.timeStart();
        else if (currentMode === 'stop') this.timeStop();
        else if (currentMode === 'reset') this.timeReset();
      }
    }
  }
}
