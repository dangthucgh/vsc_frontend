import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesRoutingModule} from './pages-routing.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgxPaginationModule} from '../core/common/ngx-pagination/ngx-pagination.module';
import { TableComponent } from './home/table/table.component';
import { FormComponent } from './home/form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxSpinnerModule} from 'ngx-spinner';
import {CustomValidatorModule} from '../core/common/custom-validator/custom-validator.module';
import { ViewComponent } from './home/view/view.component';

@NgModule({
    imports: [
        CommonModule,
        PagesRoutingModule,
        RouterModule,
        FormsModule,
        NgSelectModule,
        HttpClientModule,
        NgxPaginationModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        CustomValidatorModule,
    ],
  declarations: [
    HomeComponent,
    PagenotfoundComponent,
    TableComponent,
    FormComponent,
    ViewComponent,
  ],
  providers: [],
})
export class PagesModule {
}
