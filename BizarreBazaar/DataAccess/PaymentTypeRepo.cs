using BizarreBazaar.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace BizarreBazaar.DataAccess
{
    public class PaymentTypeRepo
    {
        string ConnectionString;

        public PaymentTypeRepo(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("BizarreBazaar");
        }

        public IEnumerable<PaymentType> GetAllPaymentTypes()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<PaymentType>("select * from PaymentType where isActive = 1");
            }
        }

        public PaymentType GetPaymentTypesById(int id)
        {
            var sql = @"select * 
                        from PaymentType
                        where id = @id
                        and isactive = 1";

            var parameters = new { Id = id };
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.QueryFirstOrDefault<PaymentType>(sql, parameters);
            }
        }

        public int DeletePaymentTypeById(int id)
        {
            var sql = @"update paymenttype
                        set isActive = 0
                        where id = @id";

            var parameters = new { Id = id };
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Execute(sql, parameters);
            }
        }
    }
}
