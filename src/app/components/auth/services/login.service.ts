import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, TypedDocumentNode } from 'apollo-angular';
import { map, take } from 'rxjs';

import { LoginApiResponse } from 'src/app/shared/models/User';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
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
          console.log(result.data.getUser);
          return result.data.getUser;
        })
      );
  }
}
