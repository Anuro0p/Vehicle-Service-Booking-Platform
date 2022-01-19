using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AVSoft.ServAutoServiceLayer.Models
{
    public class OrderData
    {
        public string customerEmail { get; set; }
        public string serviceEmail { get; set; }
        public string type { get; set; }
        public string brand { get; set; }
        public string model { get; set; }
        public string serviceType { get; set; }
        public string pickupLocation { get; set; }
        public double extimateCost { get; set; }
        public int days { get; set; }
        public string progress { get; set; }
       
    }
}
