import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;
  let now = new Date(2024, 1, 28);

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#ageBreakdown should return 7 in years', () => {
    let age = service.ageBreakdown(new Date(1994, 1, 1), now);
    expect(age.years).toBe(30);
  });

  it('#ageBreakdown should return 8 in months', () => {
    let age = service.ageBreakdown(new Date(1994, 1, 1), now);
    expect(age.months).toBe(0);
  });

  it('#ageBreakdown should return 27 in days', () => {
    let age = service.ageBreakdown(new Date(1994, 1, 1), now);
    expect(age.days).toBe(27);
  });

  it('#ageBreakdown should return 0 in days', () => {
    let age = service.ageBreakdown(new Date(1994, 1, 28), now);
    expect(age.days).toBe(0);
  });

  it('#ageBreakdown should return 14 in days', () => {
    let age = service.ageBreakdown(new Date(2024, 1, 14), now);
    expect(age.days).toBe(14);
  });
});
