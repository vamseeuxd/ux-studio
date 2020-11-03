import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-manage-controller-name-input',
  templateUrl: './manage-controller-name-input.component.html',
  styleUrls: ['./manage-controller-name-input.component.scss']
})
export class ManageControllerNameInputComponent implements OnInit {
  @Input() isEdit = false;
  @Input() controlToEdit = '';
  @Input() control: { name: string, id: string } = {name: '', id: ''};
  @Output() controlToEditChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() updateControl: EventEmitter<{ id: string; form: NgForm }> = new EventEmitter<{ id: string; form: NgForm }>();
  @Output() addControl: EventEmitter<{ form: NgForm }> = new EventEmitter<{ form: NgForm }>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onUpdateControl(id: string, form: NgForm) {
    if (form.valid) {
      this.updateControl.emit({id, form});
    }
  }

  onAddControl(form: NgForm) {
    if (form.valid) {
      this.addControl.emit({form});
    }
  }
}

