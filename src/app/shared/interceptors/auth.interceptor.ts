import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/components/auth/services/auth.service';
import { TokenService } from 'src/app/components/auth/services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _tokenService: TokenService) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // const token = this._tokenService.token;
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzMxYWY4OTQ2ODRmNmE4NDhhYjc0N2MiLCJuYW1lIjoiTmljbyIsImFkZHJlc3MiOiJTYWx0YSIsImVtYWlsIjoibmljb0BnbWFpbC5jb20iLCJfX3YiOjAsImlhdCI6MTY2NDkzMjM0NSwiZXhwIjoxNjY0OTM1OTQ1fQ.8riWcRWv2Rb4jDTf-E8O6DsEIyRWIaQP0Y5LNj33AcU';
    console.log(token);
    const requestAuthorized = request.clone({
      // headers: request.headers.set('authorization', `Bearer ${token}`),
      setHeaders: { authorization: `Bearer ${token}` },
    });

    return next.handle(requestAuthorized);
  }
}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
  deps: [AuthService],
};
