import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomerVehicle } from '../models/customervehicle';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http:HttpClient) { }

  addNewCustomerVehicle(customervehicle:ICustomerVehicle):Observable<number>{
    let dataVar1=this._http.post<number>('https://localhost:44313/api/v2/Customer/RegisterCustomerVehicle',customervehicle);
    return dataVar1;
  }
}
