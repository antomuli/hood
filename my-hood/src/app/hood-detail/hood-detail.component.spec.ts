import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoodDetailComponent } from './hood-detail.component';

describe('HoodDetailComponent', () => {
  let component: HoodDetailComponent;
  let fixture: ComponentFixture<HoodDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoodDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
