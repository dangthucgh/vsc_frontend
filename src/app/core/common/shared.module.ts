import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgxPaginationModule} from './ngx-pagination/ngx-pagination.module';
import {NgxSpinnerModule} from 'ngx-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomValidatorModule} from './custom-validator/custom-validator.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    CustomValidatorModule
  ],
  declarations: [
  ],
  entryComponents: [
  ],
  providers: [
  ],
  exports: [
  ]
})
export class SharedModule {
}
