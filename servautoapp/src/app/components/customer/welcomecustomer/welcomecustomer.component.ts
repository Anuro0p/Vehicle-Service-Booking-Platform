import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcomecustomer',
  templateUrl: './welcomecustomer.component.html',
  styleUrls: ['./welcomecustomer.component.css']
})
export class WelcomecustomerComponent implements OnInit {
  element!:any;
   isShow!:boolean;
  showupdate:boolean=true;
  constructor() { }

  ngOnInit(): void {
    this.isShow=false;
    this.element = document.querySelector('.navbar');
    this.element.classList.add('navbar-dark');
  }

   @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
   this.element = document.querySelector('.navbar');
    if (window.pageYOffset > this.element.clientHeight) {
      this.element.classList.add('navbar-invers');
      this.element.classList.add('navbar-light');
      this.element.classList.remove('navbar-dark');
    } else {
      this.element.classList.remove('navbar-light');
      this.element.classList.remove('navbar-invers');
      this.element.classList.add('navbar-dark');
    }
  }
   tog(){
      // console.log(this.userData.pincode);
      
      // this.isShow=!this.isShow;
    }

     RouteOrder(){
      //  this.router.navigate(['test1']);
     }


     togupdate(){
      //  this.showupdate=!this.showupdate;
     }

     logout(){
      //  sessionStorage.clear();
      //  this.router.navigate(['home']);
     }


     ordernavigate(){
      //  this.router.navigate(['vieworders']);
     }
     public isMenuCollapsed=true;
  colapse(){
    if(this.isMenuCollapsed=true){
      this.isMenuCollapsed=false;
    }
    if(this.isMenuCollapsed=false){
      this.isMenuCollapsed=true;
    }

}


}
