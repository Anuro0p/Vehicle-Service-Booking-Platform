using System;
using System.Collections.Generic;
using System.Text;

using System.Data;

using MySql.Data;
using MySql.Data.MySqlClient;

namespace AVSoft.ServAutoDataAccessLayer
{
    public class CustomerDataAccessLayer
    {
        string connectionString;
        MySqlConnection ServAutoConn;
        MySqlCommand ServAutoComm;
        MySqlDataAdapter ServAutoAdapter;

        public CustomerDataAccessLayer()
        {
            connectionString = "server=localhost;user id=root;database=servautodb;pwd=root;";
            ServAutoConn = new MySqlConnection(connectionString);
            ServAutoComm = new MySqlCommand();
            ServAutoComm.Connection = ServAutoConn;
            ServAutoAdapter = new MySqlDataAdapter(ServAutoComm);
        }


        //RegisterWorkshop
        public int RegisterCustomer(string email, string name, string address, string state, string city, string pin, string phno, string password)
        {
            int returnval = 0;

            ServAutoComm.CommandText = "usp_register_customer";
            ServAutoComm.CommandType = CommandType.StoredProcedure;
            //input parameters
            ServAutoComm.Parameters.AddWithValue("p_email", email);
            ServAutoComm.Parameters.AddWithValue("p_name", name);
            ServAutoComm.Parameters.AddWithValue("p_address", address);
            ServAutoComm.Parameters.AddWithValue("p_state", state);
            ServAutoComm.Parameters.AddWithValue("p_city", city);
            ServAutoComm.Parameters.AddWithValue("p_pin", pin);
            ServAutoComm.Parameters.AddWithValue("p_phno", phno);
            ServAutoComm.Parameters.AddWithValue("p_password", password);
            //output Parameters
            MySqlParameter outVal = new MySqlParameter("retval", MySqlDbType.Int32);
            outVal.Direction = ParameterDirection.Output;
            ServAutoComm.Parameters.Add(outVal);

            try
            {
                ServAutoConn.Open();
                ServAutoComm.ExecuteNonQuery();
                returnval = Convert.ToInt32(outVal.Value);
            }
            catch (Exception ex)
            {
                returnval = -4;
                Console.WriteLine(ex.Message);
            }

            return returnval;
        }


        //Add Customer Vehicle
        public int RegisterCustomerVehicle(string email, string brand, string vehiclename, string model, string type, string number)
        {
            int returnval = 0;

            ServAutoComm.CommandText = "usp_register_customer_vehicle";
            ServAutoComm.CommandType = CommandType.StoredProcedure;
            //input parameters
            ServAutoComm.Parameters.AddWithValue("p_email", email);
            ServAutoComm.Parameters.AddWithValue("p_brand", brand);
            ServAutoComm.Parameters.AddWithValue("p_vehiclename", vehiclename);
            ServAutoComm.Parameters.AddWithValue("p_model", model);
            ServAutoComm.Parameters.AddWithValue("p_type", type);
            ServAutoComm.Parameters.AddWithValue("p_number", number);
            //output Parameters
            MySqlParameter outVal = new MySqlParameter("retval", MySqlDbType.Int32);
            outVal.Direction = ParameterDirection.Output;
            ServAutoComm.Parameters.Add(outVal);

            try
            {
                ServAutoConn.Open();
                ServAutoComm.ExecuteNonQuery();
                returnval = Convert.ToInt32(outVal.Value);
            }
            catch (Exception ex)
            {
                returnval = -4;
                Console.WriteLine(ex.Message);
            }

            return returnval;
        }

        public DataTable GetCustomerVehicleByEmail(string email)
        {
            DataTable userDataTable = new DataTable();
            ServAutoComm.CommandText = "select * from customervehicle where email=@email";
            ServAutoComm.CommandType = CommandType.Text;
            ServAutoComm.Parameters.AddWithValue("@email", email);
            ServAutoAdapter = new MySqlDataAdapter(ServAutoComm);
            try
            {
                ServAutoAdapter.Fill(userDataTable);

            }
            catch (Exception)
            {

                userDataTable = null;
            }
            return userDataTable;
        }

        public DataTable GetServiceByBrandModelTypePincode(string type, string brand, string model, string serviceType)
        {
            DataTable ServiceDataTable = new DataTable();
            ServAutoComm.CommandText = "select workshopreg.name , workshopreg.Address , workshopreg.phno ,servicevehicle.type,servicevehicle.brand,servicevehicle.Servicetype, servicevehicle.Model ,workshopreg.Email, servicevehicle.Charge ,servicevehicle.Extimatedays from workshopreg inner Join servicevehicle on workshopreg.email = servicevehicle.email where servicevehicle.Type=@type and servicevehicle.brand=@brand and servicevehicle.model=@model and servicevehicle.Servicetype=@serviceType  and workshopreg.count<=workshopreg.capacity  ";
            ServAutoComm.CommandType = CommandType.Text;
            ServAutoComm.Parameters.AddWithValue("@type", type);
            ServAutoComm.Parameters.AddWithValue("@brand", brand);
            ServAutoComm.Parameters.AddWithValue("@model", model);
            ServAutoComm.Parameters.AddWithValue("@serviceType", serviceType);
            ServAutoAdapter = new MySqlDataAdapter(ServAutoComm);
            try
            {
                ServAutoAdapter.Fill(ServiceDataTable);
                foreach (DataRow item in ServiceDataTable.Rows)
                {
                    Console.WriteLine(item["name"].ToString());
                    Console.WriteLine("everythings fine");
                }

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);

                ServiceDataTable = null;
            }
            return ServiceDataTable;

        }

        public DataTable GetUserByEmail(string email)
        {
            DataTable userDataTable = new DataTable();
            ServAutoComm.CommandText = "select * from customerreg where email=@email";
            ServAutoComm.CommandType = CommandType.Text;
            ServAutoComm.Parameters.AddWithValue("@email", email);
            ServAutoAdapter = new MySqlDataAdapter(ServAutoComm);
            try
            {
                ServAutoAdapter.Fill(userDataTable);
                foreach (DataRow item in userDataTable.Rows)
                {
                    Console.WriteLine(item["email"].ToString());
                    Console.WriteLine("everythings fine");
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                userDataTable = null;
            }
            return userDataTable;
        }

        public int NewOrder(string customerEmail, string serviceEmail, string type, string brand, string model, string serviceType, string pickupLocation, double extimateCost, string estimateDate, string progress, int year, string month, int day)
        {
            int returnval = 0;
            Console.WriteLine(customerEmail, serviceEmail, type, brand, model, serviceType, pickupLocation, extimateCost, estimateDate, progress, year, month, day);
            ServAutoComm.CommandText = "usp_new_order";
            ServAutoComm.CommandType = CommandType.StoredProcedure;
            ServAutoComm.Parameters.AddWithValue("p_customeremail", customerEmail);
            ServAutoComm.Parameters.AddWithValue("p_serviceemail", serviceEmail);
            ServAutoComm.Parameters.AddWithValue("p_type", type);
            ServAutoComm.Parameters.AddWithValue("p_brand", brand);
            ServAutoComm.Parameters.AddWithValue("p_model", model);
            ServAutoComm.Parameters.AddWithValue("p_servicetype", serviceType);
            ServAutoComm.Parameters.AddWithValue("p_pickuplocation", pickupLocation);
            ServAutoComm.Parameters.AddWithValue("p_extimatecost", extimateCost);
            ServAutoComm.Parameters.AddWithValue("p_estimatedate", estimateDate);
            ServAutoComm.Parameters.AddWithValue("p_progress", progress);
            ServAutoComm.Parameters.AddWithValue("p_year", year);
            ServAutoComm.Parameters.AddWithValue("p_month", month);
            ServAutoComm.Parameters.AddWithValue("p_day", day);
            try
            {
                ServAutoConn.Open();
                ServAutoComm.ExecuteNonQuery();
                returnval = 1;

            }
            catch (Exception ex)
            {
                returnval = -4;
                Console.WriteLine(ex.Message);
            }
            finally
            {
                ServAutoConn.Close();
            }
            return returnval;


        }

        public DataTable GetOrderByCustomerEmail(string email)
        {
            DataTable orderDataTable = new DataTable();
            ServAutoComm.CommandText = "select * from orders where email = @email ";
            ServAutoComm.CommandType = CommandType.Text;
            ServAutoComm.Parameters.AddWithValue("@email", email);
            ServAutoAdapter = new MySqlDataAdapter(ServAutoComm);
            try
            {
                ServAutoAdapter.Fill(orderDataTable);
                foreach (DataRow item in orderDataTable.Rows)
                {
                    Console.WriteLine(item["email"].ToString());
                    Console.WriteLine("everythings fine");
                }

            }
            catch (Exception)
            {

                orderDataTable = null;
            }
            return orderDataTable;
        }

        public DataTable GetOrderByWorkshopEmailAndProgress(string email, string progress)
        {
            DataTable orderDataTable = new DataTable();
            ServAutoComm.CommandText = "select * from orders where WorkshopEmail = @email and Progress=@progress ";
            ServAutoComm.CommandType = CommandType.Text;
            ServAutoComm.Parameters.AddWithValue("@email", email);
            ServAutoComm.Parameters.AddWithValue("@progress", progress);
            ServAutoAdapter = new MySqlDataAdapter(ServAutoComm);
            try
            {
                ServAutoAdapter.Fill(orderDataTable);
                foreach (DataRow item in orderDataTable.Rows)
                {
                    Console.WriteLine(item["email"].ToString());
                    Console.WriteLine("everythings fine");
                }

            }
            catch (Exception)
            {

                orderDataTable = null;
            }
            return orderDataTable;
        }

    }
}
