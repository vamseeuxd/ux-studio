import {Component, Input, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {NgForm} from '@angular/forms';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-manage-controller',
  templateUrl: './manage-controller.component.html',
  styleUrls: ['./manage-controller.component.scss']
})
export class ManageControllerComponent {
  formId$: BehaviorSubject<any> = new BehaviorSubject<string>('');
  controls$;
  private _formId = '';
  get formId(): string {
    return this._formId;
  }

  @Input() set formId(value: string) {
    this._formId = value;
    console.log('formId', value);
    this.formId$.next(value);
  }

  showLoader = false;
  controlsCollection$: AngularFirestoreCollection<any>;
  // controls$: Observable<any[]>;
  controlToEdit = '';
  controlToOpen = '';

  constructor(public firestore: AngularFirestore) {
    this.controlsCollection$ = firestore.collection<any>('controls');
    /*this.controls$ = firestore.collection<any>('controls', ref => {
      return ref.where('formId','==','1rQ5rC56fVgmg5d9TVKC')
    }).valueChanges();*/
    this.controls$ = this.formId$.pipe(
      switchMap(formId => {
        return this.firestore.collection('controls', ref => ref.where('formId', '==', formId)).valueChanges();
      })
    );
  }

  async saveControl(form: NgForm) {
    this.showLoader = true;
    const id = this.firestore.createId();
    try {
      const result = await this.controlsCollection$.doc(id).set({id, ...form.value, formId: this._formId});
      this.showLoader = false;
      form.resetForm({});
    } catch (e) {
      console.error(e);
      this.showLoader = false;
    }
  }

  async deleteControl(id: string) {
    const isConfirmed = confirm('Are you sure!Do you want to delete?');
    if (isConfirmed) {
      try {
        const result = await this.controlsCollection$.doc(id).delete();
        this.showLoader = false;
      } catch (e) {
        console.error(e);
        this.showLoader = false;
      }
    }
  }

  async updateControl(id: string, form: NgForm) {
    const isConfirmed = confirm('Are you sure!Do you want to Update?');
    if (isConfirmed) {
      try {
        const result = await this.controlsCollection$.doc(id).set({id, ...form.value, formId: this._formId});
        this.showLoader = false;
        form.resetForm({});
        this.controlToEdit = '';
      } catch (e) {
        console.error(e);
        this.showLoader = false;
      }
    }
  }

}
