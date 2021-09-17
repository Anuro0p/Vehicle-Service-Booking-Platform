import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IWorkshopRegData } from 'src/app/models/workshopregdata';
import { WorkshopserviceService } from 'src/app/services/workshopservice.service';

@Component({
  selector: 'app-workshopregister',
  templateUrl: './workshopregister.component.html',
  styleUrls: ['./workshopregister.component.css']
})
export class WorkshopregisterComponent implements OnInit {

  constructor(private _workshopservice:WorkshopserviceService) { }

  ngOnInit(): void {
  }

  status:number =-5;
  customerRegister(workshopRegisterForm:NgForm){
      let workshopRegData:IWorkshopRegData={email:(workshopRegisterForm.value.email).toString(),
                                                    name:(workshopRegisterForm.value.name).toString(),
                                                    address:(workshopRegisterForm.value.address).toString(),
                                                    city:(workshopRegisterForm.value.city).toString(),
                                                    state:(workshopRegisterForm.value.state).toString(),
                                                    pin:(workshopRegisterForm.value.pin).toString(),
                                                    phno:(workshopRegisterForm.value.phno).toString(),
                                                    password:(workshopRegisterForm.value.password).toString(),
                                                    capacity:parseInt((workshopRegisterForm.value.capacity))}

                                                    alert(workshopRegData.capacity);

      this._workshopservice.workshopRegister(workshopRegData).subscribe(
        Response=>{ 
          this.status=Response;
          alert(this.status);

        }
      )

  }

}
