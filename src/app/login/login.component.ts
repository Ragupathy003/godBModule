import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  userLog:any={};
  onLogin(){
    if(this.userLog.userEmail=="ragurio@gmail.com" && this.userLog.userPassword=="ragurio"){
   alert("Login success");
   this.route.navigate(['/listing']);
    }
    else{
      alert("Login failure");
    }
    console.log("userlog",this.userLog)
  }
}
