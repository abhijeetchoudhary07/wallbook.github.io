import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPwdOtpComponent } from './forget-pwd-otp.component';

describe('ForgetPwdOtpComponent', () => {
  let component: ForgetPwdOtpComponent;
  let fixture: ComponentFixture<ForgetPwdOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPwdOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPwdOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
