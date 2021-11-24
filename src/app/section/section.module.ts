import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from './section.component';
import { StopwatchModule } from './stopwatch/stopwatch.module';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { ClockComponent } from './clock/clock.component';
import { PageToggleService } from '../share/page-toggle.service';

const routes: Routes = [
  {
    path: 'stopwatch', // '/stopwatch'로 요청이 들어오면,
    component: StopwatchComponent, // StopwatchComponent를 렌더링한다.
    // 즉, <router-outlet></router-outlet> -> <app-stopwatch></app-stopwatch>
  },
  {
    path: 'clock',
    component: ClockComponent,
  },
];

@NgModule({
  declarations: [SectionComponent, ClockComponent],
  imports: [CommonModule, StopwatchModule, RouterModule.forChild(routes)],
  providers: [PageToggleService],
  exports: [SectionComponent, RouterModule],
})
export class SectionModule {}
