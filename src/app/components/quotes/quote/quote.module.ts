import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { UiModule } from 'src/app/ui/ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
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
