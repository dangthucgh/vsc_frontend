import {Component, OnInit} from '@angular/core';
import {HomeServiceService} from '../services/home-service.service';
import {ITableCell} from './table/ITableCell';
import {FormComponent} from './form/form.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';

const sampleGridCells: ITableCell[] = [
  {
    label: 'Account Number',
    align: 'center',
    field: 'accountNumber',
    width: 150
  },
  {
    label: 'Email',
    align: 'center',
    field: 'email',
    width: 150
  },
  {
    label: 'Employer',
    align: 'center',
    field: 'employer',
    width: 150
  },
  {
    label: 'Balance',
    align: 'center',
    field: 'balance',
    width: 140
  }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoading = false;
  gridCells: ITableCell[] = sampleGridCells;
  totalRows = 50;
  dataItemShow: any = [];
  dataItem: any = [];

  filterText: any = '';

  searchOption: any = {
    pageNumber: 0,
    pageSize: 50,
  };

  constructor(
    private homeServiceService: HomeServiceService,
    public modal: NgbModal,
    public toastrService: ToastrService
  ) {
  }

  onLoaded(): void {
    this.fetchData();
  }

  ngOnInit() {
    this.fetchData();
  }

  build(pageNumber?) {
    this.searchOption.pageSize = null;
    this.searchOption.pageNumber = null;
    return new Object({
      pageSize: null,
      pageNumber: null,
    });
  }

  fetchData() {
    this.homeServiceService.getAllListAccount(this.build()).subscribe(res => {
      console.log(res);
      if (res.body.code === '00') {
        this.dataItemShow = res.body.listData;
        this.dataItem = res.body.listData;
      }
    });
  }

  filterTrans() {
    if (this.filterText && this.filterText.trim().length > 0
      && this.dataItem && this.dataItem.length > 0) {
      let filtered = [];
      const inputData = this.filterText.trim().toLocaleLowerCase();
      for (let i = 0; i < this.dataItem.length; i++) {
        const accountNumber = this.dataItem[i].accountNumber ? this.dataItem[i].accountNumber.toString().trim().toLocaleLowerCase() : '';

        if (accountNumber.search(inputData) >= 0 || accountNumber.search(inputData) >= 0) {
          filtered.push(this.dataItem[i]);
        }
      }

      this.dataItemShow = filtered;
    } else {
      this.dataItemShow = this.dataItem;
    }
  }

  createTemplate() {
    const modalRef = this.modal.open(FormComponent, {size: 'xl'});
    modalRef.componentInstance.isAdd = true;
    modalRef.result.then(result => {
      if (result && result === 'OK') {
        this.fetchData();
      }
    }).catch(() => {
      return;
    });
  }

}
