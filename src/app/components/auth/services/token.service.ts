import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private _token!: string;
  get token(): string {
    return this._token;
  }
  set tokenValue(_tokenValue: string) {
    this._token = _tokenValue;
  }
}
