import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgemeenComponent } from './algemeen.component';

describe('AlgemeenComponent', () => {
  let component: AlgemeenComponent;
  let fixture: ComponentFixture<AlgemeenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgemeenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgemeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
