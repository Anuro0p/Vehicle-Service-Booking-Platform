import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ICovidData } from 'src/app/models/coviddata';
import { IWeatherData } from 'src/app/models/weatherdata';
import { WeatherService } from 'src/app/services/weather.service';
import { WorkshopserviceService } from 'src/app/services/workshopservice.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  
  sum:number=0;

  abc:any;

  // obj!:object[];
  
  public das = [{red:2,blue:1},
                 {red:1,blue:1},
                  {red:2,blue:1}]

  constructor(private _weatherservice:WeatherService,private _workshopService:WorkshopserviceService) { }

   async ngOnInit(): Promise<void> {
   //this.GetWeather();
   this.das.forEach(a=> this.sum+=a.red);
   // sum= sum+1;
   // sum+=1;
     this.GetDateData();
    
     await this.delay(1000);
      console.log("hello",this.covidData);
    
  }


 
  abcd!:IWeatherData[];
  GetWeather(){
    this._weatherservice.GetWeather().subscribe(
      Response=>{ 
        this.abcd=Response;
      }
    )
  }

  covidData!:ICovidData;
  async GetDateData(){
    this._weatherservice.GetDateData().subscribe(
      Response=>{ 
       this.covidData=Response;
         console.log(this.covidData);
         
      }
    )
    await this.delay(1000);
  }

   delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
