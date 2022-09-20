import { Injectable } from '@angular/core';
import { Apollo, gql, TypedDocumentNode } from 'apollo-angular';
import { NewQuote, Quote } from '../models/Quote';
import { QUOTES } from './quotes.service';

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
        update: (cache) => {
          const existingQuotes: any = cache.readQuery({
            query: QUOTES,
          });
          const newQuotes = existingQuotes.allQuotes.map((q: Quote) => {
            if ('_id' in quoteToHandle && q._id === quoteToHandle._id) {
              return { ...q };
            } else {
              return q;
            }
          });

          cache.writeQuery({
            query: QUOTES,
            data: { allQuotes: {...newQuotes} },
          });
        },
      })
      .subscribe();
  }
}
