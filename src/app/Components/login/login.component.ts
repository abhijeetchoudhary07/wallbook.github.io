import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/Services/shared.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm!: FormGroup;
  timeOut: any;
  isSubmitted = false;
  signupForm!: FormGroup;
  data: any;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private route: Router,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private sharedSerice: SharedService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {

    if(JSON.parse(localStorage.getItem('loginuser')||'{}')!=''){
      this.route.navigate(['home'])
    }

    this.loginForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone:['',[Validators.required,Validators.minLength(6)]]
    });
  }

  get h() {
    return this.loginForm.controls;
  }

  onLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.toastr.error('Deny Please Fill the Details');
      return;
    } else if (this.loginForm.valid) {
      
      if (this.signupUserWithMail()) {
        this.addloginUser(this.loginForm.value);
        this.toastr.success('Login Successfully');
        this.route.navigate(['home']);
      }
      else{
        this.toastr.error("email or password is incorrect")
      }
    }
    
  }

  open(content: any) {
    this.modalService.open(content);
  }

  get s() {
    return this.signupForm.controls;
  }

  onSignup(d:any) {
    this.isSubmitted = true;
    if (this.signupForm.invalid) {
      this.toastr.error('Deny Please fill the Details for Signup');
    } else if (this.signupForm.valid) {
      this.toastr.success('Signup Successfully');
      var generatedOtp = Math.floor(1000 + Math.random() * 9000);
      var uniqueId = Math.floor(1000 + Math.random()* 9000)
      this.signupForm.value.id = uniqueId
      this.signupForm.value.otp = generatedOtp;
      // this.compareSiginInEmail()
      this.addUser(this.signupForm.value);
      this.timeOut = setTimeout(() => {
        this.sharedSerice.setData(this.signupForm.value.email);
        
        this.route.navigate(['otp']);
        d=d('Cross click')
      }, 3000);
    }
    
  }


  // Storing multiple signin users in local storage
  addUser(user) {
    var Users;
    let storedUser = localStorage.getItem('signupUser');
    console.log(storedUser);
    
    if (storedUser) {
      Users = JSON.parse(localStorage.getItem('signupUser') || '{}');
      Users = [user, ...Users];
    } else {
      Users = [user];
    }
    localStorage.setItem('signupUser', JSON.stringify(Users));
  }
// This is for comparing if user is already is exist 
  // compareSiginInEmail(){
  //   var storedUser = JSON.parse(localStorage.getItem('signupUser')||'{}')
  //   var test  = storedUser.filter((res:any)=>{
  //     return res.email == this.signupForm.value.email
  //   })
  //   if(test.length !==0){
  //     this.toastr.show("Already Existed")
  //   }
  //   else{
      
  //     this.addUser(this.signupForm.value);
  //   }
  // }

  // Storing multiple login users in local storage
  addloginUser(USERS) {
    var loginUser;
    let loginStoredUser = localStorage.getItem('loginuser');
    if (loginStoredUser) {
      loginUser = JSON.parse(localStorage.getItem('loginuser') || '{}');
      loginUser = [USERS, ...loginUser];
    } else {
      loginUser = [USERS];
    }
    localStorage.setItem('loginuser', JSON.stringify(loginUser));
  }

  // For matching the value of login and signIn
  signupUserWithMail() {
    var signupHumanWithMail = JSON.parse(localStorage.getItem('signupUser') || '{}');
    for (let i = 0; i < signupHumanWithMail.length; i++) {
      if (signupHumanWithMail[i].email ==  this.loginForm.value.Email && signupHumanWithMail[i].password == this.loginForm.value.Password ){
        return signupHumanWithMail[i];
      }
    }
  }



}
