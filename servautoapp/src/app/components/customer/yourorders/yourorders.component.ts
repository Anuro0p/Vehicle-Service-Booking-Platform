import { Component, OnInit } from '@angular/core';
import { IOrderData } from 'src/app/models/orderdata';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-yourorders',
  templateUrl: './yourorders.component.html',
  styleUrls: ['./yourorders.component.css']
})
export class YourordersComponent implements OnInit {
  email!:string;
  year:number=2020;
  orderdata!:IOrderData[];
  constructor(private _customerService:CustomerService) { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('userEmail')!.toString();
    this.GetOrdersByEmailAndProgressAndYear()
  }
  element:any;
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

  GetOrdersByEmailAndProgressAndYear(){
    this._customerService.GetOrdersByEmailAndYear(this.email,this.year).subscribe(
      response=>{
        this.orderdata=response;
      }
    )
  }
 }
