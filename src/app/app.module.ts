import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOtpInputModule } from 'ng-otp-input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './Components/home/home.component';
import { SignupComponent } from './Components/signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword.component';
import { OtpverificationComponent } from './Components/otpverification/otpverification.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { FormsModule } from '@angular/forms';
import { FriendsComponent } from './Components/friends/friends.component';
import { ChangepasswordComponent } from './Components/changepassword/changepassword.component';
import { ForgetPwdOtpComponent } from './Components/forget-pwd-otp/forget-pwd-otp.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ForgetpasswordComponent,
    OtpverificationComponent,
    FriendsComponent,
    ChangepasswordComponent,
    ForgetPwdOtpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule,
    NgOtpInputModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
