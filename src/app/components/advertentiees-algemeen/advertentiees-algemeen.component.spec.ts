import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertentieesAlgemeenComponent } from './advertentiees-algemeen.component';

describe('AdvertentieesAlgemeenComponent', () => {
  let component: AdvertentieesAlgemeenComponent;
  let fixture: ComponentFixture<AdvertentieesAlgemeenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertentieesAlgemeenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertentieesAlgemeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
