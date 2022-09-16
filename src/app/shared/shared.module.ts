import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { HeaderComponent } from './header/header.component';
import { FormControlPipe } from './pipes/formControl.pipe';

@NgModule({
  declarations: [FormControlPipe],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports:[HeaderComponent, FormControlPipe]
})
export class SharedModule { }
