import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Ng2UiAuthModule } from './ng2-ui-auth.module';
import { OauthService } from './oauth.service';
import { TestBed, inject } from '@angular/core/testing';

describe('OauthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Ng2UiAuthModule.forRoot(), HttpClientTestingModule],
      providers: [OauthService]
    });
  });

  it('should be created', inject([OauthService], (service: OauthService) => {
    expect(service).toBeTruthy();
  }));
});
