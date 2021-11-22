import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // 현재 컴포넌트에서 부모 컴포넌트로 데이터를 보낼 수 있다. 데이터의 타입도 지정이 가능하다.
  @Output() clickEvent = new EventEmitter<number>();

  handleStartClick(event: MouseEvent) {
    console.log(event);
    // buttons.component -> section.component -> time-display.component
    this.clickEvent.emit(10); // 자식 컴포넌트에서 부모 컴포넌트로 데이터를 전달할 수 있다. 여기서 데이터는 10
  }

  handleStopClick(event: MouseEvent) {}

  handleResetClick(event: MouseEvent) {}
}
