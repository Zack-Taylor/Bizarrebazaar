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
                return db.Query<ProductType>("select * from ProductType where isActive = 1");
            }
        }

        public ProductType GetProductTypesById(int id)
        {
            var sql = @"select * 
                        from ProductType
                        where id = @id";

            var parameters = new { Id = id };
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.QueryFirstOrDefault<ProductType>(sql, parameters);
            }
        }

        public int DeleteProductTypeById(int id)
        {
            var sql = @"update productType
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
