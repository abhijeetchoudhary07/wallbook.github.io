import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  timeOut:any;
  constructor(private toastr:ToastrService, private route:Router) { }

  userDetails=['Rohit','Naman','Ajeet','Arun','Aman','Rohan','Vaishali','Naveen']
//  imageDetails=['./../../../assets/IMG2.jpg','./../../../assets/IMG4.jpg','./../../../assets/IMG3.jpg','./../../../assets/IMG5.jpg']
imagedetails=[
  {user:'./../../../assets/IMG2.jpg',
    name:'Jack',
    image:'./../../../assets/IMG2.jpg' },

    {user:'./../../../assets/IMG3.jpg',
    name:'Daniel',
    image:'./../../../assets/IMG3.jpg' },

    {user:'./../../../assets/IMG4.jpg',
    name:'Kane',
    image:'./../../../assets/IMG4.jpg' },
    
    {user:'./../../../assets/IMG5.jpg',
    name:'Osman',
    image:'./../../../assets/IMG5.jpg' },
  ]
  ngOnInit(): void {
  }

  onloggingOut(){
    this.toastr.success('Successfully Logout')
    localStorage.removeItem('loginuser')
    this.timeOut=setTimeout(() => {
      this.route.navigate(['login'])
    }, 2000);
  }
  
}
