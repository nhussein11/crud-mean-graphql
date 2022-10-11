import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { UserWithoutPassword } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserLoggedService {
  private _userSubject$: BehaviorSubject<UserWithoutPassword> =
    new BehaviorSubject<UserWithoutPassword>({} as UserWithoutPassword);

  get userLogged(): Observable<UserWithoutPassword> {
    return this._userSubject$.asObservable();
  }
  set userLoggedValue(user: UserWithoutPassword) {
    this._userSubject$.next(user);
  }
}
