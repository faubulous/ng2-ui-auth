import { Inject, Injectable, InjectionToken } from '@angular/core';
import { IPartialConfigOptions, IProviders } from './config-interfaces';
import { defaultProviders } from './config-providers';
import { StorageType } from './storage-type.enum';

export const CONFIG_OPTIONS = new InjectionToken<any>('config.options');
@Injectable()
export class ConfigService {
  public options: IPartialConfigOptions = {
    withCredentials: false,
    tokenRoot: null,
    baseUrl: '/',
    loginUrl: '/auth/login',
    signupUrl: '/auth/signup',
    unlinkUrl: '/auth/unlink/',
    tokenName: 'token',
    tokenSeparator: '_',
    tokenPrefix: 'ng2-ui-auth',
    authHeader: 'Authorization',
    authToken: 'Bearer',
    storageType: StorageType.LOCAL_STORAGE,
    cordova: undefined,
    resolveToken: (response: any, config: IPartialConfigOptions) => {
      const accessToken: string | { [key: string]: string } | null | undefined =
        response && (response.access_token || response.token || response.data);

      if (!accessToken) {
        // console.warn('No token found');
        return null;
      }

      if (typeof accessToken === 'string') {
        return accessToken;
      }

      if (typeof accessToken !== 'object') {
        // console.warn('No token found');
        return null;
      }

      const tokenRootData =
        config.tokenRoot &&
        config.tokenRoot.split('.').reduce((o: any, x: any) => {
          return o[x];
        }, accessToken);

      if (!config.tokenName) {
        return null;
      }

      const token = tokenRootData ? tokenRootData[config.tokenName] : accessToken[config.tokenName];

      if (token) {
        return token;
      }
      // const tokenPath = this.tokenRoot ? this.tokenRoot + '.' + this.tokenName : this.tokenName;
      // console.warn('Expecting a token named "' + tokenPath);
      return null;
    },
    providers: {}
  };

  constructor(@Inject(CONFIG_OPTIONS) options: IPartialConfigOptions) {
    this.options = {
      ...this.options,
      ...options
    };
    this.mergeWithDefaultProviders();
  }

  updateProviders(providers: IProviders) {
    this.options.providers = {
      ...(this.options.providers || {}),
      ...providers
    };
    this.mergeWithDefaultProviders();
  }

  mergeWithDefaultProviders() {
    const providers = this.options.providers;

    if (providers) {
      Object.keys(providers).forEach(key => {
        if (key in defaultProviders) {
          providers[key] = {
            ...defaultProviders[key],
            ...providers[key]
          };
        }
      });
    }
  }
}
