import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/Services/shared.service';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private toastr:ToastrService,private route:Router, private sharedService:SharedService) { }
  hide;
  userData;
  @ViewChild('changePasswordform') changePasswordform!:NgForm
  cpDetails!:cpDetails
  ngOnInit(): void {
    this.hide=true;
    this.userData=this.sharedService.getData()
    this.cpDetails ={
      password:"",
      confPassword:""
    }
  }
  
  onSubmitChangePassword(){
    if(this.changePasswordform.valid){
      if(this.changePasswordform.value.password!=this.changePasswordform.value.confPassword){
        this.toastr.error("Your Password shold be equal to Confirm Password")
      }
      else{
        
        this.toastr.success("Password Match Successfully")
        this.storedSigninUser()
        this.route.navigate(['login'])
      }
    }
    else {
      alert("Please enter the details")
    }
  }


  onCancel(){
    this.changePasswordform.reset()
    return
  }


  
  storedSigninUser(){
    var storedUser = JSON.parse(localStorage.getItem('signupUser') || '{}');
    for(let i =0; i<storedUser.length; i++){
      if(storedUser[i].phone==this.userData){
      storedUser[i].password=this.changePasswordform.value.confPassword;
      }
    }
    localStorage.setItem('signupUser',JSON.stringify(storedUser));
    console.log(JSON.parse(localStorage.getItem('signupUser') || '{}'));
  }
  

}
export class cpDetails {
  password!:string;
  confPassword!:string;
}