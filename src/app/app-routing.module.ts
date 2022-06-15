import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ChangepasswordComponent } from './Components/changepassword/changepassword.component';
import { ForgetPwdOtpComponent } from './Components/forget-pwd-otp/forget-pwd-otp.component';
import { ForgetpasswordComponent } from './Components/forgetpassword/forgetpassword.component';
import { FriendsComponent } from './Components/friends/friends.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { OtpverificationComponent } from './Components/otpverification/otpverification.component';
import { SignupComponent } from './Components/signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',canActivate:[AuthGuard], component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'forgetpwdotp',component:ForgetPwdOtpComponent},
  {path:'otp',component:OtpverificationComponent},
  // {path:'friends',canActivate:[AuthGuard], component:FriendsComponent},
  {path:'friends/:name',canActivate:[AuthGuard], component:FriendsComponent},
  {path:'friends/:name/:id',canActivate:[AuthGuard], component:FriendsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
