import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Ng2UiAuthModule } from 'dist/ng2-ui-auth';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, Ng2UiAuthModule],
      providers: [AuthService]
    });
  });

  it('should be created', () => {
    const service: AuthService = TestBed.inject(AuthService, );
    expect(service).toBeTruthy();
  });
});
