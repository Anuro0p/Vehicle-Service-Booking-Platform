import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkshopregisterComponent } from './components/workshop/workshopregister/workshopregister.component';
import { HttpClientModule,HttpClient  } from '@angular/common/http';
import { WelcomeworkshopComponent } from './components/workshop/welcomeworkshop/welcomeworkshop.component';
import { WeatherComponent } from './components/weather/weather.component';
import { UserloginComponent } from './components/user/userlogin/userlogin.component';
import { HomeComponent } from './components/user/home/home.component';
import { FeedbackComponent } from './components/user/feedback/feedback.component';
import { WelcomecustomerComponent } from './components/customer/welcomecustomer/welcomecustomer.component';
import { CustomervehicleComponent } from './components/customer/customervehicle/customervehicle.component';
import { CustomerupdateComponent } from './components/customer/customerupdate/customerupdate.component';
import { WorkshopvehicleComponent } from './components/workshop/workshopvehicle/workshopvehicle.component';





@NgModule({
  declarations: [
    AppComponent,
    WorkshopregisterComponent,
    WelcomeworkshopComponent,
    WeatherComponent,
    UserloginComponent,
    HomeComponent,
    FeedbackComponent,
    WelcomecustomerComponent,
    CustomervehicleComponent,
    CustomerupdateComponent,
    WorkshopvehicleComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
