import { Component, OnDestroy, OnInit } from '@angular/core';
import { gql } from 'apollo-angular';
import { Subscription } from 'rxjs';

import { UserLoggedService } from 'src/app/shared/services/user-logged.service';

import { AuthService } from '../services/auth.service';

const GET_USER_LOGGED = gql`
  query {
    getUser {
      token
      user {
        _id
        name
        address
        email
      }
    }
  }
`;
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent implements OnInit, OnDestroy {
  public title!: string;
  public iconClass!: string;
  public isUserLogged!: boolean;
  private _userLogged!: Subscription;
  private _authSubscription!: Subscription;

  constructor(
    private _userLoggedService: UserLoggedService,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this._authSubscription = this._authService
      .handleLoginQuery(GET_USER_LOGGED, {})
      .subscribe();

    this._userLogged = this._userLoggedService.userLogged.subscribe(user => {
      if (!user.name) {
        this.title = 'Login';
        this.iconClass = 'bi bi-door-open';
        this.isUserLogged = false;
      } else {
        this.title = 'Welcome ' + user.name;
        this.iconClass = 'bi bi-person-badge';
        this.isUserLogged = true;
      }
    });
  }

  ngOnDestroy(): void {
    this._userLogged.unsubscribe();
    this._authSubscription.unsubscribe();
  }
}
