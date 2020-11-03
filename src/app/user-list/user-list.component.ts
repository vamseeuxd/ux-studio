import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IUser } from '../user-form/user-form.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent{

  usersCollection: AngularFirestoreCollection<IUser>;
  users: Observable<IUser[]>;
  constructor(firestore: AngularFirestore){
    this.usersCollection = firestore.collection<IUser>('users');
    this.users = firestore.collection<IUser>('users').valueChanges();
  }

}
