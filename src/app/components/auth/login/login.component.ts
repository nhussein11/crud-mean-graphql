import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { gql } from 'apollo-angular';
import { Subscription } from 'rxjs';
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
})
export class LoginComponent implements OnDestroy {
  public userName!: string;
  private _loginSubscription!: Subscription;

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

    this._loginSubscription = this._authService
      .handleLoginQuery(LOGIN_QUERY, {
        email,
        password,
      })
      .pipe(tap(userName => (this.userName = userName)))
      .subscribe();
  }

  ngOnDestroy(): void {
    this._loginSubscription.unsubscribe();
  }
}
