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
                return db.Query<Product>("select * from Product where isActive = 1");
            }
        }

        public Product GetProductById(int id)
        {
            var sql = @"select * 
                        from Product
                        where id = @id
                        and isActive = 1";

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
                        where userId = @uid
                        and isActive = 1";

            var parameters = new {Uid = uid};
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

        public IEnumerable<Product> GetSearchedProduct(string search)
        {
            
            var sql = @"
                        select * from Product
                        where Product.Title like '%' + @search + '%' AND isActive = 1
                    ";

            var parameters = new {Search = search};
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<Product>(sql, parameters);
            }
            
        }

        public IEnumerable<Product> GetProductsByProductTypeId(int productTypeId)
        {
            var sql = @"select * 
                        from Product
                        where ProductTypeId = @productTypeId
                        and isActive = 1";

            var parameters = new { ProductTypeId = productTypeId };
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<Product>(sql, parameters);
            }
        }


    }
}

