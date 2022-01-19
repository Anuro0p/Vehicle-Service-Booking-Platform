import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ICustomerRegData } from 'src/app/models/customerregdata';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customerregister',
  templateUrl: './customerregister.component.html',
  styleUrls: ['./customerregister.component.css']
})
export class CustomerregisterComponent implements OnInit {

  constructor(private _customerservice:CustomerService,private router:Router) { }

  ngOnInit(): void {
  }

  status:number =-5;
  customerRegister(workshopRegisterForm:NgForm){
      let customerregdata:ICustomerRegData={email:(workshopRegisterForm.value.email).toString(),
                                                    name:(workshopRegisterForm.value.name).toString(),
                                                    address:(workshopRegisterForm.value.address).toString(),
                                                    city:(workshopRegisterForm.value.city).toString(),
                                                    state:(workshopRegisterForm.value.state).toString(),
                                                    pin:(workshopRegisterForm.value.pin).toString(),
                                                    phno:(workshopRegisterForm.value.phno).toString(),
                                                    password:(workshopRegisterForm.value.password).toString(),}

      this._customerservice.registerCustomer(customerregdata).subscribe(
        Response=>{ 
          this.status=Response;
          if(this.status==1)
          {
                        alert("Registration success!")
                        sessionStorage.setItem('userEmail',customerregdata.email);
                        this.router.navigate(['/customer']);
          }
          else{
            alert("Registration failed")
          }

        }
      )

  }

}
