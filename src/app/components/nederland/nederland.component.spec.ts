import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NederlandComponent } from './nederland.component';

describe('NederlandComponent', () => {
  let component: NederlandComponent;
  let fixture: ComponentFixture<NederlandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NederlandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NederlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
