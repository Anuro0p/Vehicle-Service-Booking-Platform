using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AVSoft.ServAutoServiceLayer.Models
{
    public class CustomerReg
    {
        public string Email { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string Pin { get; set; }
        public string Phno { get; set; }
        public string Password { get; set; }
    }
}
