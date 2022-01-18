using System;
using System.Collections.Generic;
using System.Text;

namespace AVSoft.ServAutoBusinessLayer.Models
{
    public class CustomerVehicle
    {
        public string Email { get; private set; }
        public string Brand { get; private set; }
        public string VehicleName { get; private set; }
        public string Model { get; private set; }
        public string Type { get; private set; }
        public string Number { get; private set; }

        public CustomerVehicle(string email, string brand, string vehiclename, string model, string type, string number)
        {
            Email = email;
            Brand = brand;
            VehicleName = vehiclename;
            Model = model;
            Type = type;
            Number = number;
        }
    }
}
