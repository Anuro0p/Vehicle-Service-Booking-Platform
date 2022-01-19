import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-businessservice',
  templateUrl: './businessservice.component.html',
  styleUrls: ['./businessservice.component.css']
})
export class BusinessserviceComponent implements OnInit {
  public data: Object[];
  public year:number;
  public xAxis: Object;
  public yAxis: Object;
  public chartTitle:string;
  public legend:Object;
  public markerSettings:Object;
  public tooltipSettings:Object;
  constructor( private _adminService:AdminService, private router:Router) { 
    
    this.chartTitle="Number Of Services Per Workshops";
    this.data = [
      { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
      { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
      { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
      { month: 'Jul', sales: 10 }, { month: 'Aug', sales: 55 },
      { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
      { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
    ];

    this.year=2020;

    this.tooltipSettings={
      enable:true
    };

      this.legend={
        visible:true
      };

      this.markerSettings={
        visible:true,
        dataLabel:{
        visible:true
        }
      };

      this.xAxis = {
            valueType: 'Category',
            title:'Workshop'
        };

        this.yAxis = {
          
          title:'Number Of Service'
      };
        console.log("abced");
  }


  ngOnInit(): void {
    this.getBusiness();
    this.data.forEach(function (value){
      let cdf=value;
      console.log(cdf);
      console.log(value.valueOf());
    });
    // console.log(abc);

    
    console.log("abced");
    console.log('ssdgfv');
    console.log("abced");
    console.log('ssdgfv');
    console.log("abced");
    console.log('ssdgfv');
    console.log("abced");
    console.log('ssdgfv');

  }

  getBusiness(){
    this._adminService.GetBusinessService(this.year).subscribe(
      response=>{
        this.data=response;
        
      }
    )
  }

  navigatehome(){
    this.router.navigate(['adminhome']);
  }

  navigatewelcome(){
    this.router.navigate(['welcomeadmin']);
  }


  logout(){
    sessionStorage.clear();
    this.router.navigate(['adminlogin']);
  }
}
