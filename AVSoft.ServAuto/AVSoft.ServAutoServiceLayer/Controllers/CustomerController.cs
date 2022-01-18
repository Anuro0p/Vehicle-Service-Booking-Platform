using AVSoft.ServAutoBusinessLayer;
using AVSoft.ServAutoBusinessLayer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AVSoft.ServAutoServiceLayer.Controllers
{
    [Route("api/v2/[controller]/[action]")]
    [ApiController]
    public class CustomerController : Controller
    {
        CustomerBusinessLayer CBL;
        public CustomerController()
        {
            CBL = new CustomerBusinessLayer();
        }

        [HttpPost]
        public JsonResult RegisterCustomer(Models.CustomerReg customerReg)
        {
            CustomerReg customerRegBL = new CustomerReg(customerReg.Email,
                                                      customerReg.Name,
                                                      customerReg.Address,
                                                      customerReg.State,
                                                      customerReg.City,
                                                      customerReg.Pin,
                                                      customerReg.Phno,
                                                      customerReg.Password
                                                      );

            return Json(CBL.RegisterCustomer(customerRegBL));


        }

        [HttpPost]
        public JsonResult RegisterCustomerVehicle(Models.CustomerVehicle customerVehicle)
        {
            CustomerVehicle customerVehicleBL = new CustomerVehicle(customerVehicle.Email,
                                                                 customerVehicle.Brand,
                                                                 customerVehicle.VehicleName,
                                                                 customerVehicle.Model,
                                                                 customerVehicle.Type,
                                                                 customerVehicle.Number
                                                                );

            return Json(CBL.RegisterCustomerVehicle(customerVehicleBL));


        }

    }
}
