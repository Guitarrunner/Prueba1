import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyStateComponent } from './modify-state.component';

describe('ModifyStateComponent', () => {
  let component: ModifyStateComponent;
  let fixture: ComponentFixture<ModifyStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
