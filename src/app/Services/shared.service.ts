import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  constructor() { }

  public data:any=''
  
  setData(data){
  this.data=data;
  }

  getData(){
    return this.data;
  }


  

}

