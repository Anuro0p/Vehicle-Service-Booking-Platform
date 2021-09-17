using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AVSoft.ServAutoBusinessLayer;
using AVSoft.ServAutoBusinessLayer.Models;

namespace AVSoft.ServAutoServiceLayer.Controllers
{
    //localhos:4200/api/v2/Workshop/RegisterWorkshop
    [Route("api/v2/[controller]/[action]")]
    [ApiController]
    public class WorkshopController : Controller
    {
        WorkshopBusinessLayer WBL;
        public WorkshopController()
        {
            WBL = new WorkshopBusinessLayer();
        }

        //api/v2/Workshop/RegisterWorkshop
        [HttpPost]
        public JsonResult RegisterWorkshop(Models.WorkshopReg workshopReg)
        {
            WorkshopReg workshopRegBL=new WorkshopReg(workshopReg.Email,
                                                      workshopReg.Name,
                                                      workshopReg.Address,
                                                      workshopReg.State,
                                                      workshopReg.City,
                                                      workshopReg.Pin,
                                                      workshopReg.Phno,
                                                      workshopReg.Password,
                                                      workshopReg.Capacity
                                                      );

            return Json(WBL.RegisterWorkshop(workshopRegBL));

            
        }

    }
}
