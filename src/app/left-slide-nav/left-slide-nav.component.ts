import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-slide-nav',
  templateUrl: './left-slide-nav.component.html',
  styleUrls: ['./left-slide-nav.component.scss']
})
export class LeftSlideNavComponent implements OnInit {

  @Input() open = false;
  @Input() width = 250;

  data = [
    {
      open: false, label: 'Manage Pages', id: 'menu-1', subMenu: [
        { label: 'Add Page', id: 'submenu-1-1' },
        { label: 'Clone Page', id: 'submenu-1-2' },
        { label: 'Edit Page', id: 'submenu-1-3' },
        { label: 'Delete Page', id: 'submenu-1-4' },
        { label: 'Save as Page Template', id: 'submenu-1-5' },
      ]
    }, {
      open: false, label: 'Manage Services', id: 'menu-1', subMenu: [
        { label: 'Add Services', id: 'submenu-1-1' },
        { label: 'Clone Services', id: 'submenu-1-2' },
        { label: 'Edit Services', id: 'submenu-1-3' },
        { label: 'Delete Services', id: 'submenu-1-4' },
      
      ]
    }, {
      open: false, label: 'Manage Modals', id: 'menu-1', subMenu: [
        { label: 'Add Modal', id: 'submenu-1-1' },
        { label: 'Clone Modal', id: 'submenu-1-2' },
        { label: 'Edit Modal', id: 'submenu-1-4' },
        { label: 'Delete Modal', id: 'submenu-1-3' },
        
      ]
    },  {
      open: false, label: 'Manage Code', id: 'menu-1', subMenu: [
        { label: 'Export Angular Code', id: 'submenu-1-1' },
        { label: 'Export React Code', id: 'submenu-1-2' },
        
      ]
    }, {
      open: false, label: 'Manage Design', id: 'menu-1', subMenu: [
        { label: 'Save Design', id: 'submenu-1-1' },
        { label: 'Import Design', id: 'submenu-1-2' },
        
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
