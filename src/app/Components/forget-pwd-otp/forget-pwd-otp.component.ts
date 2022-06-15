import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/Services/shared.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-forget-pwd-otp',
  templateUrl: './forget-pwd-otp.component.html',
  styleUrls: ['./forget-pwd-otp.component.css']
})
export class ForgetPwdOtpComponent implements OnInit {
  otp!: string;
  OTp:string ="1234"
  data!:string;
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
    this.data=this.sharedService.getData()
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

  onOtpSubmit(){
    if(this.otp.length==4 && this.otp == this.OTp){
      this.toastr.success('otp verified successfully')
      // console.log(this.otp);
      this.route.navigate(['changepassword'])
    }
    else if(this.otp.length!=4){
      this.toastr.error("Please fill all the details of otp")
    }
    else if(this.otp!=this.OTp){
      this.toastr.error("We did not find any such type of otp. Please fill the correct details of otp")
    }
  }

}
