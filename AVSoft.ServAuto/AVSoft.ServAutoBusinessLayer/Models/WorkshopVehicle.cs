using System;
using System.Collections.Generic;
using System.Text;

namespace AVSoft.ServAutoBusinessLayer.Models
{
    public class WorkshopVehicle
    {
        public string Email { get; private set; }
        public string Brand { get; private set; }
        public string VehicleName { get; private set; }
        public string Model { get; private set; }
        public string Type { get; private set; }
        public string ServiceType { get; private set; }
        public double Charge { get; private set; }
        public int ExtimateDays { get; private set; }
        public WorkshopVehicle(string email, string brand, string vehiclename, string model, string type, string serviceType, double charge, int extimateDays)
        {
            Email = email;
            Brand = brand;
            VehicleName = vehiclename;
            Model = model;
            Type = type;
            ServiceType = serviceType;
            Charge = charge;
            ExtimateDays = extimateDays;
        }
    }
}
