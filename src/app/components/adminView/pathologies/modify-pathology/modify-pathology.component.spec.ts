import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPathologyComponent } from './modify-pathology.component';

describe('ModifyPathologyComponent', () => {
  let component: ModifyPathologyComponent;
  let fixture: ComponentFixture<ModifyPathologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyPathologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyPathologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
