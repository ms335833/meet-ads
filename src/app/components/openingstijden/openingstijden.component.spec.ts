import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningstijdenComponent } from './openingstijden.component';

describe('OpeningstijdenComponent', () => {
  let component: OpeningstijdenComponent;
  let fixture: ComponentFixture<OpeningstijdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpeningstijdenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningstijdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
