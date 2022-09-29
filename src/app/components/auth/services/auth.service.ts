import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, TypedDocumentNode } from 'apollo-angular';
import { map, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _token!: string;
  get token(): string {
    return this._token;
  }
  set tokenValue(_tokenValue: string) {
    this._token = _tokenValue;
  }
  constructor(private _apollo: Apollo) {}

  public handleLoginQuery(
    query: TypedDocumentNode<unknown, unknown>,
    variables: object
  ) {
    return this._apollo
      .watchQuery<any>({
        query,
        variables,
      })
      .valueChanges.pipe(
        take(1),
        map((result: ApolloQueryResult<any>) => {
          this.tokenValue = result.data.getUser.token;
          return result.data.getUser;
        })
      )
      .subscribe();
  }
}
