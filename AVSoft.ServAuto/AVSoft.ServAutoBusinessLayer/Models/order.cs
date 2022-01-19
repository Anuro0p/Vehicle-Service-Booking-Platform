using System;
using System.Collections.Generic;
using System.Text;

namespace AVSoft.ServAutoBusinessLayer.Models
{
    public class order
    {
        public string customerEmail { get; set; }
        public string serviceEmail { get; set; }
        public string type { get; set; }
        public string brand { get; set; }
        public string model { get; set; }
        public string serviceType { get; set; }
        public string pickupLocation { get; set; }
        public double extimateCost { get; set; }
        public string extimateDate { get; set; }
        public string progress { get; set; }
        public string phno { get; set; }
    }
}
