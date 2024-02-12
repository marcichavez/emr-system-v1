import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientDrawerComponent } from './add-patient-drawer.component';

describe('AddPatientDrawerComponent', () => {
  let component: AddPatientDrawerComponent;
  let fixture: ComponentFixture<AddPatientDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPatientDrawerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatientDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
