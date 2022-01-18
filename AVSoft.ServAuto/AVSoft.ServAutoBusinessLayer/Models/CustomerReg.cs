using System;
using System.Collections.Generic;
using System.Text;

namespace AVSoft.ServAutoBusinessLayer.Models
{
    public class CustomerReg
    {
        public string Email { get; private set; }
        public string Name { get; private set; }
        public string Address { get; private set; }
        public string State { get; private set; }
        public string City { get; private set; }
        public string Pin { get; private set; }
        public string Phno { get; private set; }
        public string Password { get; private set; }

        public CustomerReg(string email, string name, string address, string state, string city, string pin, string phno, string password)
        {
            Email = email;
            Name = name;
            Address = address;
            State = state;
            City = city;
            Pin = pin;
            Phno = phno;
            Password = password;
        }


    }
}
