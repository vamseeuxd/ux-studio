import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveColumnComponent } from './responsive-column.component';

describe('ResponsiveColumnComponent', () => {
  let component: ResponsiveColumnComponent;
  let fixture: ComponentFixture<ResponsiveColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
