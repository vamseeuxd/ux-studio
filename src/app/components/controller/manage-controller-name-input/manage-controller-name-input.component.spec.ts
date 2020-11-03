import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageControllerNameInputComponent } from './manage-controller-name-input.component';

describe('ManageFormNameComponent', () => {
  let component: ManageControllerNameInputComponent;
  let fixture: ComponentFixture<ManageControllerNameInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageControllerNameInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageControllerNameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
