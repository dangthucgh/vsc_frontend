import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'kt-custom-validate-message',
	templateUrl: './custom-validate-message.component.html',
	styleUrls: ['./custom-validate-message.component.scss']
})
export class CustomValidateMessageComponent implements OnInit {
	@Input('required_message') required_message: string = "Đây là trường bắt buộc nhập";
	@Input('pattern_message') pattern_message: string = "Định dạng không đúng";
	@Input('maxDate_message') maxDate_message: string = "Thời gian không hợp lệ";
	@Input('minDate_message') minDate_message: string = "Thời gian không hợp lệ";
	@Input('maxlength_message') maxlength_message: string = "Bạn chỉ được nhập tối đa 256 kí tự";
	@Input('minlength_message') minlength_message: string = "Bạn chỉ được nhập tối đa 256 kí tự";

	constructor() {
	}

	ngOnInit() {
	}

}
