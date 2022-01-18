import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ICustomerVehicle } from 'src/app/models/customervehicle';
import { IVehicleBrand } from 'src/app/models/vehiclebrand';
import { IVehicleModel } from 'src/app/models/vehiclemodel';
import { CustomerService } from 'src/app/services/customer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-customervehicle',
  templateUrl: './customervehicle.component.html',
  styleUrls: ['./customervehicle.component.css']
})
export class CustomervehicleComponent implements OnInit {
  vehiclebrand!:IVehicleBrand[];
  vehiclemodel!:IVehicleModel[];
  selectedtype:string="Select Type";
  selectedbrand:string="Select Brand";
  selectedmodel:string="Select Model";
  vehicleNumber:string="";
  shw="true";
  isshw="true";
  constructor(private _userservice:UserService,private _customerservice:CustomerService) { }

  ngOnInit(): void {
  }


selectType()
  {
    console.log(this.selectedtype);
    this.getBrandByType(this.selectedtype);
    this.selectedmodel="Select Model";
    this.selectedbrand="Select Brand";
    this.isshw="false";
    this.shw="true";
  }

  selectBrand()
  {
    console.log(this.selectedbrand);
    this.getModelByTypeAndBrand(this.selectedtype,this.selectedbrand);
    this.selectedmodel="Select Model";
    this.shw="false";
  }

  getBrandByType(type:string){
    this._userservice.getBrandByType(type).subscribe(
      response=>{
        this.vehiclebrand=response;
      }
    )
  }

  getModelByTypeAndBrand(type:string,brand:string){
    this._userservice.GetModelByTypeAndBrand(type,brand).subscribe(
      response=>{
        this.vehiclemodel=response;
      }
    )
  }

  status!:number;
  addNewCustomervehicle(addNewCustomervehicle:NgForm){
    let customervehile:ICustomerVehicle={email:sessionStorage.getItem('userEmail')!.toString(),
    brand:(addNewCustomervehicle.value.brand).toString(),
    vehicleName:(addNewCustomervehicle.value.vehicleName).toString(),
    model:(addNewCustomervehicle.value.model).toString(),
    type:(addNewCustomervehicle.value.type).toString(),
    number:(addNewCustomervehicle.value.vehicleNumber).toString()}
    this._customerservice.addNewCustomerVehicle(customervehile).subscribe(
      response=>{
        this.status=response;
        if (this.status==1) { alert("success");}
        else if(this.status==-1){alert("alrady regstrd");}
      });
    
    }

tog(){
    //  this.welcome.tog();
   }
}
