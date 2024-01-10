import { TestBed } from '@angular/core/testing';

import { PhLocationService } from './ph-location.service';

describe('PhLocationService', () => {
  let service: PhLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
