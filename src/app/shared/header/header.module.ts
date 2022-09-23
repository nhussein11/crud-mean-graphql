import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimengModule } from 'src/app/primeng/primeng.module';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, PrimengModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
