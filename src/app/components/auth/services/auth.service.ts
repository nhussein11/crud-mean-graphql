import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, ApolloBase, TypedDocumentNode } from 'apollo-angular';
import { map, take } from 'rxjs';

import { LoginApiResponse } from 'src/app/shared/models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apollo: ApolloBase;
  private _token!: string;
  get token(): string {
    return this._token;
  }
  set tokenValue(_tokenValue: string) {
    this._token = _tokenValue;
  }
  constructor(private _apollo: Apollo) {
    this.apollo = this._apollo.use('auth');
  }

  public handleLoginQuery(
    query: TypedDocumentNode<unknown, unknown>,
    variables: object
  ) {
    return this._apollo
      .use('auth')
      .watchQuery<LoginApiResponse>({
        query,
        variables,
      })
      .valueChanges.pipe(
        take(1),
        map((result: ApolloQueryResult<LoginApiResponse>) => {
          this.tokenValue = result.data.getUser.token;
          return this.token;
        })
      )
      .subscribe(console.log);
  }
}
