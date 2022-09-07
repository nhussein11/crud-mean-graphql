import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewQuoteComponent } from './new-quote.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';



@NgModule({
  declarations: [
    NewQuoteComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports:[NewQuoteComponent]
})
export class NewQuoteModule { }
