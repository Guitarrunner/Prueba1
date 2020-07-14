import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyRegionComponent } from './modify-region.component';

describe('ModifyRegionComponent', () => {
  let component: ModifyRegionComponent;
  let fixture: ComponentFixture<ModifyRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
