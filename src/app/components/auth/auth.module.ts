import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PrimengModule } from 'src/app/primeng/primeng.module';
import { UiModule } from 'src/app/ui/ui.module';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [LoginComponent, WelcomeComponent, ProfileComponent],
  imports: [CommonModule, PrimengModule, UiModule, ReactiveFormsModule],
  exports: [LoginComponent, WelcomeComponent, ProfileComponent],
})
export class LoginModule {}
