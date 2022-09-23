import { NgModule } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
@NgModule({
  exports: [
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    DynamicDialogModule,
    InputTextareaModule,
  ],
})
export class PrimengModule {}
