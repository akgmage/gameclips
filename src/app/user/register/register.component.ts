import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import IUser from 'src/app/models/user.model';
import { RegisterValidators } from '../validators/register-validators';
import { Emailtaken } from '../validators/emailtaken';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  // inject the service
  constructor(private auth: AuthService, private emailTaken: Emailtaken) {}

  inSubmission = false;
  showAlert = false;
  alertMsg = 'Please wait! your account is being created.';
  alertColor = 'blue';
  registerForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl(
        '',
        [Validators.required, Validators.email],
        [this.emailTaken.validate]
      ),
      age: new FormControl<number | null>(null, [
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
    },
    [RegisterValidators.match('password', 'confirmPassword')]
  );
  async register() {
    this.inSubmission = true;
    this.showAlert = true;
    this.alertMsg = 'Please wait! your account is being created.';
    this.alertColor = 'blue';

    try {
      await this.auth.createUser(this.registerForm.value as IUser);
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
