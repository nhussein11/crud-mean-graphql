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
  @Output() closeNewQuote = new EventEmitter<boolean>();
  newForm: FormGroup = this._formBuilder.group({
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
      const { author, quote } = this.config.data;
      this.newForm.controls['author'].setValue(author);
      this.newForm.controls['quote'].setValue(quote);
    }
  }
}
