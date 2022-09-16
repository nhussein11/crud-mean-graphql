import { NgModule } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import {ButtonModule} from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  exports: [CardModule, InputTextareaModule, BreadcrumbModule, ButtonModule],
})
export class PrimengModule {}
