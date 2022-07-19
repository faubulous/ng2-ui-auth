import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LocalService } from './local.service';
import { Ng2UiAuthModule } from './ng2-ui-auth.module';
import { TestBed, inject } from '@angular/core/testing';

describe('LocalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Ng2UiAuthModule.forRoot(), HttpClientTestingModule],
      providers: [LocalService]
    });
  });

  it('should be created', inject([LocalService], (service: LocalService) => {
    expect(service).toBeTruthy();
  }));
});
