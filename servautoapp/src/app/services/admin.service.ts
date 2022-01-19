import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginData } from '../models/logindata';
import { IServiceRegData } from '../models/servicereg';
import { IWorkshopRegData } from '../models/workshopregdata';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http: HttpClient) { }

  adminLogin(loginData:ILoginData):Observable<number>{
    let dataVar=this._http.put<number>('https://localhost:44392/api/admin/Adminlogin',loginData);
    return dataVar;
  }

  GetServiceTable():Observable<IServiceRegData[]>{
    let dataVar1 = this._http.get<IServiceRegData[]>('https://localhost:44313/api/v2/User/GetServiceTable');
    return dataVar1;
  }

  GetBusiness(year:number):Observable<Object[]>{
    let bus=this._http.get<Object[]>('https://localhost:44392/api/admin/GetBusiness?year='+year);
    return bus;
  }

  GetBusinessService(year:number):Observable<Object[]>{
    let busS=this._http.get<Object[]>('https://localhost:44392/api/admin/GetBusinessService?year='+year);
    return busS;
  }

  VerifyService(email:string):Observable<number>{
    
    let datavar3=this._http.get<number>('https://localhost:44313/api/v2/User/VerifyService?email='+email)
    return datavar3;
  }

  UpdateStatus(customeremail:string, serviceemail:string, model:string, servicetype:string, progress:string):Observable<number>{
    let datavar4=this._http.get<number>('https://localhost:44392/api/admin/UpdateStatus?customeremail='+customeremail+'&serviceemail='+serviceemail+'&model='+model+'&servicetype='+servicetype+'&progress='+progress);
    return datavar4;
  }

}
