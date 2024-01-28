import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFormComponent } from './patient-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PatientFormComponent', () => {
  let component: PatientFormComponent;
  let fixture: ComponentFixture<PatientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientFormComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
