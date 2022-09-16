import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ui-author-input',
  templateUrl: './ui-author-input.component.html',
})
export class UiAuthorInputComponent {
  @Input() author!: FormControl;
}
