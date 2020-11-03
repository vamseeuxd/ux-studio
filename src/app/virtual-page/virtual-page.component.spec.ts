import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualPageComponent } from './virtual-page.component';

describe('VirtualPageComponent', () => {
  let component: VirtualPageComponent;
  let fixture: ComponentFixture<VirtualPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
