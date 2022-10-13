import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, TypedDocumentNode } from 'apollo-angular';
import { take, tap } from 'rxjs';

import { LoginApiResponse } from 'src/app/shared/models/User';
import { UserLoggedService } from 'src/app/shared/services/user-logged.service';

import { TokenService } from '../../../shared/services/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _apollo: Apollo,
    private _tokenService: TokenService,
    private _userLoggedService: UserLoggedService
  ) {}

  public handleLoginQuery(
    query: TypedDocumentNode<unknown, unknown>,
    variables: object
  ) {
    return this._apollo
      .watchQuery<LoginApiResponse>({
        query,
        variables,
        fetchPolicy: 'network-only',
      })
      .valueChanges.pipe(
        take(1),
        tap((result: ApolloQueryResult<LoginApiResponse>) => {
          const { token, user } = result.data.getUser;
          this._tokenService.tokenValue = token;
          this._userLoggedService.userLoggedValue = user;
        })
      );
  }
}
