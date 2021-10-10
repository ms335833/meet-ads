import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfbeeldingenComponent } from './afbeeldingen.component';

describe('AfbeeldingenComponent', () => {
  let component: AfbeeldingenComponent;
  let fixture: ComponentFixture<AfbeeldingenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfbeeldingenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfbeeldingenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
