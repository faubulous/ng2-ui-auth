import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { SharedService } from './shared.service';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private shared: SharedService, private config: ConfigService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader = this.config.options.authHeader;
    const authToken = this.config.options.authToken;

    if (!authHeader || req.headers.has(authHeader) || !this.shared.isAuthenticated()) {
      return next.handle(req);
    } else {
      const token = this.shared.getToken();

      return next.handle(req.clone({
        setHeaders: {
          [authHeader]: `${authToken} ${token}`
        }
      }));
    }
  }
}
