import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Ng2UiAuthModule } from './ng2-ui-auth.module';
import { Oauth1Service } from './oauth1.service';
import { TestBed, inject } from '@angular/core/testing';

describe('Oauth1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Ng2UiAuthModule.forRoot(), HttpClientTestingModule],
      providers: [Oauth1Service]
    });
  });

  it('should be created', inject([Oauth1Service], (service: Oauth1Service) => {
    expect(service).toBeTruthy();
  }));
});
