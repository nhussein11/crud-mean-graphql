import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, ApolloBase, TypedDocumentNode } from 'apollo-angular';
import { map, take } from 'rxjs';

import { LoginApiResponse } from 'src/app/shared/models/User';

import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apollo: ApolloBase;

  constructor(private _apollo: Apollo, private _tokenService: TokenService) {
    this.apollo = this._apollo.use('auth');
  }

  public handleLoginQuery(
    query: TypedDocumentNode<unknown, unknown>,
    variables: object
  ) {
    return this.apollo
      .watchQuery<LoginApiResponse>({
        query,
        variables,
      })
      .valueChanges.pipe(
        take(1),
        map((result: ApolloQueryResult<LoginApiResponse>) => {
          this._tokenService.tokenValue = result.data.getUser.token;
          // return this.token;
        })
      )
      .subscribe(console.log);
  }
}
