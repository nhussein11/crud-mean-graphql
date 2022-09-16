import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
})
export class NewQuoteComponent implements OnInit {
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
    console.log("open")
    
  }
}
