import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../user.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router : Router , private user : UserService) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault();
    console.log(event);
    let userName = event.target.elements[0].value;
    let password = event.target.elements[1].value;
    console.log("Username :" , userName , "Password :" , password);
    if(userName == "" && password == ""){
      this.user.setLoggedIn();
      this.router.navigate(['home']);
    }else{
      // this.user.setLoggedIn();
      this.router.navigate(['/']);      
    }
  }
}
