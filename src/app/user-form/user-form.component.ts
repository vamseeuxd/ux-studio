import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  showLoader = false;
  usersCollection: AngularFirestoreCollection<IUser>;
  users: Observable<IUser[]>;
  constructor(firestore: AngularFirestore) {
    this.usersCollection = firestore.collection<IUser>('users');
    this.users = firestore.collection<IUser>('users').valueChanges();
  }

  saveData(form: NgForm) {
    this.showLoader = true;
    this.usersCollection.add(form.value).then(success => {
      form.resetForm({});
      this.showLoader = false;
     }, error => { 

     })
  }

}
