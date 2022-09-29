import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AuthInterceptor } from 'src/app/shared/interceptors/auth.interceptor';

import { LoginModule } from '../auth/login/login.module';
import { AuthService } from '../auth/services/auth.service';
import { HomeQuoteComponent } from './home-quote/home-quote.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, HomeQuoteComponent],
  imports: [CommonModule, HomeRoutingModule, LoginModule],
  exports: [HomeComponent],
})
export class HomeModule {}
