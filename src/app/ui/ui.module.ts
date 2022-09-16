import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';

import { UiAuthorInputComponent } from './ui-author-input/ui-author-input.component';
import { UiQuoteTextareaComponent } from './ui-quote-textarea/ui-quote-textarea/ui-quote-textarea.component';


@NgModule({
  declarations: [
    UiAuthorInputComponent,
    UiQuoteTextareaComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports:[
    UiAuthorInputComponent,
    UiQuoteTextareaComponent
  ]
})
export class UiModule { }
