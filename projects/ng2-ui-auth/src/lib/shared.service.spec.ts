import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Ng2UiAuthModule } from './ng2-ui-auth.module';
import { SharedService } from './shared.service';
import { TestBed, inject } from '@angular/core/testing';

describe('SharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Ng2UiAuthModule.forRoot(), HttpClientTestingModule],
      providers: [SharedService]
    });
  });

  it('should be created', inject([SharedService], (service: SharedService) => {
    expect(service).toBeTruthy();
  }));
});
