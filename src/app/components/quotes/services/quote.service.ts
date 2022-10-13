import { Injectable } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Apollo, TypedDocumentNode } from 'apollo-angular';

import { NewQuote, Quote } from '../../../shared/models/Quote';
import { QUOTES } from './quotes.service';

@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private _apollo: Apollo) {}

  public handleQuoteMutation(
    quoteToHandle: Quote | NewQuote,
    mutation: TypedDocumentNode<unknown, unknown>
  ) {
    return this._apollo
      .mutate({
        mutation,
        variables: quoteToHandle,
        refetchQueries: [QUOTES],
      })
      .pipe(untilDestroyed(this))
      .subscribe();
  }
}
