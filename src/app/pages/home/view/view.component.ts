import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  dataItem: any = null;

  constructor(
    private activeModal: NgbActiveModal
  ) {
  }

  ngOnInit(): void {
  }

  close() {
    this.activeModal.dismiss('close');
  }

}
