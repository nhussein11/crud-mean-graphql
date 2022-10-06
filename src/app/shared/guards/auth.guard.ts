import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { ErrorSeverity } from '../models/ErrorSeverity';
import { HandleMessageService } from '../services/message.service';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private _token!: string;

  constructor(
    private _router: Router,
    private _handleMessage: HandleMessageService,
    private _tokenService: TokenService
  ) {}

  canActivate() {
    this._tokenService.token
      .pipe(
        tap((token: string | null) => {
          this._token = token || '';
        })
      )
      .subscribe();
    const isTokenExisting = this._token !== '' ? true : false;
    this.redirect(isTokenExisting);
    return isTokenExisting;
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
