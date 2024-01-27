import { ComponentFixture, TestBed } from '@angular/core/testing';

import { S1CheckMasterlistComponent } from './s1-check-masterlist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('S1CheckMasterlistComponent', () => {
  let component: S1CheckMasterlistComponent;
  let fixture: ComponentFixture<S1CheckMasterlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [S1CheckMasterlistComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(S1CheckMasterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
