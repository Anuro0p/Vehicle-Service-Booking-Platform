import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkshopregisterComponent } from './components/workshop/workshopregister/workshopregister.component';

const routes: Routes = [{path:'',component:WorkshopregisterComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
