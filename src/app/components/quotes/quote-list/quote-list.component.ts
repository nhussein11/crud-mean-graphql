import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { Quote } from 'src/app/models/Quote';
import { QuotesService } from 'src/app/services/quotes.service';
import { NewQuoteComponent } from '../new-quote/new-quote.component';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  providers: [DialogService],
})
export class QuoteListComponent {
  quotes$: Observable<Quote[]>;
  newQuote: boolean = false;

  constructor(
    private _quoteService: QuotesService,
    private _dialogService: DialogService
  ) {
    this.quotes$ = this._quoteService.quotes;
  }
  createNewQuote() {
    const dialogReference = this._dialogService.open(NewQuoteComponent, {
      header: 'Choose a Car',
      width: '70%',
    });
  }
}
