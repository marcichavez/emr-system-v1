import { TestBed } from '@angular/core/testing';

import { InventoryApiService } from './inventory-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InventoryApiService', () => {
  let service: InventoryApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(InventoryApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
