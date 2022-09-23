import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
