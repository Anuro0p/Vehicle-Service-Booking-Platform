import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginData } from '../models/logindata';
import { IServiceTypes } from '../models/servicetypes';
import { IVehicleBrand } from '../models/vehiclebrand';
import { IVehicleModel } from '../models/vehiclemodel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  LoginUser(loginData:ILoginData):Observable<number>{
    let loginResponse= this._http.post<number>("https://localhost:44313/api/v2/User/LoginUser",loginData);
    //console.log(workshopRegData);
    return loginResponse;
  }

  getBrandByType(brand:string):Observable<IVehicleBrand[]>{
    let brandData=this._http.get<IVehicleBrand[]>('https://localhost:44313/api/v2/User/GetBrandByType?type='+brand);
    return brandData;
  }

   GetModelByTypeAndBrand(type:string ,brand:string):Observable<IVehicleModel[]>{
    let modelData=this._http.get<IVehicleModel[]>('https://localhost:44313/api/v2/User/GetModelByTypeAndBrand?type='+type+'&brand='+brand);
    return modelData;                                                        
  }

   getServiceTypes():Observable<IServiceTypes[]>{
    let typeData=this._http.get<IServiceTypes[]>('https://localhost:44313/api/v2/User/GetServiceTypes');
    return typeData;
  }
  getServiceType():Observable<string[]>{
    let typeData=this._http.get<string[]>('https://localhost:44313/api/v2/User/GetServiceType');
    return typeData;
  }
}
