import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';
import { ConfigService } from './config.service';
import { joinUrl } from './utils';
import { tap } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';

@Injectable()
export class LocalService {
  constructor(private http: HttpClient, private shared: SharedService, private config: ConfigService) { }

  public login<T extends string | object>(user: string | object, url?: string): Observable<T> {
    const u = url || joinUrl(this.config.options.baseUrl ?? '', this.config.options.loginUrl ?? '');

    if (u.length) {
      return this.http
        .post<T>(u, user)
        .pipe(tap(data => this.shared.setToken(data)));
    } else {
      return EMPTY;
    }
  }

  public signup<T = any>(user: string | object, url?: string): Observable<T> {
    const u = url || joinUrl(this.config.options.baseUrl ?? '', this.config.options.signupUrl ?? '');

    if (u.length) {
      return this.http.post<T>(u, user);
    } else {
      return EMPTY;
    }
  }
}
