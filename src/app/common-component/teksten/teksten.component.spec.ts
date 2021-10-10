import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekstenComponent } from './teksten.component';

describe('TekstenComponent', () => {
  let component: TekstenComponent;
  let fixture: ComponentFixture<TekstenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TekstenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TekstenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
