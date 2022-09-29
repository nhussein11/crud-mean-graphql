import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PrimengModule } from 'src/app/primeng/primeng.module';
import { AuthInterceptor } from 'src/app/shared/interceptors/auth.interceptor';
import { UiModule } from 'src/app/ui/ui.module';

import { AuthService } from '../services/auth.service';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, PrimengModule, UiModule, ReactiveFormsModule],
  exports: [LoginComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
      deps: [AuthService],
    },
  ],
})
export class LoginModule {}
