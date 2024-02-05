import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsMasterlistComponent } from './patients-masterlist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('PatientsMasterlistComponent', () => {
  let component: PatientsMasterlistComponent;
  let fixture: ComponentFixture<PatientsMasterlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientsMasterlistComponent],
      imports: [HttpClientTestingModule, MatSnackBarModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsMasterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
