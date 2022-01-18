using System;
using System.Collections.Generic;
using System.Text;

using AVSoft.ServAutoDataAccessLayer;

namespace AVSoft.ServAutoBusinessLayer
{
    public class CustomerBusinessLayer
    {
        CustomerDataAccessLayer CDAL;

        public CustomerBusinessLayer()
        {
            CDAL = new CustomerDataAccessLayer();
            
        }

        public int RegisterCustomer(Models.CustomerReg customerReg)
        {
            //workshopReg.Email = "asdasd";

            return CDAL.RegisterCustomer(customerReg.Email,
                                         customerReg.Name,
                                         customerReg.Address,
                                         customerReg.State,
                                         customerReg.City,
                                         customerReg.Pin,
                                         customerReg.Phno,
                                         customerReg.Password
                                        );
        }

        public int RegisterCustomerVehicle(Models.CustomerVehicle customerVehicle)
        {
            //workshopReg.Email = "asdasd";

            return CDAL.RegisterCustomerVehicle(customerVehicle.Email,
                                         customerVehicle.Brand,
                                         customerVehicle.VehicleName,
                                         customerVehicle.Model,
                                         customerVehicle.Type,
                                         customerVehicle.Number
                                        );
        }
    }
}
