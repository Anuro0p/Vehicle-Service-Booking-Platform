import { Component, OnInit } from '@angular/core';
import { IOrderData } from 'src/app/models/orderdata';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrls: ['./vieworders.component.css']
})
export class ViewordersComponent implements OnInit {

  email!:string;
  year:number=2020;
  orderdata!:IOrderData[];
  constructor(private _customerService:CustomerService) { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('userEmail')!.toString();
    this.GetOrdersByEmailAndProgressAndYear()
  }

  GetOrdersByEmailAndProgressAndYear(){
    this._customerService.GetOrdersByEmailAndYear(this.email,this.year).subscribe(
      response=>{
        this.orderdata=response;
      }
    )
  }

  



}