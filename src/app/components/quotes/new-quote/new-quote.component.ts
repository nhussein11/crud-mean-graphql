import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {

  @Output() closeNewQuote = new EventEmitter<boolean>();

  newForm: FormGroup = this._formBuilder.group({
    author: ['', [Validators.required]],
    quote: ['', [Validators.required]]
  })
  
  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

}
