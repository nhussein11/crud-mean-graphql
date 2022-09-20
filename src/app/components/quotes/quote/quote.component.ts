import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NewQuote } from 'src/app/models/Quote';


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
      this.quoteForm.patchValue(this.config.data);
    }
  }

  saveQuote() {
    const quote: NewQuote = {
      author: this.quoteForm.controls['author'].value,
      quote: this.quoteForm.controls['quote'].value,
    };
    this.ref.close(quote);
  }
}
