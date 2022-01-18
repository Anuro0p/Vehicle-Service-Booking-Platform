using System;
using System.Collections.Generic;
using System.Data;
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

        public int LoginUser(Models.LoginData loginData)
        {
            //workshopReg.Email = "asdasd";

            return DAL.LoginUser(loginData.Email,loginData.Password);
        }

        public List<Models.VehicleType> GetVehicleTypes()
        {
            List<Models.VehicleType> vehicleTypeList = new List<Models.VehicleType>();
            try
            {

                DataTable vehicleType = DAL.GetTypeFromTable();
                foreach (DataRow vehicleTypeRow in vehicleType.Rows)
                {
                    Models.VehicleType vehicleTypeObj = new Models.VehicleType();
                    vehicleTypeObj.Type = vehicleTypeRow["type"].ToString();
                    vehicleTypeList.Add(vehicleTypeObj);

                }


            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                vehicleTypeList = null;
            }
            return vehicleTypeList;
        }

        public List<Models.VehicleBrand> GetBrandByType(string type)
        {
            List<Models.VehicleBrand> vehicleBrandList = new List<Models.VehicleBrand>();
            try
            {

                DataTable vehicleBrand = DAL.GetBrandByType(type);
                foreach (DataRow vehicleBrandRow in vehicleBrand.Rows)
                {
                    Models.VehicleBrand vehicleBrandObj = new Models.VehicleBrand();
                    vehicleBrandObj.Brand = vehicleBrandRow["brand"].ToString();
                    vehicleBrandList.Add(vehicleBrandObj);

                }


            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                vehicleBrandList = null;
            }
            return vehicleBrandList;
        }


        public List<Models.VehicleModel> GetmodelByTypeAndBrand(string type, string brand)
        {
            List<Models.VehicleModel> vehicleModelList = new List<Models.VehicleModel>();
            try
            {

                DataTable vehicleModel = DAL.GetModelByTypeAndBrand(type, brand);
                foreach (DataRow vehicleModelRow in vehicleModel.Rows)
                {
                    Models.VehicleModel vehicleModelObj = new Models.VehicleModel();
                    vehicleModelObj.Model = vehicleModelRow["model"].ToString();
                    vehicleModelList.Add(vehicleModelObj);

                }


            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                vehicleModelList = null;
            }
            return vehicleModelList;
        }

        public List<Models.ServiceTypes> GetServiceTypes()
        {
            List<Models.ServiceTypes> serviceTypesList = new List<Models.ServiceTypes>();
            try
            {

                DataTable serviceTypes = DAL.GetServiceFromTable();
                foreach (DataRow serviceTypesRow in serviceTypes.Rows)
                {
                    Models.ServiceTypes serviceTypesObj = new Models.ServiceTypes();
                    serviceTypesObj.Service = serviceTypesRow["Services"].ToString();
                    serviceTypesList.Add(serviceTypesObj);

                }


            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                serviceTypesList = null;
            }
            return serviceTypesList;
        }
    }
}
