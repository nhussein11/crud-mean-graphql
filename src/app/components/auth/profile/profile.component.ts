import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { gql } from 'apollo-angular';
import { Subscription, tap } from 'rxjs';

import { UserWithoutPassword } from 'src/app/shared/models/User';
import { TokenService } from 'src/app/shared/services/token.service';
import { UserLoggedService } from 'src/app/shared/services/user-logged.service';

export const UPDATE_PROFILE_MUTATION = gql`
  mutation ($_id: ID!, $name: String!, $address: String!, $email: String!) {
    updateUser(
      _id: $_id
      userInput: { name: $name, email: $email, address: $address }
    ) {
      name
      address
      email
    }
  }
`;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup = this._formBuilder.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      address: ['', [Validators.required]],
    },
    { updateOn: 'blur' }
  );
  private _profileSubscription!: Subscription;

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

  updateProfile() {
    const { name, email, address } = this.profileForm.value;
    this._profileSubscription = this._userLoggedService.userLogged
      .pipe(
        tap(({ _id }) => {
          this._userLoggedService.handleUpdateProfileMutation(
            UPDATE_PROFILE_MUTATION,
            {
              _id,
              name,
              email,
              address,
            }
          );
        })
      )
      .subscribe();
  }

  logout(): void {
    this._profileSubscription.unsubscribe();
    this._tokenService.tokenValue = '';
    this._userLoggedService.userLoggedValue = {} as UserWithoutPassword;
  }
}
