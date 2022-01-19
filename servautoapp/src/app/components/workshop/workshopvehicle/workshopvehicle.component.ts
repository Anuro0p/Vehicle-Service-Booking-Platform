import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IServiceTypes } from 'src/app/models/servicetypes';
import { IServiceVehicle } from 'src/app/models/servicevehicle';
import { IVehicleBrand } from 'src/app/models/vehiclebrand';
import { IVehicleModel } from 'src/app/models/vehiclemodel';
import { CustomerService } from 'src/app/services/customer.service';
import { UserService } from 'src/app/services/user.service';
import { WorkshopserviceService } from 'src/app/services/workshopservice.service';

@Component({
  selector: 'app-workshopvehicle',
  templateUrl: './workshopvehicle.component.html',
  styleUrls: ['./workshopvehicle.component.css']
})
export class WorkshopvehicleComponent implements OnInit {
  vehiclebrand!:IVehicleBrand[];
  vehiclemodel!:IVehicleModel[];
  services!:IServiceTypes[];
  abc!:string;
  stype!:string[];
  service!:string[];
  selectedtype:string="Select Type";
  selectedbrand:string="Select Brand";
  selectedmodel:string="Select Model";
  selectedservicetypes:string="select service";

  shw="true";
  isshw="true";
  typeshw="true";
  priceshw="true";
  dayshw="true";
  constructor(private _userservice:UserService,private _customerservice:CustomerService,private _workshopservice:WorkshopserviceService ) { }

  ngOnInit(): void {
    this.getServiceType();
    console.log(this.services)
  }
  selectType()
  {
    console.log(this.selectedtype);
    this.getBrandByType(this.selectedtype);
    
    this.isshw="false";
    this.shw="true";
    this.typeshw="true";
    this.priceshw="true";
    this.dayshw="true";
  }

  selectBrand()
  {
    console.log(this.selectedbrand);
    this.getModelByTypeAndBrand(this.selectedtype,this.selectedbrand);
    this.shw="false";
    this.typeshw="true";
    this.priceshw="true";
    this.dayshw="true";
    
  }



  selectModel(){
    
    console.log(this.selectedmodel)
    console.log(this.services)
  
    this.typeshw="false";
    this.priceshw="false";
    this.dayshw="true";
  }

  selectServiceTypes(){
    console.log(this.selectedservicetypes);
    this.priceshw="false";
    this.dayshw="true";
  }

  selecetPrice(){
    this.dayshw="false";

  }


  async getServiceType(){
    await this._userservice.getServiceTypes().subscribe(
      response=>{
        this.services=response;
      }
    )
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
  addNewServiceVehicle(newServiceVehicleForm:NgForm){
    let servicevehile:IServiceVehicle={email:sessionStorage.getItem('userEmail')!.toString(),
    brand:(newServiceVehicleForm.value.brand).toString(),
    vehicleName:(newServiceVehicleForm.value.vehicleName).toString(),
    model:(newServiceVehicleForm.value.model).toString(),
    type:(newServiceVehicleForm.value.type).toString(),
    serviceType:(newServiceVehicleForm.value.types).toString(),
    charge:Number((newServiceVehicleForm.value.charge)),
    extimatedays:Number((newServiceVehicleForm.value.extimatedays)),}
    console.log(servicevehile);
    this._workshopservice.addNewServiceVehicle(servicevehile).subscribe(
      response=>{
        this.status=response;
        if (this.status==1) { alert("success");}
        else if(this.status==-1){alert("alrady regstrd");}
        else if(this.status==-4){alert("oops");}
        alert("okkkkkk");
        
      });
  
    }

  tog(){

  }
}
