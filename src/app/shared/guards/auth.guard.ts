import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { ErrorSeverity } from '../models/ErrorSeverity';
import { HandleMessageService } from '../services/message.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private _cookieService: CookieService,
    private _router: Router,
    private _handleMessage: HandleMessageService
  ) {}

  canActivate() {
    const cookie = this._cookieService.check('token');

    this.redirect(cookie);
    return cookie;
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
