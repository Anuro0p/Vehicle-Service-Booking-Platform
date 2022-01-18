import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginData } from 'src/app/models/logindata';
import { UserService } from 'src/app/services/user.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private userService:UserService,private router:Router,private homeComponent:HomeComponent) { }

  ngOnInit(): void {
  }

  closs(){
    this.homeComponent.closs();
  }
  status:number=0;

  UserLogin(loginForm:NgForm){
    let loginData:ILoginData={email:(loginForm.value.email).toString(),
      password:(loginForm.value.password).toString()};
      this.userService.LoginUser(loginData).subscribe(
        response=>{
          this.status=response;
          if (this.status==1) {
            alert("Logged in as Customer");
            sessionStorage.setItem('userEmail',loginData.email);
            this.router.navigate(['/customer']);
          }
          else if(this.status==2) {
            alert("Logged In as Service");
            sessionStorage.setItem('userEmail',loginData.email);
            this.router.navigate(['/workshop']);
          }
          else 
            alert("User not fount")
          
      });
  }

}
