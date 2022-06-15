import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  timeOut:any;
  name='';
  userid='';
  constructor( private route:Router, private toastr:ToastrService, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    //  Parameters for routing ....How to make dynamic URL Routes and multiple parameters
    this.activateRoute.params.subscribe(params =>{
      this.name=params['name'];
      this.userid=params['id'];
    })

    // Queryparameters example 

    // this.activateRoute.queryParams.subscribe(params =>{
    //   this.name=params['name'];
    //   this.userid=params['id'];
    // })
  }






  logOut(){
    this.toastr.success('Logout Successfully')
    this.timeOut=setTimeout(() => {
      localStorage.removeItem('loginuser')
      this.route.navigate(['login'])
    }, 3000);
  }
}
