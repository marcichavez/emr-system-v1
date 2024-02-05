import { TestBed } from '@angular/core/testing';

import { PatientApiService } from './patient-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PatientApiService', () => {
  let service: PatientApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(PatientApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
