import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatermerkComponent } from './watermerk.component';

describe('WatermerkComponent', () => {
  let component: WatermerkComponent;
  let fixture: ComponentFixture<WatermerkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatermerkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatermerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
