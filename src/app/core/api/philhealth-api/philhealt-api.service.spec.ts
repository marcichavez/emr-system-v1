import { TestBed } from '@angular/core/testing';

import { PhilhealtApiService } from './philhealt-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PhilhealtApiService', () => {
  let service: PhilhealtApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(PhilhealtApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
