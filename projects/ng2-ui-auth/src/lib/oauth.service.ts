import { ConfigService } from './config.service';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IOauthService } from './oauth-service';
import { Injectable, Injector } from '@angular/core';
import { Oauth1Service } from './oauth1.service';
import { Oauth2Service } from './oauth2.service';
import { PopupService } from './popup.service';
import { SharedService } from './shared.service';
import { joinUrl } from './utils';
import { tap } from 'rxjs/operators';

@Injectable()
export class OauthService {
  readonly depProviders = [
    { provide: HttpClient, useValue: this.http },
    { provide: PopupService, useValue: this.popup },
    { provide: ConfigService, useValue: this.config }
  ];
  readonly deps = [HttpClient, PopupService, ConfigService];

  constructor(private http: HttpClient, private shared: SharedService, private config: ConfigService, private popup: PopupService) { }

  public authenticate<T extends object | string>(name: string, userData?: any): Observable<T> {
    const providers = this.config.options.providers;

    if (!providers) {
      return EMPTY;
    }

    const provider: IOauthService =
      providers[name].oauthType === '1.0'
        ? Injector.create({ providers: [...this.depProviders, { provide: Oauth1Service, deps: this.deps }] }).get(Oauth1Service)
        : Injector.create({ providers: [...this.depProviders, { provide: Oauth2Service, deps: this.deps }] }).get(Oauth2Service);

    return provider.open<T>(providers[name], userData || {}).pipe(
      tap(response => {
        // this is for a scenario when someone wishes to opt out from
        // satellizer's magic by doing authorization code exchange and
        // saving a token manually.
        if (providers[name].url) {
          this.shared.setToken(response);
        }
      })
    );
  }

  public unlink<T>(provider: string, url?: string, method = 'POST') {
    const u = url || joinUrl(this.config.options.baseUrl ?? '', this.config.options.unlinkUrl ?? '');

    if (u.length) {
      return this.http.request<T>(method, u, { body: { provider } });
    } else {
      return EMPTY;
    }
  }
}
