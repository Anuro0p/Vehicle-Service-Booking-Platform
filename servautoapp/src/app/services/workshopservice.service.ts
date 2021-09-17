import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IWorkshopRegData } from '../models/workshopregdata';
@Injectable({
  providedIn: 'root'
})
export class WorkshopserviceService {

  constructor(private _http:HttpClient) { }

  workshopRegister(workshopRegData:IWorkshopRegData):Observable<number>{
    let registerResponse= this._http.post<number>("https://localhost:44313/api/v2/Workshop/RegisterWorkshop",workshopRegData);
    console.log(workshopRegData);
    return registerResponse;
  }

}
