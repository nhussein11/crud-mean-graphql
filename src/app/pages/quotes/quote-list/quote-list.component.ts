import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from 'src/app/models/Quote';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css'],
})
export class QuoteListComponent {
  
  quotes$:Observable<Quote[]>;

  constructor(private _quoteService: QuotesService) {
    this.quotes$ = this._quoteService.quotes
    console.log(this.quotes$)
    
  }

}
