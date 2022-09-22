import { Injectable } from '@angular/core';
import { Apollo, TypedDocumentNode } from 'apollo-angular';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private _apollo: Apollo) {}

  public handleLoginQueries(
    query: TypedDocumentNode<unknown, unknown>,
    variables: object
    ) {
    this._apollo
      .watchQuery({
        query,
        variables
      })
      .valueChanges.pipe(
        map(({ data }: any) => {
          console.log(data);
        })
      )
      .subscribe();
  }
}
