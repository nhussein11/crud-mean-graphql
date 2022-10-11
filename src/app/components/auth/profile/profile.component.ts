import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserWithoutPassword } from 'src/app/shared/models/User';
import { UserLoggedService } from 'src/app/shared/services/user-logged.service';

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
  constructor(
    private _formBuilder: FormBuilder,
    private _userLoggedService: UserLoggedService
  ) {}

  logout() {
    this._userLoggedService.userLoggedValue = {} as UserWithoutPassword;
  }
}
