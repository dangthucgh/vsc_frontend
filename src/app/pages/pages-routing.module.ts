import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

const appRouterPage: Routes = [
  {
    path: '', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRouterPage)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
