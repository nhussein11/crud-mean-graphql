import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoteListRoutingModule } from './quote-list-routing.module';
import { QuoteListComponent } from './quote-list.component';
import { QuoteCardModule } from '../quote-card/quote-card.module';
import { NewQuoteModule } from '../new-quote/new-quote.module';
import { PrimengModule } from 'src/app/primeng/primeng.module';


@NgModule({
  declarations: [
    QuoteListComponent
  ],
  imports: [
    CommonModule,
    QuoteListRoutingModule,
    QuoteCardModule,
    NewQuoteModule,
    PrimengModule
  ]
})
export class QuoteListModule { }
