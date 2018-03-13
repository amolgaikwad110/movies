import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLoggedIn ;
  constructor(private user : UserService , private router : Router) { }

  ngOnInit() {
    console.log("Is user logged in " , this.user.getloggedIn());
    this.userLoggedIn = this.user.getloggedIn();
  }

  onLogout(){
    this.router.navigate(['']);
    
    console.log(this.user.getloggedIn())
  }
}
