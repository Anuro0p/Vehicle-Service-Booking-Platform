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
    public class UserController : Controller
    {
        BusinessLayer BL;

        public UserController()
        {
            BL = new BusinessLayer();
        }
        [HttpPost]
        public JsonResult loginUser(Models.LoginData loginData)
        {
            LoginData loginDataBL = new LoginData(loginData.Email,
                                                                 loginData.Password
                                                                );

            return Json(BL.LoginUser(loginDataBL));


        }

        [HttpGet]
        public JsonResult GetVehicleTypes()
        {
            return Json(BL.GetVehicleTypes());
        }

        [HttpGet]
        public JsonResult GetBrandByType(string type)
        {
            return Json(BL.GetBrandByType(type));
        }

        [HttpGet]
        public JsonResult GetModelByTypeAndBrand(string type, string brand)
        {
            return Json(BL.GetmodelByTypeAndBrand(type, brand));
        }

        [HttpGet]
        public JsonResult GetServiceTypes()
        {
            return Json(BL.GetServiceTypes());
        }
    }
}
