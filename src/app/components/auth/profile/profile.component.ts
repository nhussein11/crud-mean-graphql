import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { UserWithoutPassword } from 'src/app/shared/models/User';
import { TokenService } from 'src/app/shared/services/token.service';
import { UserLoggedService } from 'src/app/shared/services/user-logged.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit, OnDestroy {
  private _profileSubscription!: Subscription;
  profileForm: FormGroup = this._formBuilder.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      address: ['', [Validators.required]],
    },
    { updateOn: 'blur' }
  );
  constructor(
    private _formBuilder: FormBuilder,
    private _userLoggedService: UserLoggedService,
    private _tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this._profileSubscription = this._userLoggedService.userLogged.subscribe(
      ({ name, email, address }) => {
        this.profileForm.patchValue({
          name,
          email,
          address,
        });
      }
    );
  }

  logout() {
    this._userLoggedService.userLoggedValue = {} as UserWithoutPassword;
    this._tokenService.tokenValue = '';
  }

  ngOnDestroy(): void {
    this._profileSubscription.unsubscribe();
  }
}
