import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomecustomerComponent } from './components/customer/welcomecustomer/welcomecustomer.component';
import { HomeComponent } from './components/user/home/home.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WelcomeworkshopComponent } from './components/workshop/welcomeworkshop/welcomeworkshop.component';
import { WorkshopregisterComponent } from './components/workshop/workshopregister/workshopregister.component';

const routes: Routes = [{path:'',component:HomeComponent},
                        {path:'workshop',component:WelcomeworkshopComponent},
                        {path:'customer',component:WelcomecustomerComponent},
                        {path:'weather',component:WeatherComponent},
                        {path:'registerworkshop',component:WorkshopregisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
