import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bestellingen2Component } from './bestellingen2.component';

describe('Bestellingen2Component', () => {
  let component: Bestellingen2Component;
  let fixture: ComponentFixture<Bestellingen2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bestellingen2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bestellingen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
