using System;
using System.Collections.Generic;
using System.Text;

using AVSoft.ServAutoDataAccessLayer;

namespace AVSoft.ServAutoBusinessLayer
{
    public class CustomerBusinessLayer
    {
        CustomerDataAccessLayer CDAL;

        public CustomerBusinessLayer()
        {
            CDAL = new CustomerDataAccessLayer();
        }
    }
}
