import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';

import { ReactiveFormsModule } from '@angular/forms';
import { UiInputComponent } from './ui-input/ui-input.component';
import { UiTextareaComponent } from './ui-textarea/ui-textarea.component';

@NgModule({
  declarations: [UiInputComponent, UiTextareaComponent],
  imports: [CommonModule, PrimengModule, ReactiveFormsModule],
  exports: [UiInputComponent, UiTextareaComponent],
})
export class UiModule {}
