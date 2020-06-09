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
                return db.Query<PaymentType>("select * from PaymentType");
            }
        }
    }
}
