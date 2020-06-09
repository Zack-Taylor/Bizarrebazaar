using BizarreBazaar.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.UserSecrets;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace BizarreBazaar.DataAccess
{
    public class ProductRepo
    {
        string ConnectionString;

        public ProductRepo(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("BizarreBazaar");
        }

        public IEnumerable<Product> GetAllSellersProducts(int sellersId)
        {
            var sql = @"select * from Product
                        where UserId = @sellersId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { SellersId = sellersId };
                var result = db.Query<Product>(sql, parameters);
                return result;
            }
        }


    }
}
