import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimengModule } from 'src/app/primeng/primeng.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UiModule } from 'src/app/ui/ui.module';

import { QuoteComponent } from './quote.component';

@NgModule({
  declarations: [QuoteComponent],
  imports: [
    CommonModule,
    PrimengModule,
    UiModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [QuoteComponent],
})
export class QuoteModule {}
