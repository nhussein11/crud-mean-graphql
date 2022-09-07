import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteCardComponent } from './quote-card.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';



@NgModule({
  declarations: [
    QuoteCardComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports:[QuoteCardComponent]
})
export class QuoteCardModule { }
