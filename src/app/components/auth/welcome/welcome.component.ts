import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { UserWithoutPassword } from 'src/app/shared/models/User';
import { UserLoggedService } from 'src/app/shared/services/user-logged.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent {
  _userLogged$: Observable<UserWithoutPassword> =
    this._userLoggedService.userLogged;
  constructor(private _userLoggedService: UserLoggedService) {}
}
