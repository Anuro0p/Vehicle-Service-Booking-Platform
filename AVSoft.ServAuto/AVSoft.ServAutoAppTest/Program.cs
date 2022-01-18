using System;
using AVSoft.ServAutoDataAccessLayer;

namespace AVSoft.ServAutoAppTest
{
    public class Program
    {
        static DataAccessLayer DAL;
        public static void Main(string[] args)
        {

            DAL = new DataAccessLayer();

            int a = DAL.LoginUser("ananthu@gmail.com", "abcd");
            Console.WriteLine(a);
            a = Console.Read();

            Console.WriteLine("Hello World!");
        }
    }
}
