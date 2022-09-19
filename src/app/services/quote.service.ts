import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { NewQuote } from '../models/Quote';

const NEW_QUOTE_MUTATION = gql`
  mutation CreateQuote($quote: String!, $author: String!) {
    createQuote(quoteInput: { quote: $quote, author: $author }) {
      author
      quote
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private _apollo: Apollo) {}

  public createNewQuote(newQuote: NewQuote) {
    const { quote, author } = newQuote;

    return this._apollo
      .mutate({
        mutation: NEW_QUOTE_MUTATION,
        variables: {
          quote,
          author,
        }
      })
      .subscribe();
  }

  // public updateQuote(quoteToUpdate: NewQuote) {
  //   const { quote, author } = quoteToUpdate;

  //   return this._apollo
  //     .mutate({
  //       mutation: NEW_QUOTE_MUTATION,
  //       variables: {
  //         quote,
  //         author,
  //       }
  //     })
  //     .subscribe();
  // }
}
