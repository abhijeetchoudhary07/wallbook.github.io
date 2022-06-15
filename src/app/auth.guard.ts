import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate():boolean
    {
      if(localStorage.getItem('loginuser')){
        return true;
      }
    else{
    this.route.navigate(['login'])
    return false;
    }
  }
  
}
