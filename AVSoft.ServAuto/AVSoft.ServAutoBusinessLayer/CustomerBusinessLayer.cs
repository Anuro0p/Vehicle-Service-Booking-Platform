using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

using AVSoft.ServAutoDataAccessLayer;

namespace AVSoft.ServAutoBusinessLayer
{
    public class CustomerBusinessLayer
    {
        CustomerDataAccessLayer CDAL;

        public CustomerBusinessLayer()
        {
            CDAL = new CustomerDataAccessLayer();

        }

        public int RegisterCustomer(Models.CustomerReg customerReg)
        {
            //workshopReg.Email = "asdasd";

            return CDAL.RegisterCustomer(customerReg.Email,
                                         customerReg.Name,
                                         customerReg.Address,
                                         customerReg.State,
                                         customerReg.City,
                                         customerReg.Pin,
                                         customerReg.Phno,
                                         customerReg.Password
                                        );
        }

        public int RegisterCustomerVehicle(Models.CustomerVehicle customerVehicle)
        {
            //workshopReg.Email = "asdasd";

            return CDAL.RegisterCustomerVehicle(customerVehicle.Email,
                                         customerVehicle.Brand,
                                         customerVehicle.VehicleName,
                                         customerVehicle.Model,
                                         customerVehicle.Type,
                                         customerVehicle.Number
                                        );
        }

        public List<Models.CustomerVehicle> GetCustomerVehicleByEmail(string email)
        {
            List<Models.CustomerVehicle> customerVehicleModelList = new List<Models.CustomerVehicle>();
            try
            {

                DataTable customerVehileModel = CDAL.GetCustomerVehicleByEmail(email);
                foreach (DataRow customerVehileModelRow in customerVehileModel.Rows)
                {
                    Models.CustomerVehicle CustomerVehicleModelObj = new Models.CustomerVehicle(customerVehileModelRow["Email"].ToString(),
                                                                                                customerVehileModelRow["Brand"].ToString(),
                                                                                                customerVehileModelRow["VehicleName"].ToString(),
                                                                                                customerVehileModelRow["Model"].ToString(),
                                                                                                customerVehileModelRow["Type"].ToString(),
                                                                                                customerVehileModelRow["Number"].ToString());


                    customerVehicleModelList.Add(CustomerVehicleModelObj);

                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                customerVehicleModelList = null;
            }
            return customerVehicleModelList;
        }

        public List<Models.ServiceData> GetServiceByBrandModelTypePincode(string type, string brand, string model, string serviceType)
        {
            List<Models.ServiceData> serviceDataModelList = new List<Models.ServiceData>();
            try
            {

                DataTable ServiceDataModel = CDAL.GetServiceByBrandModelTypePincode(type, brand, model, serviceType);
                foreach (DataRow ServiceDataModelRow in ServiceDataModel.Rows)
                {
                    Models.ServiceData ServiceDataModelObj = new Models.ServiceData();
                    ServiceDataModelObj.Servicename = ServiceDataModelRow["name"].ToString();
                    ServiceDataModelObj.Address = ServiceDataModelRow["Address"].ToString();
                    ServiceDataModelObj.phno = ServiceDataModelRow["phno"].ToString();
                    ServiceDataModelObj.type = ServiceDataModelRow["type"].ToString();
                    ServiceDataModelObj.brand = ServiceDataModelRow["brand"].ToString();
                    ServiceDataModelObj.ServiceType = ServiceDataModelRow["ServiceType"].ToString();
                    ServiceDataModelObj.Model = ServiceDataModelRow["Model"].ToString();
                    ServiceDataModelObj.Email = ServiceDataModelRow["Email"].ToString();
                    ServiceDataModelObj.Charge = Convert.ToDouble(ServiceDataModelRow["Charge"]);
                    ServiceDataModelObj.Extimatedays = Convert.ToInt32(ServiceDataModelRow["Extimatedays"]);
                    Console.WriteLine("fine working");
                    serviceDataModelList.Add(ServiceDataModelObj);
                }

                Console.WriteLine("bl fine");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                serviceDataModelList = null;
            }
            return serviceDataModelList;


        }

        public Models.CustomerReg GetUserDataByEmail(string email)
        {
            Models.CustomerReg userDatas;
            
            try
            {
                DataTable customerDatatable = new DataTable();
                customerDatatable = CDAL.GetUserByEmail(email);
                DataRow userRow = customerDatatable.Rows[0];
                 userDatas = new Models.CustomerReg(userRow["Email"].ToString(),
                                                    userRow["Name"].ToString(),
                                                    userRow["Address"].ToString(),
                                                    userRow["City"].ToString(),
                                                    userRow["State"].ToString(),
                                                    userRow["Pin"].ToString(),
                                                    userRow["Phno"].ToString(),
                                                    userRow["Password"].ToString()
                                                    );
                Console.WriteLine(userDatas.Address);
                Console.WriteLine("ok");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                userDatas = null;
            }
            return userDatas;
        }

        public int NewOrder(string customerEmail, string serviceEmail, string type, string brand, string model, string serviceType, string pickupLocation, double extimateCost, int days, string progress)
        {
            string estimateDate, month;
            int year, day;
            DateTime dt;
            DateTime today;

            today = DateTime.Today;
            dt = DateTime.Today.AddDays(days);
            estimateDate = dt.Date.ToShortDateString();

            year = today.Year;
            month = today.ToString("MMMM");
            day = today.Day;
            //Console.WriteLine(customerEmail+serviceEmail+ type+brand+ model+ serviceType+ pickupLocation+ extimateCost+ estimateDate+ progress+ year+ month+ day);
          
        return CDAL.NewOrder(customerEmail, serviceEmail, type, brand, model, serviceType, pickupLocation, extimateCost, estimateDate, progress,  year, month, day);
        }

        public List<Models.order> GetOrdersByEmailAndYear(string email, int year)
        {
            List<Models.order> orderDataModelList = new List<Models.order>();
            try
            {

                DataTable OrderDataModel = CDAL.GetOrderByCustomerEmail(email);
                foreach (DataRow OrderDataModelRow in OrderDataModel.Rows)
                {
                    Models.order OrderDataModelObj = new Models.order();
                    OrderDataModelObj.customerEmail = OrderDataModelRow["email"].ToString();
                    OrderDataModelObj.serviceEmail = OrderDataModelRow["WorkshopEmail"].ToString();
                    OrderDataModelObj.type = OrderDataModelRow["Type"].ToString();
                    OrderDataModelObj.brand = OrderDataModelRow["Brand"].ToString();
                    OrderDataModelObj.model = OrderDataModelRow["Model"].ToString();
                    OrderDataModelObj.serviceType = OrderDataModelRow["Servicetype"].ToString();
                    OrderDataModelObj.pickupLocation = OrderDataModelRow["Pickuplocation"].ToString();
                    OrderDataModelObj.extimateCost = Convert.ToDouble(OrderDataModelRow["Estimatecost"]);
                    OrderDataModelObj.extimateDate = OrderDataModelRow["ExtimateDate"].ToString();
                    OrderDataModelObj.progress = OrderDataModelRow["progress"].ToString();

                    Console.WriteLine(OrderDataModelObj.serviceType);
                    Console.WriteLine("fine working");
                    orderDataModelList.Add(OrderDataModelObj);
                }

                Console.WriteLine("bl ok fine");
            }
            catch (Exception ex)
            {
                Console.WriteLine("bl not fine");
                Console.WriteLine(ex);
                orderDataModelList = null;
            }
            return orderDataModelList;


        }

        public List<Models.order> GetOrdersByWorkshopEmailAndProgress(string email, string progress)
        {
            List<Models.order> orderDataModelList = new List<Models.order>();
            try
            {

                DataTable OrderDataModel = CDAL.GetOrderByWorkshopEmailAndProgress(email,progress);
                foreach (DataRow OrderDataModelRow in OrderDataModel.Rows)
                {
                    Models.order OrderDataModelObj = new Models.order();
                    OrderDataModelObj.customerEmail = OrderDataModelRow["email"].ToString();
                    OrderDataModelObj.serviceEmail = OrderDataModelRow["WorkshopEmail"].ToString();
                    OrderDataModelObj.type = OrderDataModelRow["Type"].ToString();
                    OrderDataModelObj.brand = OrderDataModelRow["Brand"].ToString();
                    OrderDataModelObj.model = OrderDataModelRow["Model"].ToString();
                    OrderDataModelObj.serviceType = OrderDataModelRow["Servicetype"].ToString();
                    OrderDataModelObj.pickupLocation = OrderDataModelRow["Pickuplocation"].ToString();
                    OrderDataModelObj.extimateCost = Convert.ToDouble(OrderDataModelRow["Estimatecost"]);
                    OrderDataModelObj.extimateDate = OrderDataModelRow["ExtimateDate"].ToString();
                    OrderDataModelObj.progress = OrderDataModelRow["progress"].ToString();

                    Console.WriteLine(OrderDataModelObj.serviceType);
                    Console.WriteLine("fine working");
                    orderDataModelList.Add(OrderDataModelObj);
                }

                Console.WriteLine("bl ok fine");
            }
            catch (Exception ex)
            {
                Console.WriteLine("bl not fine");
                Console.WriteLine(ex);
                orderDataModelList = null;
            }
            return orderDataModelList;


        }
    }

}
