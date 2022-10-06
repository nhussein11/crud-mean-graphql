import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  loginForm: FormGroup = this._formBuilder.group(
    {
      name: ['nico', [Validators.required]],
    },
    { updateOn: 'blur' }
  );
  constructor(private _formBuilder: FormBuilder) {}
}
