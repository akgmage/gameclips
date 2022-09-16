import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import IUser from '../models/user.model';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private db: AngularFirestore, private auth: AngularFireAuth) {}

  public async createUser(userData: IUser) {
    if (!userData.password) throw new Error('Password not provided!');
    const userCred = await this.auth.createUserWithEmailAndPassword(
      userData.email as string,
      userData.password as string
    );
    await this.db.collection<IUser>('users').add({
      name: userData.name,
      email: userData.email,
      age: userData.age,
      phoneNumber: userData.phoneNumber,
    });
  }
}
