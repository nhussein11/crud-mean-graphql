import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Apollo, ApolloBase } from 'apollo-angular';
import gql from 'graphql-tag';
import { BehaviorSubject, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

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
@UntilDestroy()
@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  private apollo: ApolloBase;
  private _quotesSubject = new BehaviorSubject<Quote[]>([]);

  get quotes() {
    return this._quotesSubject.asObservable();
  }
  set quotesData(quotes: Quote[]) {
    this._quotesSubject.next(quotes);
  }

  constructor(private _apollo: Apollo) {
    this.apollo = this._apollo.use('default');
    this.getQuotes();
  }

  private getQuotes(): void {
    this.apollo
      .watchQuery<QuotesApiResponse>({
        query: QUOTES,
      })
      .valueChanges.pipe(
        map((result: ApolloQueryResult<QuotesApiResponse>) => {
          const { allQuotes } = result.data;
          this.quotesData = allQuotes;
        }),
        catchError(error => of(error))
      )
      .pipe(untilDestroyed(this))
      .subscribe();
  }
}
