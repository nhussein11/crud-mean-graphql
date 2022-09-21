import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-ui-input',
  templateUrl: './ui-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiInputComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() formControlNameAccesor!: string;

  constructor(private rootForm: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootForm.control;
  }
}
