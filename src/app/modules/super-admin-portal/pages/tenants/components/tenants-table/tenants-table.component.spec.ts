import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantsTableComponent } from './tenants-table.component';

describe('TenantsTableComponent', () => {
  let component: TenantsTableComponent;
  let fixture: ComponentFixture<TenantsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
