import { ConfigService } from './config.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Ng2UiAuthModule } from './ng2-ui-auth.module';
import { TestBed, inject } from '@angular/core/testing';

describe('ConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Ng2UiAuthModule.forRoot(), HttpClientTestingModule],
      providers: [ConfigService]
    });
  });

  it('should be created', inject([ConfigService], (service: ConfigService) => {
    expect(service).toBeTruthy();
  }));
});
