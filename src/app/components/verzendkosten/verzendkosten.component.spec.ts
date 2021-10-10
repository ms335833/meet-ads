import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerzendkostenComponent } from './verzendkosten.component';

describe('VerzendkostenComponent', () => {
  let component: VerzendkostenComponent;
  let fixture: ComponentFixture<VerzendkostenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerzendkostenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerzendkostenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
