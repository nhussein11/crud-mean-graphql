import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginModule } from '../auth/login/login.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, LoginModule],
  exports: [HomeComponent],
})
export class HomeModule {}
