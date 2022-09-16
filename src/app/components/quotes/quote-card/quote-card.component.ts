import { Component, Input, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/Quote';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
})
export class QuoteCardComponent {
  @Input() quote: Quote = {} as Quote;
}
