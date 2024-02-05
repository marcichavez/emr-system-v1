import { TestBed } from '@angular/core/testing';

import { PhilhealthApiService } from './philhealth-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PhilhealtApiService', () => {
  let service: PhilhealthApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(PhilhealthApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
