import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICovidData } from 'src/app/models/coviddata';
import { ICustomerVehicle } from 'src/app/models/customervehicle';
import { IWeatherData } from 'src/app/models/weatherdata';
import { CustomerService } from 'src/app/services/customer.service';
import { WeatherService } from 'src/app/services/weather.service';
import { WorkshopserviceService } from 'src/app/services/workshopservice.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

 customervehicle!:ICustomerVehicle[];
  email!:string;
  constructor(private _weatherservice:WeatherService,private _workshopService:WorkshopserviceService,private _customerService:CustomerService,private router:Router) { }

  ngOnInit():void {
  }

}
