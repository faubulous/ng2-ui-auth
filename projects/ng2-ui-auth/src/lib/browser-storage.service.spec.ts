import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { BrowserStorageService } from './browser-storage.service';
import { Ng2UiAuthModule } from './ng2-ui-auth.module';

describe('BrowserStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Ng2UiAuthModule.forRoot(), HttpClientTestingModule],
      providers: [BrowserStorageService]
    });
  });

  it('should be created', inject([BrowserStorageService], (service: BrowserStorageService) => {
    expect(service).toBeTruthy();
  }));
});
