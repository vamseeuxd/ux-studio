import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSlideNavComponent } from './left-slide-nav.component';

describe('LeftSlideNavComponent', () => {
  let component: LeftSlideNavComponent;
  let fixture: ComponentFixture<LeftSlideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSlideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSlideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
