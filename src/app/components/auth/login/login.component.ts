import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup = this._formBuilder.group(
    {
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    },
    { updateOn: 'blur' }
  );

  constructor(private _formBuilder: FormBuilder) {}

  handleLogin() {
    const {email, password} = this.loginForm.value;
    console.log(email, password);
  }
}
