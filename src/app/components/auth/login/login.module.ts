import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PrimengModule } from 'src/app/primeng/primeng.module';
import { UiModule } from 'src/app/ui/ui.module';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, PrimengModule, UiModule, ReactiveFormsModule],
  exports: [LoginComponent],
})
export class LoginModule {}
