import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { gql } from 'apollo-angular';

import { LoginService } from 'src/app/components/auth/services/login.service';
import { User } from 'src/app/shared/models/User';

const LOGIN_QUERY = gql`
  query GetUser($email: String!, $password: String!) {
    getUser(email: $email, password: $password) {
      _id
      name
      address
      email
      password
    }
  }
`;

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
  user!: User;

  constructor(
    private _formBuilder: FormBuilder,
    private _loginService: LoginService
  ) {}

  handleLogin() {
    const { email, password } = this.loginForm.value;

    this._loginService
      .handleLoginQuery(LOGIN_QUERY, {
        email,
        password,
      })
      .subscribe((user: User) => {
        this.user = user;
      });
  }
}
