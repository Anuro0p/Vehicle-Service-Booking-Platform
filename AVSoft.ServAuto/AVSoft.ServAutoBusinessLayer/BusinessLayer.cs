using System;
using System.Collections.Generic;
using System.Text;

using AVSoft.ServAutoDataAccessLayer;

namespace AVSoft.ServAutoBusinessLayer
{
    public class BusinessLayer
    {
        DataAccessLayer DAL;
        public BusinessLayer()
        {
            DAL = new DataAccessLayer();
        }
    }
}
