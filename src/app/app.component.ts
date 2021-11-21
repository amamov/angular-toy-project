import { Component } from '@angular/core';

// 컴포넌트는 앱을 구성하는 기본 단위이다.
@Component({
  selector: 'app-root', // 템플릿에 사용될 CSS 셀렉터를 지정한다.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-toy-project';
}
