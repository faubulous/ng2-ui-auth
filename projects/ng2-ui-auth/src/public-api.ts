/*
 * Public API Surface of ng2-ui-auth
 */

import { AuthService } from './lib/auth.service';
import { BrowserStorageService } from './lib/browser-storage.service';
import { ConfigService, CONFIG_OPTIONS } from './lib/config.service';
import { IProviders } from './lib/config-interfaces';
import { JwtInterceptor } from './lib/interceptor.service';
import { LocalService } from './lib/local.service';
import { Ng2UiAuthModule } from './lib/ng2-ui-auth.module';
import { Oauth1Service } from './lib/oauth1.service';
import { Oauth2Service } from './lib/oauth2.service';
import { OauthService } from './lib/oauth.service';
import { PopupService } from './lib/popup.service';
import { SharedService } from './lib/shared.service';
import { StorageService } from './lib/storage-service';
import { StorageType } from './lib/storage-type.enum';

/*
 * Public API Surface of ng2-ui-auth
 */
export {
    AuthService,
    BrowserStorageService,
    CONFIG_OPTIONS,
    ConfigService,
    IProviders,
    JwtInterceptor,
    LocalService,
    Ng2UiAuthModule,
    Oauth1Service,
    Oauth2Service,
    OauthService,
    PopupService,
    SharedService,
    StorageService,
    StorageType
};
