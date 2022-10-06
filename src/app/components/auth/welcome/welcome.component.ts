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
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent {
  userLogged!: string;
  constructor() {
    // this.userLogged = false;
  }
}
