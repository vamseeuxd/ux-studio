import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {IUxStudioApplication, UxStudioService} from '../services/ux-studio/ux-studio.service';

@Component({
  selector: 'app-app-layout-selector',
  templateUrl: './app-layout-selector.component.html',
  styleUrls: ['./app-layout-selector.component.scss']
})
export class AppLayoutSelectorComponent implements OnInit {

  selectedAppId = '';
  isEdit = false;

  activeAppDetails: IUxStudioApplication = {
    applicationName: '',
    tagLine: '',
    logo: '',
    layout: 'Layout-One',
  };

  selectedLayout = 'Layout-One';

  layouts = [
    {selected: false, name: 'Layout-One', path: './assets/images/layout-icons/layout-1.png', description: ''},
    {selected: false, name: 'Layout-Two', path: './assets/images/layout-icons/layout-2.png', description: ''},
    {selected: false, name: 'Layout-Three', path: './assets/images/layout-icons/layout-3.png', description: ''},
    {selected: false, name: 'Layout-Four', path: './assets/images/layout-icons/layout-4.png', description: ''},
    {selected: false, name: 'Layout-Five', path: './assets/images/layout-icons/layout-5.png', description: ''},
    {selected: false, name: 'Layout-Six', path: './assets/images/layout-icons/layout-6.png', description: ''},
  ];


  title: string;
  closeBtnName: string;
  list: any[] = [];

  constructor(
    public bsModalRef: BsModalRef,
    public uxStudioService: UxStudioService,
  ) {

  }

  ngOnInit() {
    this.getAppDetails();
  }

  saveLayout(value: any) {
    if (this.isEdit) {
      this.uxStudioService.updateApp({...value, id: this.activeAppDetails.id});
    } else {
      this.uxStudioService.addApp(value);
    }
  }

  private getAppDetails() {
    const selectedApp = this.uxStudioService.getApp(this.selectedAppId);
    if (selectedApp) {
      this.activeAppDetails = JSON.parse(JSON.stringify(selectedApp));
    } else {
      this.activeAppDetails = {
        applicationName: '',
        tagLine: '',
        logo: '',
        layout: 'Layout-One',
      };
    }
    this.selectedLayout = JSON.parse(JSON.stringify(this.activeAppDetails.layout));
  }
}
