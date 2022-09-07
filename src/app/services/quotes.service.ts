import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Quote } from '../models/Quote';

const QUOTES = gql`
  {
    quotes {
      quotes {
        _id
        quote
        author
      }
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

  private getQuotes() {
    this._apollo
      .watchQuery({
        query: QUOTES,
      })
      .valueChanges.pipe(
        map(({ data }: any) => {
          const {
            quotes: { quotes },
          } = data;
          this.quotesData = quotes
        })
      )
      .subscribe();
  }
}
