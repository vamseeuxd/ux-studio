import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayoutSelectorComponent } from './app-layout-selector.component';

describe('AppLayoutSelectorComponent', () => {
  let component: AppLayoutSelectorComponent;
  let fixture: ComponentFixture<AppLayoutSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLayoutSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLayoutSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
