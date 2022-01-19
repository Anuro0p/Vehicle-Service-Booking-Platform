using System;
using System.Collections.Generic;
using System.Text;

using System.Data;

using MySql.Data;
using MySql.Data.MySqlClient;

namespace AVSoft.ServAutoDataAccessLayer
{
    public class DataAccessLayer
    {
        string connectionString;
        MySqlConnection ServAutoConn;
        MySqlCommand ServAutoComm;
        MySqlDataAdapter ServAutoAdapter;

        public DataAccessLayer()
        {
            connectionString = "server=localhost;user id=root;database=servautodb;pwd=root;";
            ServAutoConn = new MySqlConnection(connectionString);
            ServAutoComm = new MySqlCommand();
            ServAutoComm.Connection = ServAutoConn;
            ServAutoAdapter = new MySqlDataAdapter(ServAutoComm);
        }

        public int LoginUser(string email, string password)
        {
            int returnval = 0;

            ServAutoComm.CommandText = "usp_login";
            ServAutoComm.CommandType = CommandType.StoredProcedure;
            //input parameters
            ServAutoComm.Parameters.AddWithValue("p_email", email);
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


        public DataTable GetBrandByType(string type)
        {
            DataTable vehicleDataTable = new DataTable();
            ServAutoComm.CommandText = "select distinct brand from vehicledetails where type = @type";
            ServAutoComm.CommandType = CommandType.Text;
            ServAutoComm.Parameters.AddWithValue("@type", type);
            ServAutoAdapter = new MySqlDataAdapter(ServAutoComm);
            try
            {
                ServAutoAdapter.Fill(vehicleDataTable);

            }
            catch (Exception)
            {

                vehicleDataTable = null;
            }
            return vehicleDataTable;
        }

        public DataTable GetModelByTypeAndBrand(string type, string brand)
        {
            DataTable vehicleDataTable = new DataTable();
            ServAutoComm.CommandText = "select distinct model from vehicledetails where type = @type and brand=@brand";
            ServAutoComm.CommandType = CommandType.Text;
            ServAutoComm.Parameters.AddWithValue("@type", type);
            ServAutoComm.Parameters.AddWithValue("@brand", brand);
            ServAutoAdapter = new MySqlDataAdapter(ServAutoComm);
            try
            {
                ServAutoAdapter.Fill(vehicleDataTable);

            }
            catch (Exception)
            {

                vehicleDataTable = null;
            }
            return vehicleDataTable;
        }

        public DataTable GetTypeFromTable()
        {
            DataTable vehicleDataTable = new DataTable();
            ServAutoComm.CommandText = "SELECT distinct type from vehicledetails;";
            ServAutoComm.CommandType = CommandType.Text;
            ServAutoAdapter = new MySqlDataAdapter(ServAutoComm);
            try
            {
                ServAutoAdapter.Fill(vehicleDataTable);

            }
            catch (Exception)
            {

                vehicleDataTable = null;
            }
            return vehicleDataTable;
        }

        public DataTable GetServiceFromTable()
        {

            DataTable serviceDataTable = new DataTable();
            ServAutoComm.CommandText = "SELECT * from servicetypes;";
            ServAutoComm.CommandType = CommandType.Text;
            ServAutoAdapter = new MySqlDataAdapter(ServAutoComm);
            try
            {
                ServAutoAdapter.Fill(serviceDataTable);

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                serviceDataTable = null;
            }
            return serviceDataTable;
        }

        public DataTable GetServiceTable()
        {
            DataTable serviceDataTable = new DataTable();
            ServAutoComm.CommandText = "select email,name,address,pin,phno,capacity,password,status from workshopreg order by status  ";
            ServAutoComm.CommandType = CommandType.Text;
            ServAutoAdapter = new MySqlDataAdapter(ServAutoComm);
            try
            {
                ServAutoAdapter.Fill(serviceDataTable);
                Console.WriteLine("dl okay");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                serviceDataTable = null;
            }
            return serviceDataTable;
        }

        public int VerifyService(string email)
        {
            int returnval = 0;
            ServAutoComm.CommandText = "update workshopreg set status=1 where email=@email";
            ServAutoComm.CommandType = CommandType.Text;
            ServAutoComm.Parameters.AddWithValue("@email", email);
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

    }
}
