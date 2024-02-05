import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoapComponent } from './soap.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SoapComponent', () => {
  let component: SoapComponent;
  let fixture: ComponentFixture<SoapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoapComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
