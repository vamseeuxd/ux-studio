import {Injectable} from '@angular/core';

export interface IUxStudioApplication {
  applicationName: string;
  tagLine: string;
  logo: string;
  layout: string;
  id?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UxStudioService {
  activeAppDetails = {
    applicationName: '',
    tagLine: '',
    logo: '',
    layout: 'Layout-One',
  }

  selectedAppId = '';

  allApplication: IUxStudioApplication[] = [
    {
      "applicationName": "Test",
      "tagLine": "test",
      "logo": "",
      "layout": "Layout-One",
      "id": "test"
    }
  ];

  addApp(app: IUxStudioApplication) {
    app.id = new Date().getTime().toString();
    this.allApplication.push(app);
  }

  getApp(appId) {
    return this.allApplication.find(a => a.id === appId);
  }

  updateApp(app: IUxStudioApplication) {
    this.allApplication = this.allApplication.map(
      a => {
        if (a.id === app.id) {
          return app
        } else {
          return a;
        }
      }
    )
  }

  deleteApp(app: IUxStudioApplication) {
    const isConfirmed = confirm('Are you sure! Do you want to delete the Application?');
    if (isConfirmed) {
      this.allApplication = this.allApplication.filter(a => a.id != app.id);
    }
  }

  constructor() {
  }
}
