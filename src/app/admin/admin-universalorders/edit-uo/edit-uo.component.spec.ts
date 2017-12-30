import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUoComponent } from './edit-uo.component';

describe('EditUoComponent', () => {
  let component: EditUoComponent;
  let fixture: ComponentFixture<EditUoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
