import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsListComponent } from './patients-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PatientsListComponent', () => {
  let component: PatientsListComponent;
  let fixture: ComponentFixture<PatientsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientsListComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
