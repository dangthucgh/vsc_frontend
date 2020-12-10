import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {HomeServiceService} from '../../services/home-service.service';
import {finalize} from 'rxjs/operators';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  editForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    balance: ['', Validators.required],
    age: ['', Validators.required],
    gender: ['M', Validators.required],
    address: ['', Validators.required],
    employer: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')]],
    city: ['', Validators.required],
    state: ['', Validators.required],
  });

  dataItem: any = null;
  isAdd: boolean = false;

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private spinnerService: NgxSpinnerService,
    private homeServiceService: HomeServiceService,
    public toastrService: ToastrService
  ) {
  }

  get f() {
    return this.editForm.controls;
  }

  ngOnInit(): void {
    console.log(this.dataItem);
    this.buildForm();
  }

  buildForm() {
    if (this.dataItem !== null) {
      this.editForm.patchValue({
        firstName: this.dataItem.firstname,
        lastName: this.dataItem.lastname,
        balance: this.dataItem.balance,
        age: this.dataItem.age,
        gender: this.dataItem.gender,
        address: this.dataItem.address,
        employer: this.dataItem.employer,
        email: this.dataItem.email,
        city: this.dataItem.city,
        state: this.dataItem.state,
      });
    } else {
      this.editForm.reset({
        gender: 'M'
      });
    }
  }

  submit() {
    let data = this.converDataToSave();
    if (this.editForm.invalid) {
      return;
    }
    this.spinnerService.show();
    this.homeServiceService.createAccount(data).pipe(finalize(() => {
      this.spinnerService.hide();
    })).subscribe(res => {
      console.log(res);
      if (res.body && res.body.code === '00') {
        this.toastrService.success('Thêm mới thành công');
        this.activeModal.close('OK');
      } else {
        this.toastrService.error(res.body.message, 'Thông báo');
      }
    });
  }

  save() {
    let data = this.converDataToSave();
    this.spinnerService.show();
    this.homeServiceService.updateAccount(data).pipe(finalize(() => {
      this.spinnerService.hide();
    })).subscribe(res => {
      console.log(res);
      if (res.body && res.body.code === '00') {
        this.toastrService.success('Sửa thành công');
        this.activeModal.close('OK');
      } else {
        this.toastrService.error(res.body.message, 'Thông báo');
      }
    });
  }

  converDataToSave() {
    let obj = new Object({
      accountNumber: this.isAdd === false ? this.dataItem.accountNumber : null,
      firstname: this.f.firstName.value,
      lastname: this.f.lastName.value,
      balance: this.f.balance.value,
      age: this.f.age.value,
      gender: this.f.gender.value,
      address: this.f.address.value,
      employer: this.f.employer.value,
      email: this.f.email.value,
      city: this.f.city.value,
      state: this.f.state.value,
    });

    return obj;
  }

  setNumber(event: any) {
    return (event.charCode >= 48 && event.charCode <= 57);
  }

  close() {
    this.activeModal.close('CLOSE');
  }

}
