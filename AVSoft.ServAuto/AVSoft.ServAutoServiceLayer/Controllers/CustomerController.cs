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

        [HttpGet]
        public JsonResult GetCustomerVehicleByEmail(string email)
        {
            return Json(CBL.GetCustomerVehicleByEmail(email));
        }

        [HttpGet]
        public JsonResult GetServiceByBrandModelTypePincode(string type, string brand, string model, string serviceType)
        {
            return Json(CBL.GetServiceByBrandModelTypePincode(type, brand, model, serviceType));
        }

        [HttpGet]
        public JsonResult GetUserDataByEmail(string email)
        {
            return Json(CBL.GetUserDataByEmail(email));
        }


        [HttpPost]
        public JsonResult NewOrder(Models.OrderData orderData)
        {
            return Json(CBL.NewOrder(orderData.customerEmail, orderData.serviceEmail, orderData.type, orderData.brand, orderData.model, orderData.serviceType, orderData.pickupLocation, orderData.extimateCost, orderData.days, orderData.progress));
        }

        [HttpGet]
        public JsonResult GetOrdersByEmailAndYear(string email)
        {
            return Json(CBL.GetOrdersByEmailAndYear(email,100));
        }

        [HttpGet]
        public JsonResult GetOrdersByEmailAndProgress(string email,string progress)
        {
            return Json(CBL.GetOrdersByWorkshopEmailAndProgress(email, progress));
        }


    }
}
