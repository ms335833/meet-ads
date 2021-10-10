import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertentiesComponent } from './advertenties.component';

describe('AdvertentiesComponent', () => {
  let component: AdvertentiesComponent;
  let fixture: ComponentFixture<AdvertentiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertentiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertentiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
