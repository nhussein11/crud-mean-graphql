import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private _token: string;
  constructor(private _cookieService: CookieService) {
    console.log('Token value: ');
    this._token = this._cookieService.get('token');
  }

  get token(): string {
    return this._token;
  }
  set tokenValue(_tokenValue: string) {
    this._cookieService.set('token', _tokenValue, 1, '/');
  }
}
