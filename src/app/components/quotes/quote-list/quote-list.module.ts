import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimengModule } from 'src/app/primeng/primeng.module';

import { QuoteCardModule } from '../quote-card/quote-card.module';
import { QuoteModule } from '../quote/quote.module';
import { QuoteListRoutingModule } from './quote-list-routing.module';
import { QuoteListComponent } from './quote-list.component';

@NgModule({
  declarations: [QuoteListComponent],
  imports: [
    CommonModule,
    QuoteListRoutingModule,
    QuoteCardModule,
    QuoteModule,
    PrimengModule,
  ],
})
export class QuoteListModule {}
