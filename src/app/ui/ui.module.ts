import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PrimengModule } from '../primeng/primeng.module';
import { UiButtonComponent } from './ui-button/ui-button/ui-button.component';
import { UiInputComponent } from './ui-input/ui-input.component';
import { UiTextareaComponent } from './ui-textarea/ui-textarea.component';

@NgModule({
  declarations: [UiInputComponent, UiTextareaComponent, UiButtonComponent],
  imports: [CommonModule, PrimengModule, ReactiveFormsModule],
  exports: [UiInputComponent, UiTextareaComponent, UiButtonComponent],
})
export class UiModule {}
