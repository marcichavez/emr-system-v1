import { TestBed } from '@angular/core/testing';

import { IcdApiService } from './icd-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('IcdApiService', () => {
  let service: IcdApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(IcdApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
