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
        MySqlDataAdapter ServAutoAdapte;

        public CustomerDataAccessLayer()
        {
            connectionString = "server=localhost;user id=root;database=servautodb;pwd=root;";
            ServAutoConn = new MySqlConnection(connectionString);
            ServAutoComm = new MySqlCommand();
            ServAutoComm.Connection = ServAutoConn;
            ServAutoAdapte = new MySqlDataAdapter(ServAutoComm);
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

    }
}
