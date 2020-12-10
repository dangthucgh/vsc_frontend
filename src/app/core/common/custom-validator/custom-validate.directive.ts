import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
	selector: '[customValidate]'
})
export class CustomValidateDirective {

	constructor(public viewContainerRef: ViewContainerRef) {
	}

}
