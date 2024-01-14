import { TestBed } from '@angular/core/testing';

import { Icd10Service } from './icd-10.service';

describe('Icd10Service', () => {
  let service: Icd10Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Icd10Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
