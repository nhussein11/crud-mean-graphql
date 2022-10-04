import { Injectable } from '@angular/core';
import { Apollo, ApolloBase, TypedDocumentNode } from 'apollo-angular';

import { NewQuote, Quote } from '../../../shared/models/Quote';
import { QUOTES } from './quotes.service';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private apollo: ApolloBase;
  constructor(private _apollo: Apollo) {
    this.apollo = this._apollo.use('default');
  }

  public handleQuoteMutation(
    quoteToHandle: Quote | NewQuote,
    mutation: TypedDocumentNode<unknown, unknown>
  ) {
    return this.apollo
      .mutate({
        mutation,
        variables: quoteToHandle,
        refetchQueries: [QUOTES],
      })
      .subscribe();
  }
}
