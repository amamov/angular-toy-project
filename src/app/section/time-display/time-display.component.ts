import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css'],
})
export class TimeDisplayComponent implements OnInit {
  constructor() {
    setInterval(() => {
      this.test++;
    }, 1000);
  }

  @Input() inputData: number = 0;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  test = 1;
}
