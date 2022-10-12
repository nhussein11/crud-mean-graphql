import { Injectable } from '@angular/core';
import { Apollo, ApolloBase, TypedDocumentNode } from 'apollo-angular';
import { BehaviorSubject, Observable } from 'rxjs';

import { UPDATE_PROFILE_MUTATION } from 'src/app/components/auth/profile/profile.component';

import { UserWithoutPassword } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserLoggedService {
  private apollo: ApolloBase;
  private _userSubject$: BehaviorSubject<UserWithoutPassword> =
    new BehaviorSubject<UserWithoutPassword>({} as UserWithoutPassword);

  get userLogged(): Observable<UserWithoutPassword> {
    return this._userSubject$.asObservable();
  }
  set userLoggedValue(user: UserWithoutPassword) {
    this._userSubject$.next(user);
  }

  constructor(private _apollo: Apollo) {
    this.apollo = this._apollo.use('auth');
  }

  public handleUpdateProfileMutation(
    mutation: TypedDocumentNode<unknown, unknown>,
    profileToUpdate: {
      _id: string;
      name: string;
      address: string;
      email: string;
    }
  ) {
    return this.apollo
      .mutate({
        mutation,
        variables: profileToUpdate,
      })
      .subscribe();
  }
}
