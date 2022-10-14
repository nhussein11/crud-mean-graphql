import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { gql } from 'apollo-angular';
import { Subscription } from 'rxjs';

import { AuthService } from '../services/auth.service';

const SIGNIN_QUERY = gql`
  query signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      user {
        _id
        name
        email
        address
      }
    }
  }
`;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnDestroy {
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
      .handleLoginQuery(SIGNIN_QUERY, {
        email,
        password,
      })
      .subscribe();
  }

  ngOnDestroy(): void {
    if (this._loginSubscription) {
      this._loginSubscription.unsubscribe();
    }
  }
}
