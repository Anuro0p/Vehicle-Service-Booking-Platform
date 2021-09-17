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
            connectionString = "server=localhost;user id=root;database=servautodb;pwd=123podapotta321;";
            ServAutoConn = new MySqlConnection(connectionString);
            ServAutoComm = new MySqlCommand();
            ServAutoComm.Connection = ServAutoConn;
            ServAutoAdapte = new MySqlDataAdapter(ServAutoComm);
        }
    }
}
