import { Component, Input, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Quote } from 'src/app/models/Quote';
import { QuoteComponent } from '../quote/quote.component';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
})
export class QuoteCardComponent {
  @Input() quote: Quote = {} as Quote;

  constructor(private _dialogService: DialogService){}
  updateQuote(quote: Quote){
    const dialogReference = this._dialogService.open(QuoteComponent, {
      data: quote,
      header: 'Update quote!',
      width: '30%',
    });
  }
}
