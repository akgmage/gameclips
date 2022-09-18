import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable()
export class Emailtaken {
  constructor(private aith: AngularFireAuth) {}
}
