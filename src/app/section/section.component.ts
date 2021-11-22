import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  currentNumber: number = 0;

  startTime(number: number) {
    console.log('데이터 전달 완료');
    console.log(number);
    this.currentNumber = number;
  }
}
