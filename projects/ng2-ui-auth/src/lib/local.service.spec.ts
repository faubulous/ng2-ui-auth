import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { LocalService } from './local.service';
import { Ng2UiAuthModule } from './ng2-ui-auth.module';

describe('LocalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, Ng2UiAuthModule],
      providers: [LocalService]
    });
  });

  it('should be created', inject([LocalService], (service: LocalService) => {
    expect(service).toBeTruthy();
  }));
});
