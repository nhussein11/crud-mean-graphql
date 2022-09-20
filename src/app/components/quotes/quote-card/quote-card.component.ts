import { Component, Input } from '@angular/core';
import { gql } from 'apollo-angular';
import { DialogService } from 'primeng/dynamicdialog';
import { NewQuote, Quote } from 'src/app/models/Quote';
import { QuoteService } from 'src/app/services/quote.service';
import { QuoteComponent } from '../quote/quote.component';

const UPDATE_QUOTE_MUTATION = gql`
  mutation UpdateQuote($_id: ID!, $quote: String!, $author: String!) {
    updateQuote(_id: $_id, quoteInput: { quote: $quote, author: $author }) {
      author
      quote
    }
  }
`;
@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
})
export class QuoteCardComponent {
  @Input() quote!: Quote;

  constructor(
    private _dialogService: DialogService,
    private _quoteService: QuoteService
  ) {}

  updateQuote(quote: Quote) {
    const dialogReference = this._dialogService.open(QuoteComponent, {
      data: quote,
      header: 'Update quote!',
      width: '30%',
    });
    dialogReference.onClose.subscribe((quote: NewQuote) => {
      if (quote) {
        const quoteToHandle: Quote = {
          _id: this.quote._id,
          ...quote,
        };
        this._quoteService.handleQuoteMutation(
          quoteToHandle,
          UPDATE_QUOTE_MUTATION
        );
      }
    });
  }
}
