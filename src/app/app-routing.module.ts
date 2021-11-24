import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '', // '/'으로 접속하면,
    redirectTo: 'stopwatch', // '/stopwatch'로 redirect한다.
    pathMatch: 'full', // prefix일 경우 예를들어 '/hhh'에 대해 prefix라면 '/hhh/*'은 모두 '/hhh'에 해당하게 된다.
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
