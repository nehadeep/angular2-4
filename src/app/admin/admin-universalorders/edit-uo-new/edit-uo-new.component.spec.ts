import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUoNewComponent } from './edit-uo-new.component';

describe('EditUoNewComponent', () => {
  let component: EditUoNewComponent;
  let fixture: ComponentFixture<EditUoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
