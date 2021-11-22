import { Component, OnInit } from '@angular/core';
import Editor from '@toast-ui/editor';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css'],
})
export class WriterComponent implements OnInit {
  constructor() {}
  set() {
    let editor = new Editor({
      el: document.querySelector('#editor') as HTMLElement,
      height: '500px',
      initialEditType: 'markdown',
      previewStyle: 'vertical',
    });
  }
  ngOnInit(): void {
    this.set(); //컴포넌트 초기화시 그려주기.
  }
}
