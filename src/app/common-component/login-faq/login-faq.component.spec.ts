import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFaqComponent } from './login-faq.component';

describe('LoginFaqComponent', () => {
  let component: LoginFaqComponent;
  let fixture: ComponentFixture<LoginFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
