import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { WriterComponent } from './writer/writer.component';
import { SectionModule } from './section/section.module';

@NgModule({
  declarations: [AppComponent, HelloComponent, WriterComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, SectionModule],
  providers: [],
  bootstrap: [AppComponent], // 처음 실행할 컴포넌트 지정
})
export class AppModule {}
