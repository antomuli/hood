import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoodComponent } from './hood.component';

describe('HoodComponent', () => {
  let component: HoodComponent;
  let fixture: ComponentFixture<HoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
