using System;
using System.Collections.Generic;
using System.Text;
using System.Data;

using AVSoft.ServAutoDataAccessLayer;


namespace AVSoft.ServAutoBusinessLayer
{
    
    public class WorkshopBusinessLayer
    {
        WorkshopDataAccessLayer WDAL;
        public WorkshopBusinessLayer()
        {
            WDAL = new WorkshopDataAccessLayer();
        }

        public int RegisterWorkshop(Models.WorkshopReg workshopReg)
        {
            //workshopReg.Email = "asdasd";

            return WDAL.RegisterWorkshop(workshopReg.Email, 
                                         workshopReg.Name, 
                                         workshopReg.Address,
                                         workshopReg.State, 
                                         workshopReg.City, 
                                         workshopReg.Pin, 
                                         workshopReg.Phno, 
                                         workshopReg.Password, 
                                         workshopReg.Capacity 
                                        );
        }

    }
}
