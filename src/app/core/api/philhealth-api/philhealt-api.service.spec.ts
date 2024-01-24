import { TestBed } from '@angular/core/testing';

import { PhilhealtApiService } from './philhealt-api.service';

describe('PhilhealtApiService', () => {
  let service: PhilhealtApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhilhealtApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
