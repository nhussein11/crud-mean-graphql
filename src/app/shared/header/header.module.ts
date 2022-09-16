import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
