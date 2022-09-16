import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
})
export class QuoteComponent implements OnInit {
  quoteForm: FormGroup = this._formBuilder.group({
    author: ['', [Validators.required]],
    quote: ['', [Validators.required]],
  });

  constructor(
    private _formBuilder: FormBuilder,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    if (this.config.data) {
      this.quoteForm.patchValue(this.config.data)
    }
  }
}
