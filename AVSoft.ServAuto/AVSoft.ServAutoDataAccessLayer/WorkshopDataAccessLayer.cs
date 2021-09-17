using System;
using System.Collections.Generic;
using System.Text;

using System.Data;

using MySql.Data;
using MySql.Data.MySqlClient;

namespace AVSoft.ServAutoDataAccessLayer
{
    public class WorkshopDataAccessLayer
    {
        string connectionString;
        MySqlConnection ServAutoConn;
        MySqlCommand ServAutoComm;
        MySqlDataAdapter ServAutoAdapter;

        public WorkshopDataAccessLayer()
        {
            connectionString = "server=localhost;user id=root;database=servautodb;pwd=;";
            ServAutoConn = new MySqlConnection(connectionString);
            ServAutoComm = new MySqlCommand();
            ServAutoComm.Connection = ServAutoConn;
            ServAutoAdapter = new MySqlDataAdapter(ServAutoComm);
        }



        //register Workshop
        public int RegisterWorkshop(string email, string name, string address, string state, string city, string pin, string phno, string password, int capacity)
        {
            int returnval = 0;

            ServAutoComm.CommandText = "usp_register_workshop";
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
            ServAutoComm.Parameters.AddWithValue("p_capacity", capacity);
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
