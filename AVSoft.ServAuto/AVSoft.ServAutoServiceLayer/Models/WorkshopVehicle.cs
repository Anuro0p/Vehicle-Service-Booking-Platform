using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AVSoft.ServAutoServiceLayer.Models
{
    public class WorkshopVehicle
    {
        public string Email { get;  set; }
        public string Brand { get;  set; }
        public string VehicleName { get;  set; }
        public string Model { get;  set; }
        public string Type { get;  set; }
        public string ServiceType { get;  set; }
        public double Charge { get;  set; }
        public int ExtimateDays { get;  set; }

    }
}
