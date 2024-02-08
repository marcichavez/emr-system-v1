import { TestBed } from '@angular/core/testing';

import { ChangePasswordTokenResolver } from './change-password-token.resolver';

describe('ChangePasswordTokenResolver', () => {
  let resolver: ChangePasswordTokenResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ChangePasswordTokenResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
