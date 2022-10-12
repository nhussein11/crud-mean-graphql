import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private _tokenSubject$: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  // constructor() {
  //   this.tokenValue = '';
  // }

  get token(): Observable<string> {
    return this._tokenSubject$.asObservable();
  }

  set tokenValue(_tokenValue: string) {
    this._tokenSubject$.next(_tokenValue);
  }
}
