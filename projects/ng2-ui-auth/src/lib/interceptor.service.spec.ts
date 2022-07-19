import { HttpClientTestingModule } from '@angular/common/http/testing';
import { JwtInterceptor } from './interceptor.service';
import { Ng2UiAuthModule } from './ng2-ui-auth.module';
import { TestBed, inject } from '@angular/core/testing';

describe('InterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Ng2UiAuthModule.forRoot(), HttpClientTestingModule],
      providers: [JwtInterceptor]
    });
  });

  it('should be created', inject([JwtInterceptor], (service: JwtInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
