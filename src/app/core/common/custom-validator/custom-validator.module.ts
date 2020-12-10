import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomValidatorComponent} from './custom-validator.component';
import {CustomValidateDirective} from './custom-validate.directive';
import {CustomValidateMessageComponent} from './custom-validate-message/custom-validate-message.component';

@NgModule({
	declarations: [CustomValidatorComponent, CustomValidateDirective, CustomValidateMessageComponent],
	exports: [CustomValidateMessageComponent, CustomValidatorComponent],
	imports: [
		CommonModule
	]
})
export class CustomValidatorModule {
}
