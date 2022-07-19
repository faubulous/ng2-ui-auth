import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Ng2UiAuthModule } from './ng2-ui-auth.module';
import { PopupService } from './popup.service';
import { TestBed, inject } from '@angular/core/testing';

describe('PopupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Ng2UiAuthModule.forRoot(), HttpClientTestingModule],
      providers: [PopupService]
    });
  });

  it('should be created', inject([PopupService], (service: PopupService) => {
    expect(service).toBeTruthy();
  }));
});
