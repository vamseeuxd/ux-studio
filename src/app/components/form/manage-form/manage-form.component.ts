import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-manage-form',
  templateUrl: './manage-form.component.html',
  styleUrls: ['./manage-form.component.scss']
})
export class ManageFormComponent  {

  showLoader = false;
  formsCollection$: AngularFirestoreCollection<any>;
  forms$: Observable<any[]>;
  formToEdit = '';
  formToOpen = '';

  constructor(public firestore: AngularFirestore) {
    this.formsCollection$ = firestore.collection<any>('forms');
    this.forms$ = firestore.collection<any>('forms').valueChanges();
  }

  async saveForm(form: NgForm) {
    this.showLoader = true;
    const id = this.firestore.createId();
    try {
      const result = await this.formsCollection$.doc(id).set({id, ...form.value});
      this.showLoader = false;
      form.resetForm({});
    } catch (e) {
      console.error(e);
      this.showLoader = false;
    }
  }

  async deleteForm(id: string) {
    const isConfirmed = confirm('Are you sure!Do you want to delete?');
    if (isConfirmed) {
      try {
        const result = await this.formsCollection$.doc(id).delete();
        this.showLoader = false;
      } catch (e) {
        console.error(e);
        this.showLoader = false;
      }
    }
  }

  async updateForm(id: string, form: NgForm) {
    const isConfirmed = confirm('Are you sure!Do you want to Update?');
    if (isConfirmed) {
      try {
        const result = await this.formsCollection$.doc(id).set({id, ...form.value});
        this.showLoader = false;
        form.resetForm({});
        this.formToEdit = '';
      } catch (e) {
        console.error(e);
        this.showLoader = false;
      }
    }
  }

}
