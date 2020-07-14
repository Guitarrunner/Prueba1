import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalCenterComponent } from './hospital-center.component';

describe('HospitalCenterComponent', () => {
  let component: HospitalCenterComponent;
  let fixture: ComponentFixture<HospitalCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
