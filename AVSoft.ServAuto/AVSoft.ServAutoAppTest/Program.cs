using System;
using AVSoft.ServAutoBusinessLayer;

namespace AVSoft.ServAutoAppTest
{
    public class Program
    {
        static BusinessLayer DAL;
        public static void Main(string[] args)
        {

            DAL = new BusinessLayer();

            DAL.GetServiceTable();
            

            Console.WriteLine("Hello World!");
        }
    }
}
