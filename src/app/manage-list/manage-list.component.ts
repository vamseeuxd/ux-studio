import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-manage-list',
  templateUrl: './manage-list.component.html',
  styleUrls: ['./manage-list.component.scss']
})
export class ManageListComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() labelField = '';
  @Input() idField = '';

  @Output() dataChange: EventEmitter<any[]> = new EventEmitter<any[]>();

  itemToEdit = '';
  editValue = '';
  newValue = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  getDisplayedLabel = item => {
    if (this.labelField) {
      return item[this.labelField];
    } else {
      return item;
    }
  };

  getItemId = item => {
    if (this.idField) {
      return item[this.idField];
    } else {
      return item;
    }
  };

  getItemById = id => {
    if (this.idField) {
      return this.data.find(o => o[this.idField] == id);
    } else {
      return this.data.map(o => o.toString()).indexOf(id) >= 0 ? id : null;
    }
  };

  onItemEditClick(item: any) {
    this.itemToEdit = this.getItemId(item);
    this.editValue = JSON.parse(JSON.stringify(this.getDisplayedLabel(item)));
  }

  onCancelItemEditClick() {
    this.itemToEdit = '';
    this.editValue = '';
  }

  saveEditedValue(item: any) {
    if (this.labelField) {
      item[this.labelField] = this.editValue;
    } else {
      const index = this.data.indexOf(item);
      this.data[index] = this.editValue;
    }
    this.itemToEdit = '';
    this.editValue = '';
    this.dataChange.emit(this.data);
  }

  deleteItem($ind: number) {
    const isConfirmed = confirm('Are you sure! Do you want to Delete?');
    if (isConfirmed) {
      this.data.splice($ind, 1);
      this.dataChange.emit(this.data);
    }
  }

  saveNewValue() {
    if (this.labelField) {
      const newObject = {[this.labelField]: this.newValue.trim(), [this.idField]: new Date().getTime().toString()}
      this.data.push(newObject);
    } else {
      this.data.push(this.newValue.trim());
    }
    this.newValue = '';
    this.dataChange.emit(this.data);
  }

  get isEditItemValid() {
    return this.editValue.trim().length > 0
  }

  get isNewItemValid() {
    return this.newValue.trim().length > 0
  }

  moveItem(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
    this.dataChange.emit(this.data);
  }
}
