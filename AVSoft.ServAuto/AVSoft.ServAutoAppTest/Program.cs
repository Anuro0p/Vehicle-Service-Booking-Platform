using System;
using AVSoft.ServAutoDataAccessLayer;

namespace AVSoft.ServAutoAppTest
{
    public class Program
    {
        static WorkshopDataAccessLayer DAL;
        public static void Main(string[] args)
        {

            DAL = new WorkshopDataAccessLayer();

            int a = DAL.RegisterWorkshop("ananthu@gmail.com", "ana Autoworks", "ana Autoworks Nedumbaseri ", "Kerala", "Kochi","123123", "1234878782", "1234", 11);
            Console.WriteLine(a);
            a = Console.Read();

            Console.WriteLine("Hello World!");
        }
    }
}
