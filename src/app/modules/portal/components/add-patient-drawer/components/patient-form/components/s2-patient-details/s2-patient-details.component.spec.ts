import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S2PatientDetailsComponent } from './s2-patient-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

describe('S2PatientDetailsComponent', () => {
  let component: S2PatientDetailsComponent;
  let fixture: ComponentFixture<S2PatientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [S2PatientDetailsComponent],
      imports: [HttpClientTestingModule, MatAutocompleteModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(S2PatientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
