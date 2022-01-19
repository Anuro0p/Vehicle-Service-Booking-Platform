import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomeworkshop',
  templateUrl: './welcomeworkshop.component.html',
  styleUrls: ['./welcomeworkshop.component.css']
})
export class WelcomeworkshopComponent implements OnInit {
  isShow:boolean=true;
  email:string="abcd";
  progress!:string;
  element!:any;
  shwOrder:boolean=true;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('userEmail')!.toString();
    console.log(this.email);
    // this.GetOrdersByEmailAndProgress("adh@amil.com","Orderd");
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

  public isMenuCollapsed=true;
  colapse(){
    if(this.isMenuCollapsed=true){
      this.isMenuCollapsed=false;
    }
    if(this.isMenuCollapsed=false){
      this.isMenuCollapsed=true;
    }
}


tog(){
  this.isShow=!this.isShow;
}

tog1(){
  this.shwOrder=!this.shwOrder;
}

GetNewOrders(){
  localStorage.setItem("orderprogress","Ordered");
  this.router.navigate(['findorder'])

}
GetPendingOrders(){
  localStorage.setItem("orderprogress","Pending");
  this.router.navigate(['findorder'])
}
GetCompletedOrders(){
  localStorage.setItem("orderprogress","Completed");
  this.router.navigate(['findorder'])
}
}
