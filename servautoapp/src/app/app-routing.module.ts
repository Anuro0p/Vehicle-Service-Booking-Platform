import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './components/admin/adminhome/adminhome.component';
import { LinechartComponent } from './components/admin/linechart/linechart.component';
import { CustomerregisterComponent } from './components/customer/customerregister/customerregister.component';
import { PickupComponent } from './components/customer/pickup/pickup.component';
import { SelectserviceComponent } from './components/customer/selectservice/selectservice.component';
import { TestComponent } from './components/customer/test/test.component';
import { ViewordersComponent } from './components/customer/vieworders/vieworders.component';
import { WelcomecustomerComponent } from './components/customer/welcomecustomer/welcomecustomer.component';
import { YourordersComponent } from './components/customer/yourorders/yourorders.component';
import { HomeComponent } from './components/user/home/home.component';
import { OrderComponent } from './components/user/order/order.component';
import { WeatherComponent } from './components/weather/weather.component';
import { FindorderComponent } from './components/workshop/findorder/findorder.component';
import { WelcomeworkshopComponent } from './components/workshop/welcomeworkshop/welcomeworkshop.component';
import { WorkshopregisterComponent } from './components/workshop/workshopregister/workshopregister.component';

const routes: Routes = [{path:'',component:HomeComponent},
                        {path:'order',component:OrderComponent},
                        {path:'test',component:TestComponent},
                        {path:'workshop',component:WelcomeworkshopComponent},
                        {path:'customer',component:WelcomecustomerComponent},
                        {path:'weather',component:WeatherComponent},
                        {path:'registerworkshop',component:WorkshopregisterComponent},
                        {path:'registercustomer',component:CustomerregisterComponent},
                        {path:'selectservice',component:SelectserviceComponent},
                        {path:'pickup',component:PickupComponent},
                        {path:'vieworder',component:YourordersComponent},
                        {path:'findorder',component:FindorderComponent},
                        {path:'adminhome',component:AdminhomeComponent},
                        {path:'line',component:LinechartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
