using System;
using System.Collections.Generic;
using System.Text;

namespace AVSoft.ServAutoBusinessLayer.Models
{
    public class LoginData
    {
        public string Email { get; private set; }
        public string Password { get; private set; }

        public LoginData(string email, string password)
        {
            Email = email;
            Password = password;
        }

    }
}
