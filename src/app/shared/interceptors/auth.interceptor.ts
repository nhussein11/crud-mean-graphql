import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { TokenService } from 'src/app/shared/services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private _token!: string;

  constructor(private _tokenService: TokenService) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const tokenSubscription = this._tokenService.token
      .pipe(tap(token => (this._token = token)))
      .subscribe();
    const requestWithToken = request.clone({
      setHeaders: {
        authorization: `Bearer ${this._token}`,
      },
      withCredentials: true,
    });

    return next
      .handle(requestWithToken)
      .pipe(tap(() => tokenSubscription.unsubscribe()));
  }
}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
  deps: [TokenService],
};
