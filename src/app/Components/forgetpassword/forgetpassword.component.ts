import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/Services/shared.service';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor( private route:Router, private toastr:ToastrService, private sharedService:SharedService) { }

  @ViewChild('forgetPasswordForm') forgetPasswordForm!:NgForm
  contact!:contact
  ngOnInit(): void {
    this.contact ={
      phone:""
    }
  }

  
  onCancel(){
    this.route.navigate(['login'])
  }

  onsubmit(){
    if(this.forgetPasswordForm.valid && this.matchforgetphone()){
    console.log(this.forgetPasswordForm.value);
    this.toastr.success("Phone Number Verified Successfully")
    this.sharedService.setData(this.forgetPasswordForm.value.phone)
    this.route.navigate(['forgetpwdotp'])
  }
  else{
    this.toastr.error("The Phone Number you entered is wrong")
  }
  }

  matchforgetphone(){
    var userPhone = JSON.parse(localStorage.getItem('signupUser')|| '{}')
    for(let i=0; i<userPhone.length;i++){
      if(userPhone[i].phone == this.forgetPasswordForm.value.phone){
        return userPhone[i].phone;
      }
    }
  }

}

export class contact{
  phone!:string
}