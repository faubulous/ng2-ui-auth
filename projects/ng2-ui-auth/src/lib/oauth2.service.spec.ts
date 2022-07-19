import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Ng2UiAuthModule } from './ng2-ui-auth.module';
import { Oauth2Service } from './oauth2.service';
import { TestBed, inject } from '@angular/core/testing';

describe('Oauth2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Ng2UiAuthModule.forRoot(), HttpClientTestingModule],
      providers: [Oauth2Service]
    });
  });

  it('should be created', inject([Oauth2Service], (service: Oauth2Service) => {
    expect(service).toBeTruthy();
  }));
});
