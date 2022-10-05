import { NgModule } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
// import { MessageModule } from 'primeng/message';
// import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';

@NgModule({
  exports: [
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    DynamicDialogModule,
    InputTextareaModule,
    ToastModule,
  ],
})
export class PrimengModule {}
