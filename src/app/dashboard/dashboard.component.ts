import {Component, OnInit} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {AppLayoutSelectorComponent} from '../app-layout-selector/app-layout-selector.component';
import {IUxStudioApplication, UxStudioService} from '../services/ux-studio/ux-studio.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(
    public uxStudioService: UxStudioService,
    public router:Router,
    private modalService: BsModalService,
  ) {
  }

  ngOnInit(): void {
  }

  showAddApplicationModel(selectedAppId, isEdit, title) {
    const initialState = {
      selectedAppId,
      isEdit,
      title
    };
    this.modalRef = this.modalService.show(AppLayoutSelectorComponent, {
      initialState,
      class: 'modal-lg',
      ignoreBackdropClick: true,
    });
    this.modalRef.content.closeBtnName = 'Close';
  }

  designApplication(app: IUxStudioApplication) {
    this.uxStudioService.selectedAppId = app.id;
    this.router.navigate(['editor']);
  }
}
