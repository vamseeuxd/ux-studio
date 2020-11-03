import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFormNameInputComponent } from './manage-form-name-input.component';

describe('ManageFormNameComponent', () => {
  let component: ManageFormNameInputComponent;
  let fixture: ComponentFixture<ManageFormNameInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageFormNameInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFormNameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
