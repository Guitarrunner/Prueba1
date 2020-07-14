import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyHospitalComponent } from './modify-hospital.component';

describe('ModifyHospitalComponent', () => {
  let component: ModifyHospitalComponent;
  let fixture: ComponentFixture<ModifyHospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyHospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
