import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICovidData } from '../models/coviddata';
import { IWeatherData } from '../models/weatherdata';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http:HttpClient) { }
 


  GetWeather():Observable<IWeatherData[]>{
    let weatherResponse= this._http.get<IWeatherData[]>("https://localhost:44313/weatherforecast");
    //console.log(weatherResponse);
    return weatherResponse;
  }

  GetDateData():Observable<ICovidData>{
    let abc= this._http.get<ICovidData>("https://corona.lmao.ninja/v2/historical/Afghanistan?lastdays=30");
    return abc;
  }

}
