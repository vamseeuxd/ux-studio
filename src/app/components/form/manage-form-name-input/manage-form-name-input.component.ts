import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-manage-form-name-input',
  templateUrl: './manage-form-name-input.component.html',
  styleUrls: ['./manage-form-name-input.component.scss']
})
export class ManageFormNameInputComponent implements OnInit {
  @Input() isEdit = false;
  @Input() formToEdit = '';
  @Input() form: { name: string, id: string } = {name: '', id: ''};
  @Output() formToEditChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() updateForm: EventEmitter<{ id: string; form: NgForm }> = new EventEmitter<{ id: string; form: NgForm }>();
  @Output() addForm: EventEmitter<{ form: NgForm }> = new EventEmitter<{ form: NgForm }>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onUpdateForm(id: string, form: NgForm) {
    if (form.valid) {
      this.updateForm.emit({id, form});
    }
  }

  onAddForm(form: NgForm) {
    if (form.valid) {
      this.addForm.emit({form});
    }
  }
}
