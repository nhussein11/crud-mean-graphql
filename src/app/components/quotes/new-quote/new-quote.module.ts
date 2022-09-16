import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewQuoteComponent } from './new-quote.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { UiModule } from 'src/app/ui/ui.module';



@NgModule({
  declarations: [
    NewQuoteComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    UiModule
  ],
  exports:[NewQuoteComponent]
})
export class NewQuoteModule { }
