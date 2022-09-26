import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginModule } from '../auth/login/login.module';
import { HomeQuoteComponent } from './home-quote/home-quote/home-quote.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, HomeQuoteComponent],
  imports: [CommonModule, HomeRoutingModule, LoginModule],
  exports: [HomeComponent],
})
export class HomeModule {}
