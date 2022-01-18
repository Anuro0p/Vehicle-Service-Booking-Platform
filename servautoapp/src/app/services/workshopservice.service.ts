import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IWorkshopRegData } from '../models/workshopregdata';
import { IServiceVehicle } from '../models/servicevehicle';
@Injectable({
  providedIn: 'root'
})
export class WorkshopserviceService {

  constructor(private _http:HttpClient) { }
  abcd!:string;
  
  

  workshopRegister(workshopRegData:IWorkshopRegData):Observable<number>{
    let registerResponse= this._http.post<number>("https://localhost:44313/api/v2/Workshop/RegisterWorkshop",workshopRegData);
    //console.log(workshopRegData);
    return registerResponse;
  }

  addNewServiceVehicle(servicevehicle:IServiceVehicle):Observable<number>{
    let dataVar1=this._http.post<number>('https://localhost:44313/api/v2/Workshop/RegisterWorkshopVehicle',servicevehicle);
    return dataVar1;
  }


}
