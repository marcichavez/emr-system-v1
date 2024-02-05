import { TestBed } from '@angular/core/testing';

import { FakeAuthService } from './fake-auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FakeAuthService', () => {
  let service: FakeAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(FakeAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
