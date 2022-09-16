import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewQuoteComponent } from './new-quote.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { UiModule } from 'src/app/ui/ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NewQuoteComponent],
  imports: [
    CommonModule,
    PrimengModule,
    UiModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [NewQuoteComponent],
})
export class NewQuoteModule {}
