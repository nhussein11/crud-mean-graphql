import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimengModule } from 'src/app/primeng/primeng.module';

import { QuoteCardComponent } from './quote-card.component';

@NgModule({
  declarations: [QuoteCardComponent],
  imports: [CommonModule, PrimengModule],
  exports: [QuoteCardComponent],
})
export class QuoteCardModule {}
