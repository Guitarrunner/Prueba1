import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientStateComponent } from './patient-state.component';

describe('PatientStateComponent', () => {
  let component: PatientStateComponent;
  let fixture: ComponentFixture<PatientStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
