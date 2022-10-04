import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private _cookiesService: CookieService) {}

  get token(): string {
    return this._cookiesService.get('token');
  }
  set tokenValue(_tokenValue: string) {
    this._cookiesService.set('token', _tokenValue);
  }
}
