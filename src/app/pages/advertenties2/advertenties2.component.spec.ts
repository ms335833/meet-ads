import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Advertenties2Component } from './advertenties2.component';

describe('Advertenties2Component', () => {
  let component: Advertenties2Component;
  let fixture: ComponentFixture<Advertenties2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Advertenties2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Advertenties2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
