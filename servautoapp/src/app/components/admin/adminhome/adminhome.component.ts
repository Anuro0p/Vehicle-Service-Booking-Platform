import { Component, OnInit } from '@angular/core';
import { IServiceRegData } from 'src/app/models/servicereg';
import { IWorkshopRegData } from 'src/app/models/workshopregdata';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  worskshopreg!:IServiceRegData[];
  constructor(private _adminservice:AdminService) { }

  ngOnInit(): void {
    this.getWorkshop();
    console.log(this.worskshopreg)
  }

  getWorkshop(){
    this._adminservice.GetServiceTable().subscribe(
      response=>{
        this.worskshopreg=response;
      }
    )
  }
  status!:number;
  verify(workshopregdata:IServiceRegData){
    console.log(workshopregdata.email);
    this._adminservice.VerifyService(workshopregdata.email).subscribe(
      response=>{
        console.log("hello");
        this.status=response;
      }
    )
  }

}
