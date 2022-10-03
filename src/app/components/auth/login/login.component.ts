import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { gql } from 'apollo-angular';

import { AuthService } from '../services/auth.service';

const LOGIN_QUERY = gql`
  query GetUser($email: String!, $password: String!) {
    getUser(email: $email, password: $password) {
      token
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

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService
  ) {}

  handleLogin() {
    const { email, password } = this.loginForm.value;

    this._authService.handleLoginQuery(LOGIN_QUERY, {
      email,
      password,
    });
  }
}
