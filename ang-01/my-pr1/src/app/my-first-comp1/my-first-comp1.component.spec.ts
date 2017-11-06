import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstComp1Component } from './my-first-comp1.component';

describe('MyFirstComp1Component', () => {
  let component: MyFirstComp1Component;
  let fixture: ComponentFixture<MyFirstComp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFirstComp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
