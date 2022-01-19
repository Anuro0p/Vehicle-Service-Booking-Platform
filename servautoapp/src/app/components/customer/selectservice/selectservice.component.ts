import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICustomerVehicle } from 'src/app/models/customervehicle';
import { IServiceData } from 'src/app/models/servicedata';
import { IServiceTypes } from 'src/app/models/servicetypes';
import { CustomerService } from 'src/app/services/customer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-selectservice',
  templateUrl: './selectservice.component.html',
  styleUrls: ['./selectservice.component.css']
})
export class SelectserviceComponent implements OnInit {

  testdata!:ICustomerVehicle;
  email!:string;
  brand!:any;
  model!:any;
  type!:any;
  services!:IServiceTypes[];
  servicelist!:IServiceData[];
  selectedservicetypes:string="service1";
  constructor(private _userservice:UserService, private _customerService:CustomerService,private router:Router) { }

  async ngOnInit():Promise<void> {
    //this.GetWeather();
         this.element = document.querySelector('.navbar');
          this.email=sessionStorage.getItem('userEmail')!.toString();
         console.log(this.email);
         this.element.classList.add('navbar-light');
         this.element.classList.add('navbar-invers');
         await this.getLocalData();
         await this.getServiceType();
         await this.getServiceByBrandModelTypePincode(this.type,this.brand,this.model,this.selectedservicetypes);
         console.log(this.servicelist);
         this._customerService.getServiceByBrandModelType();
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

   getLocalData(){
    this.brand=localStorage.getItem("brand");
    this.model= localStorage.getItem("model");
    this.type= localStorage.getItem("type");
   }
   async getServiceType(){
    await this._userservice.getServiceTypes().subscribe(
      response=>{
        this.services=response;
      }
    )
  }

  getServiceByBrandModelTypePincode(type:string,Brand:string,model:string,serviceType:string){
    this._customerService.getServiceByBrandModelTypePincode(type,Brand,model,serviceType).subscribe(
      response=>{
        this.servicelist=response;
        console.log(response);
      }
    )
  }
  

  getdata(){
    this.getServiceByBrandModelTypePincode(this.type,this.brand,this.model,this.selectedservicetypes);
  }

  logs(){
    console.log(this.servicelist);
  }

  selectSer(servData:IServiceData){
    console.log(servData.email);
    localStorage.setItem("WorkshopEmail",servData.email);
    localStorage.setItem("Cost",servData.charge.toString());
    localStorage.setItem("days",servData.extimatedays.toString());
    localStorage.setItem("ServiceType",this.selectedservicetypes);
    this.router.navigate(["pickup"]);

  }

}
