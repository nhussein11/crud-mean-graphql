import { NgModule } from '@angular/core';
import {CardModule} from 'primeng/card';
import {InputTextareaModule} from 'primeng/inputtextarea';
@NgModule({
  exports: [CardModule,InputTextareaModule],
})
export class PrimengModule {}
