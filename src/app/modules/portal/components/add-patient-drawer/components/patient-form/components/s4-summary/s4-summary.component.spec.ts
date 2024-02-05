import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S4SummaryComponent } from './s4-summary.component';

describe('S4SummaryComponent', () => {
  let component: S4SummaryComponent;
  let fixture: ComponentFixture<S4SummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [S4SummaryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(S4SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
