import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-ui-quote-textarea',
  templateUrl: './ui-quote-textarea.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiQuoteTextareaComponent {
  @Input() form!: FormGroup;

  constructor(private rootForm: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootForm.control;
  }
}
