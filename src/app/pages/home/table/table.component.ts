import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITableCell} from './ITableCell';
import {PageConfig} from '../../../core/common/ngx-pagination/pagination.config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormComponent} from '../form/form.component';
import {HomeServiceService} from '../../services/home-service.service';
import {finalize} from 'rxjs/operators';
import {NgxSpinnerService} from 'ngx-spinner';
import {ToastrService} from 'ngx-toastr';
import {ViewComponent} from '../view/view.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  @Input() cells: ITableCell[] = [];
  @Input() rows: [] = [];
  @Input() totalRows: number;
  @Input() isLoading = false;
  @Input() pagingMode: string | 'paging' | 'scroll';
  @Output('isLoaded') isLoaded = new EventEmitter<any>();

  page = new PageConfig();

  constructor(
    private cdr: ChangeDetectorRef,
    public modal: NgbModal,
    public toastrService: ToastrService,
    private spinnerService: NgxSpinnerService,
    private homeServiceService: HomeServiceService
  ) {
  }

  ngOnInit(): void {
    if (this.pagingMode === 'scroll') {
      this.page.size = Number.MAX_SAFE_INTEGER;
    }
  }

  ngAfterViewInit(): void {
  }

  //Show Detail
  showDetail(data: any) {
    const modalRef = this.modal.open(ViewComponent, {size: 'lg'});
    modalRef.componentInstance.dataItem = data;
  }

  editItem(data: any) {
    const modalRef = this.modal.open(FormComponent, {size: 'xl'});
    modalRef.componentInstance.dataItem = data;
    modalRef.componentInstance.isAdd = false;
    modalRef.result.then(result => {
      if (result === 'OK') {
        this.isLoaded.emit(true);
      }
    }).catch(() => {
      return;
    });
  }

  deleteItem(data: any) {
    this.spinnerService.show();
    this.homeServiceService.deleteAccount(data).pipe(finalize(() => {
      this.spinnerService.hide();
    })).subscribe(res => {
      console.log(res);
      if (res.body && res.body.code === '00') {
        this.toastrService.success('Xóa thành công');
        this.isLoaded.emit(true);
      }
    });
  }

}
