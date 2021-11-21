import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

// 컴포넌트는 앱을 구성하는 기본 단위이다.
@Component({
  selector: 'app-hello', // 템플릿에 사용될 CSS 셀렉터를 지정한다. 템플릿에서 이 셀렉터에 해당되는 HTML 엘리먼트마다 컴포넌트 인스턴스가 생성된다.
  templateUrl: './hello.component.html', // 렌더링할 HTML 템플릿을 지정한다.
  styleUrls: ['./hello.component.css'], // 템플릿의 CSS 스타일을 지정한다.
})
export class HelloComponent implements OnInit {
  // 컴포넌트의 동작을 정의하는 코드가 들어간다.

  title = 'angular-toy-project';
  message = 'Hello angular!!';
  helloId = 'this-is-id';
  helloColor = '#bbbbbb';
  canClick = false;
  canEdit = false;

  handleClick() {
    alert('hello world');
    this.canEdit = !this.canEdit;
  }

  handleEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  }

  constructor(private readonly logger: LoggerService) {}

  count = 0;

  onLogMe() {
    this.logger.writeCount(this.count);
    this.count++;
  }

  ngOnInit(): void {}
}

/* 
[템플릿] 
템플릿은 이 컴포넌트가 어떻게 렌더링될지 정의한다.
컴포넌트의 상태가 변경되면 angular가 자동으로 렌더링된 DOM을 갱신한다.
*/
