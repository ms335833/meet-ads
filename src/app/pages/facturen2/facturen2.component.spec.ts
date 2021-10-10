import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Facturen2Component } from './facturen2.component';

describe('Facturen2Component', () => {
  let component: Facturen2Component;
  let fixture: ComponentFixture<Facturen2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Facturen2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Facturen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
