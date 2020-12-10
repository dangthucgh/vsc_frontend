import {
    AfterViewInit,
    Component,
    ContentChild,
    EmbeddedViewRef,
    Input,
    OnInit,
    TemplateRef,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import {FormControl} from "@angular/forms";
import {CustomValidateDirective} from "./custom-validate.directive";
import {CustomValidateMessageComponent} from "./custom-validate-message/custom-validate-message.component";

@Component({
    selector: 'kt-custom-validator',
    templateUrl: './custom-validator.component.html',
    styleUrls: ['./custom-validator.component.scss']
})
export class CustomValidatorComponent implements OnInit, AfterViewInit {
    @Input('formInput') formControl: FormControl;

    @Input('touched') set touched(value: boolean) {
        this._touched = value;
        if (value) {
            this.validateForm();
        }
    };

    _touched = false;

    @Input('submitted') set submitted(value: boolean) {
        this._submitted = value;
        if (value) {
            this.validateForm();
        }
    };

    _submitted = false;

    @ViewChild(CustomValidateDirective, {static: true}) customValidateDirective: CustomValidateDirective;
    @ViewChild('defaultTemplate', {static: true}) defaultTemplate: TemplateRef<any>;
    @ContentChild('template', {static: true}) template: TemplateRef<any>;
    @ContentChild(CustomValidateMessageComponent, {static: true}) customValidateMessageComponent: CustomValidateMessageComponent;
    viewContainerRef: ViewContainerRef;
    embeddedViewRef: EmbeddedViewRef<any>;
    messages: CustomValidateMessageComponent;
    message: string;

    constructor() {
    }

    ngOnInit() {
        this.formControl.valueChanges.subscribe(data => {
            this.validateForm();
        });
        this.formControl.statusChanges.subscribe(status => {
            this.validateForm();
        });
    }

    ngAfterViewInit(): void {
        this.viewContainerRef = this.customValidateDirective.viewContainerRef;
        if (this.customValidateMessageComponent) {
            this.messages = this.customValidateMessageComponent;
        } else {
            this.messages = new CustomValidateMessageComponent();
        }
    }

    validateForm() {
        // console.log(this.formControl);
        if (this.formControl.invalid && (this._touched || this._submitted)) {
            this.viewContainerRef.clear();
            if (this.formControl.errors.required) {
                this.message = this.messages.required_message;
            }
            if (this.formControl.errors.pattern) {
                this.message = this.messages.pattern_message;
            }
            if (this.formControl.errors.maxError) {
                this.message = this.messages.maxDate_message;
            }
            if (this.formControl.errors.minError) {
                this.message = this.messages.minDate_message;
            }
            if (this.formControl.errors.maxlength) {
                this.message = this.messages.maxlength_message;
            }
            this.embeddedViewRef = this.viewContainerRef.createEmbeddedView(this.template ? this.template : this.defaultTemplate, {
                message: this.message
            });
        } else {
            if (this.viewContainerRef) {
                this.viewContainerRef.clear();
            }
        }
    }
}
