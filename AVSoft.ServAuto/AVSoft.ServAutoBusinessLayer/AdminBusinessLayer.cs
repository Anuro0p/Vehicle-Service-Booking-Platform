using System;
using System.Collections.Generic;
using System.Text;

using AVSoft.ServAutoDataAccessLayer;

namespace AVSoft.ServAutoBusinessLayer
{
    public class AdminBusinessLayer
    {
        AdminDataAccessLayer ADAL;

        public AdminBusinessLayer()
        {
            ADAL = new AdminDataAccessLayer();
        }
    }
}
