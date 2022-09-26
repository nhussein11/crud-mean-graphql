import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Quote, QuotesApiResponse } from '../../../shared/models/Quote';

export const QUOTES = gql`
  {
    allQuotes {
      _id
      author
      quote
      year
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  private _quotesSubject = new BehaviorSubject<Quote[]>([]);

  get quotes() {
    return this._quotesSubject.asObservable();
  }
  set quotesData(quotes: Quote[]) {
    this._quotesSubject.next(quotes);
  }

  constructor(private _apollo: Apollo) {
    this.getQuotes();
  }

  private getQuotes(): void {
    this._apollo
      .watchQuery<QuotesApiResponse>({
        query: QUOTES,
      })
      .valueChanges.pipe(
        map((result: ApolloQueryResult<QuotesApiResponse>) => {
          const { allQuotes } = result.data;
          this.quotesData = allQuotes;
        })
      )
      .subscribe();
  }
}
