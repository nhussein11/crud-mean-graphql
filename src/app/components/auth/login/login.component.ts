import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { gql } from 'apollo-angular';
import { tap } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

const LOGIN_QUERY = gql`
  query GetUser($email: String!, $password: String!) {
    getUser(email: $email, password: $password) {
      token
      user {
        name
      }
    }
  }
`;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private _userName!: string;
  loginForm: FormGroup = this._formBuilder.group(
    {
      email: ['nico@gmail.com', [Validators.required]],
      password: ['1234', [Validators.required]],
    },
    { updateOn: 'blur' }
  );

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService
  ) {}

  handleLogin() {
    const { email, password } = this.loginForm.value;

    this._authService
      .handleLoginQuery(LOGIN_QUERY, {
        email,
        password,
      })
      .pipe(tap(username => (this._userName = username)))
      .subscribe();
  }
}
