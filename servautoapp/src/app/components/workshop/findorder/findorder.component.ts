import { Component, OnInit } from '@angular/core';
import { IOrderData } from 'src/app/models/orderdata';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-findorder',
  templateUrl: './findorder.component.html',
  styleUrls: ['./findorder.component.css']
})
export class FindorderComponent implements OnInit {
  status!:string;
  title!:string;
  email!:string;

  orders!:IOrderData[];
  constructor(private _customerService:CustomerService) { }

  async ngOnInit(): Promise<void> {
    this.status=localStorage.getItem("orderprogress")!;
    if(this.status=="Ordered"){
      this.title="New Orders"
    }
    else if(this.status=="Pending"){
      this.title="Pending Orders"
    }
    else{
      this.title="Completed Orders"
    }
    this.email=sessionStorage.getItem("userEmail")!;
    await this.getOrders(this.email,this.status);
    console.log(this.orders)
  }

  getOrders(email:string,progress:string){
    this._customerService.GetOrdersByEmailAndProgress(email,progress).subscribe(
      response=>{
        this.orders=response;
      }
    )
  }
   
}
