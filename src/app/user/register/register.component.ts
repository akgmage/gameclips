import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // inject the service
  constructor(private auth: AngularFireAuth, private db: AngularFirestore) {}

  inSubmission = false;
  showAlert = false;
  alertMsg = 'Please wait! your account is being created.';
  alertColor = 'blue';
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [
      Validators.required,
      Validators.min(18),
      Validators.max(120),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
      ),
    ]),
    confirmPassword: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(13),
      Validators.max(13),
    ]),
  });
  async register() {
    this.inSubmission = true;
    this.showAlert = true;
    this.alertMsg = 'Please wait! your account is being created.';
    this.alertColor = 'blue';
    const { email, password } = this.registerForm.value;
    try {
      const userCred = await this.auth.createUserWithEmailAndPassword(
        email as string,
        password as string
      );
      console.log(userCred);
    } catch (e) {
      console.error(e);
      this.alertMsg = 'Please try again later';
      this.alertColor = 'red';
      this.inSubmission = false;
      return;
    }
    this.alertMsg = 'Account created successfully';
    this.alertColor = 'green';
  }
}
