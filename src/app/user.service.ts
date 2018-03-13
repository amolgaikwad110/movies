import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private userName ;
  private isLoggedIn;
  constructor() { 
    this.isLoggedIn = false;
  }
  setLoggedIn(){
    this.isLoggedIn = true;
  }
  getloggedIn(){
    return this.isLoggedIn;
  }
}
