import { Injectable } from '@angular/core';
import { Apollo, TypedDocumentNode } from 'apollo-angular';
import { map, take } from 'rxjs';
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
      .watchQuery({
        query,
        variables,
      })
      .valueChanges.pipe(
        take(1),
        map(({ data }: any) => data.getUser)
      );
  }
}
