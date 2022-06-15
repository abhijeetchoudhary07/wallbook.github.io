import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/Services/shared.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-otpverification',
  templateUrl: './otpverification.component.html',
  styleUrls: ['./otpverification.component.css'],
})
export class OtpverificationComponent implements OnInit {
  otp!: string;
  data: any;
  timer: number = 60;
  resend = false;
  ifVal: any = '';
  timeOut: any;
  constructor(
    private toastr: ToastrService,
    private route: Router,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.data = this.sharedService.getData();
    console.log(this.data);
    
    const Itval = setInterval(() => {
      this.timer = --(this.timer);
      if (this.timer <= 0) {
        clearInterval(Itval);
        this.resend = true;
      }
    }, 1000);
  }

  @ViewChild('ngOtpInput') OTP!:NgForm; ngOtpInput: any;
  config = {
    allowNumbersOnly: false,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '50px',
      height: '50px',
    },
  };

  onOtpChange(otp: any) {
    this.otp = otp;
    
  }

  onSubmit() {
    if (this.otp.length == 4 && this.signupUserWithOtp()  ) {
      
        this.toastr.success('Otp Verified Successfully');
        this.timeOut = setTimeout(() => {
          this.route.navigate(['login']);
        }, 3000);
    } else if(this.otp.length!=4){
      this.toastr.error('Please Fill The  Details Of Otp');
    }
    else if(!this.signupUserWithOtp()){
      this.toastr.error("Otp you entered is incorrect. Please Enter The Correct Otp")
    }
  }



  disable() {
    this.resend = false;
    this.timer = 60;
    this.ifVal = setInterval(() => {
      this.timer = --this.timer;
      if (this.timer <= 0) {
        clearInterval(this.ifVal);
        this.resend = true;
      }
    }, 1000);
  }


  signupUserWithOtp() {
    var signupHumanWithMail = JSON.parse(localStorage.getItem('signupUser') || '{}');
    for (let i = 0; i < signupHumanWithMail.length; i++) {
      if(signupHumanWithMail[i].otp == this.otp ){
        return signupHumanWithMail[i].otp;
      }
    }
  }


  // checkForEmail(){
  //   var checkEmail = JSON.parse(localStorage.getItem('signupUser') || '{}');
  //   var test =checkEmail.filter((res:any)=>{
  //     return res.email == this.data
  //   })
  //   if(test.lenght !==0){
  //     alert("Email matched")
  //   }
    
  // }

}
