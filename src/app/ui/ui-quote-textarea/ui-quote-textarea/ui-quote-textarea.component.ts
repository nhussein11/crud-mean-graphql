import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-ui-quote-textarea',
  templateUrl: './ui-quote-textarea.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class UiQuoteTextareaComponent {
  @Input() quoteTextArea!: FormControl;
}
