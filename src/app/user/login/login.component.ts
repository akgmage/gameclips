import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  inSubmission = false;
  showAlert = false;
  alertMsg = "Please wait! You're being logged in.";
  alertColor = 'blue';
  credentials = {
    email: '',
    password: '',
  };
  constructor(private auth: AngularFireAuth) {}

  ngOnInit(): void {}

  async login() {
    try {
      this.inSubmission = true;
      this.showAlert = true;
      this.alertMsg = "Please wait! You're being logged in.";
      this.alertColor = 'blue';
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email,
        this.credentials.password
      );
    } catch (e) {
      console.error(e);
      this.alertMsg = 'Please try again later';
      this.alertColor = 'red';
      this.inSubmission = false;
      return;
    }
    this.alertMsg = 'Login successful';
    this.alertColor = 'green';
  }
}
