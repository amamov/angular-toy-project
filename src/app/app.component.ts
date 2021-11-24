import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent implements OnInit {
  title = 'angular-toy-project';

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    console.log('ngOnDestroy');
  }
}
