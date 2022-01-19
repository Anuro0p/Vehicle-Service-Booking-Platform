import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICustomerVehicle } from 'src/app/models/customervehicle';
import { CustomerService } from 'src/app/services/customer.service';
import { WeatherService } from 'src/app/services/weather.service';
import { WorkshopserviceService } from 'src/app/services/workshopservice.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  customervehicle!:ICustomerVehicle[];
  email!:string;
  constructor(private _weatherservice:WeatherService,private _workshopService:WorkshopserviceService,private _customerService:CustomerService,private router:Router) { }

  ngOnInit():void {
   //this.GetWeather();
        this.element = document.querySelector('.navbar');
        this.email=sessionStorage.getItem('userEmail')!.toString();
        console.log(this.email);
        this.getCustomerVehicleByEmial(this.email);
      this.element.classList.add('navbar-light');
      this.element.classList.add('navbar-invers');
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
 
    getCustomerVehicleByEmial(email:string){
    this._customerService.getCustomerVehicle(email).subscribe(
      response=>{
        this.customervehicle=response;
      }
    )
  }

  logo(vehicle:ICustomerVehicle){
    console.log(vehicle.number);
    localStorage.setItem("brand",vehicle.brand);
    localStorage.setItem("model",vehicle.model);
    localStorage.setItem("type",vehicle.type);
    this.router.navigate(['selectservice']);
  }

}
