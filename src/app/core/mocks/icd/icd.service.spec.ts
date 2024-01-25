import { TestBed } from '@angular/core/testing';

import { IcdService } from './icd.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('IcdService', () => {
  let service: IcdService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(IcdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
