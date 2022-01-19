import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IOrderData } from 'src/app/models/orderdata';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.css']
})
export class PickupComponent implements OnInit {
  
  brand:string="";
  model!:string;
  type!:string;
  cost!:number;
  days!:number;
  WorkshopEmail!:string;
  CustomerEmail!:string;
  serviceType!:string;
  progress:string="Ordered";
  pickupLocation!:string;
  orderdata!:IOrderData;

  constructor(private _customerService:CustomerService,private router:Router) { }

 async ngOnInit(): Promise<void> {
    this.element = document.querySelector('.navbar');
    this.element.classList.add('navbar-light');
    this.element.classList.add('navbar-invers');
    this.brand=localStorage.getItem("brand")!;
    console.log(this.brand);
    await this.getLocalData();
    // await this.setObject();
    console.log("hello")
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

   status!:number;
   PlaceOrder(){
    let ordedata:IOrderData={customeremail:sessionStorage.getItem('userEmail')!.toString(),
      serviceemail:this.WorkshopEmail,
      type:this.type,
      brand:this.brand,
      model:this.model,
      serviceType:this.serviceType,
      pickupLocation:this.pickupLocation,
      extimateCost:this.cost,
      days:this.days,
      progress:("Ordered")};
    console.log(ordedata)
    this._customerService.NewOrder(ordedata).subscribe(
      response=>{
        this.status=response;
        if (this.status==1) {
          alert("Successfully registered");
          this.router.navigate(['customer']);
          
        }
        else 
          alert("Oops something went wrong..!")
      }
    );
  }

   getLocalData(){
    this.brand=localStorage.getItem("brand")!;
    this.model= localStorage.getItem("model")!;
    this.type= localStorage.getItem("type")!;
    this.cost=Number(localStorage.getItem("Cost"))!;
    this.days=Number(localStorage.getItem("days"))!;
    this.serviceType=localStorage.getItem("ServiceType")!;
    this.WorkshopEmail=localStorage.getItem("WorkshopEmail")!;
    this.CustomerEmail=sessionStorage.getItem("userEmail")!;
    console.log(this.CustomerEmail)
   }

   setObject(){
    this.orderdata.brand=this.brand!;
    this.orderdata.model=this.model!;
    this.orderdata.type=this.type!;
    this.orderdata.extimateCost=this.cost!;
    this.orderdata.days=this.days!;
    this.orderdata.serviceType=this.serviceType!;
    this.orderdata.serviceemail=this.WorkshopEmail!;
    this.orderdata.customeremail=this.CustomerEmail!;
    this.orderdata.progress=this.progress!;
   }
}
