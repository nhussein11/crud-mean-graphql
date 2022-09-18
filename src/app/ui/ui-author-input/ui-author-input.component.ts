import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-ui-author-input',
  templateUrl: './ui-author-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiAuthorInputComponent implements OnInit {
  @Input() form!: FormGroup;

  constructor(private rootForm: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootForm.control;
  }
}
