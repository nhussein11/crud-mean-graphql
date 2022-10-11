import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserLoggedService } from 'src/app/shared/services/user-logged.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent implements OnInit, OnDestroy {
  public title!: string;
  public iconClass!: string;
  public isUserLogged!: boolean;
  private _userLogged!: Subscription;

  constructor(private _userLoggedService: UserLoggedService) {}

  ngOnInit(): void {
    this._userLogged = this._userLoggedService.userLogged.subscribe(user => {
      if (!user.name) {
        this.title = 'Login';
        this.iconClass = 'bi bi-door-open';
        this.isUserLogged = false;
      } else {
        this.title = 'Welcome ' + user.name;
        this.iconClass = 'bi bi-person-badge';
        this.isUserLogged = true;
      }
    });
  }
  ngOnDestroy(): void {
    this._userLogged.unsubscribe();
  }
}
