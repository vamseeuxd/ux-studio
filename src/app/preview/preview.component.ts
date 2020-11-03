import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {

  @HostListener('document:mousedown', ['$event'])
  clickout(event) {
    /*if (event.button === 2) {
      this.contextMenu.closeMenu();
    }*/
  }

  @ViewChild(MatMenuTrigger)
  contextMenu: MatMenuTrigger;

  contextMenuPosition = {x: '0px', y: '0px'};

  onContextMenu(event: MouseEvent, item: any) {
    setTimeout(() => {
      event.preventDefault();
      this.contextMenuPosition.x = event.clientX + 'px';
      this.contextMenuPosition.y = event.clientY + 'px';
      this.contextMenu.menuData = {'item': item};
      this.contextMenu.menu.focusFirstItem('mouse');
      this.contextMenu.openMenu();
    }, 50);
  }

}
