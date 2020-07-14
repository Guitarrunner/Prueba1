import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyContactsComponent } from './modify-contacts.component';

describe('ModifyContactsComponent', () => {
  let component: ModifyContactsComponent;
  let fixture: ComponentFixture<ModifyContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
