using BizarreBazaar.Models;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace BizarreBazaar.DataAccess
{
    public class ProductTypeRepo
    {
        const string ConnectionString = "Server=localhost;Database=BizarreBazaar;Trusted_Connection=True;";

        public IEnumerable<ProductType> GetAllProductTypes()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<ProductType>("select * from ProductType");
            }
        }
        
    }
}
