import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { LoginComponent } from './login.component';
import { UiModule } from 'src/app/ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    PrimengModule,
    UiModule,
    ReactiveFormsModule
  ],
  exports:[LoginComponent]
})
export class LoginModule { }
