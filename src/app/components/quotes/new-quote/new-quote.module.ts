import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewQuoteComponent } from './new-quote.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { UiModule } from 'src/app/ui/ui.module';
import { FormControlPipe } from './formControl.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewQuoteComponent, FormControlPipe],
  imports: [
    CommonModule,
    PrimengModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [NewQuoteComponent],
})
export class NewQuoteModule {}
