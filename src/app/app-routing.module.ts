import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';

const appRouters: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouters)
  ]
})
export class AppRoutingModule {
}
