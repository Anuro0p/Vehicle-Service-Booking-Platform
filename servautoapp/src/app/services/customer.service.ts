import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomerRegData } from '../models/customerregdata';
import { ICustomerVehicle } from '../models/customervehicle';
import { IOrderData } from '../models/orderdata';
import { IServiceData } from '../models/servicedata';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http:HttpClient) { }

  addNewCustomerVehicle(customervehicle:ICustomerVehicle):Observable<number>{
    let dataVar1=this._http.post<number>('https://localhost:44313/api/v2/Customer/RegisterCustomerVehicle',customervehicle);
    return dataVar1;
  }

  registerCustomer(customerregdata:ICustomerRegData):Observable<number>{
    let dataVar=this._http.post<number>('https://localhost:44313/api/v2/Customer/RegisterCustomer',customerregdata);
    return dataVar;
  }

  getCustomerVehicle(email:string):Observable<ICustomerVehicle[]>{
    let dataVar2=this._http.get<ICustomerVehicle[]>('https://localhost:44313/api/v2/Customer/GetCustomerVehicleByEmail?email='+email);
    return dataVar2;
  }

    getServiceByBrandModelTypePincode(type:string, brand:string, model:string, serviceType:string):Observable<IServiceData[]>{
      let servdata=this._http.get<IServiceData[]>('https://localhost:44313/api/v2/Customer/GetServiceByBrandModelTypePincode?type='+type+'&brand='+brand+'&model='+model+'&serviceType='+serviceType);
      console.log("hello");
      console.log(type);
      console.log(brand);
      console.log(model);
      console.log(serviceType);
      console.log("hello");
      console.log(servdata);
      return servdata;
      
  }

  getServiceByBrandModelType():Observable<IServiceData[]>{
      let servdata=this._http.get<IServiceData[]>('https://localhost:44313/api/v2/Customer/GetServiceByBrandModelTypePincode?type=car&brand=brand1&model=model1&serviceType=service1');
      console.log("hello");
      console.log(servdata);
      return servdata;
      
  }

  getUserDataByEmail(email:string):Observable<ICustomerRegData>{
    let customerdata=this._http.get<ICustomerRegData>('https://localhost:44313/api/v2/Customer/GetUserDataByEmail?email='+email)
    return customerdata;
  }


  NewOrder(orderdata:IOrderData):Observable<number>{
    let dataVar3=this._http.post<number>('https://localhost:44313/api/v2/Customer/NewOrder',orderdata);
    return dataVar3;
  }

   GetOrdersByEmailAndYear(email:string,year:number):Observable<IOrderData[]>{
    let orderdata=this._http.get<IOrderData[]>('https://localhost:44313/api/v2/Customer/GetOrdersByEmailAndYear?email='+email+'&year='+year);
    console.log(email);
    return orderdata;
  }

  GetOrdersByEmailAndProgress(email:string,progress:string):Observable<IOrderData[]>{
    let orderdata=this._http.get<IOrderData[]>('https://localhost:44313/api/v2/Customer/GetOrdersByEmailAndProgress?email='+email+'&progress='+progress);
    console.log(email);
    return orderdata;
  }

}
