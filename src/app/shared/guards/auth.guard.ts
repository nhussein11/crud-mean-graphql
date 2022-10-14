import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { ErrorSeverity } from '../models/ErrorSeverity';
import { UserWithoutPassword } from '../models/User';
import { HandleMessageService } from '../services/message.service';
import { UserLoggedService } from '../services/user-logged.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private _user!: UserWithoutPassword | null;

  constructor(
    private _router: Router,
    private _handleMessage: HandleMessageService,
    private _userLoggedService: UserLoggedService
  ) {}

  canActivate() {
    this._userLoggedService.userLogged
      .pipe(
        tap((user: UserWithoutPassword | null) => {
          this._user = user || null;
        })
      )
      .subscribe();

    const isUserLogged = this._user !== null ? true : false;

    this.redirect(isUserLogged);
    return isUserLogged;
  }

  private redirect(cookie: boolean) {
    if (!cookie) {
      this._handleMessage.showMessage(
        ErrorSeverity.error,
        'Error',
        'User not logged'
      );
      this._router.navigate(['', 'home']);
    }
  }
}
