using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using BizarreBazaar.Models;
using Dapper;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Data.SqlClient;

namespace BizarreBazaar.DataAccess
{
    public class ProductRepo
    {
        string ConnectionString;

        public ProductRepo(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("BizarreBazaar");
        }

        public IEnumerable<Product> GetAllProducts()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<Product>("select * from Product");
            }
        }

        public Product GetProductById(int id)
        {
            var sql = @"select * 
                        from Product
                        where id = @id";

            var parameters = new { Id = id };
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.QueryFirstOrDefault<Product>(sql, parameters);
            }
        }

        public IEnumerable<Product> GetProductsByUserId(int uid)
        {
            var sql = @"select * 
                        from Product
                        where userId = @uid";

            var parameters = new { Uid = uid };
            using (var db = new SqlConnection(ConnectionString))
            {            
                return db.Query<Product>(sql, parameters);
            }
        }

        public int DeleteProductById(int id)
        {
            var sql = @"update product
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

