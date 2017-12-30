import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUniversalordersComponent } from './admin-universalorders.component';

describe('AdminUniversalordersComponent', () => {
  let component: AdminUniversalordersComponent;
  let fixture: ComponentFixture<AdminUniversalordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUniversalordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUniversalordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
