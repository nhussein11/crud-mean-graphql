import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';

import { UiAuthorInputComponent } from './ui-author-input/ui-author-input.component';
import { UiQuoteTextareaComponent } from './ui-quote-textarea/ui-quote-textarea/ui-quote-textarea.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UiAuthorInputComponent,
    UiQuoteTextareaComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule
  ],
  exports:[
    UiAuthorInputComponent,
    UiQuoteTextareaComponent
  ]
})
export class UiModule { }
