using BizarreBazaar.Models;
using BizarreBazaar.Models.ViewModels;
using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace BizarreBazaar.DataAccess
{
    public class ProductTypeRepo
    {
        string ConnectionString;

        public ProductTypeRepo(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("BizarreBazaar");
        }

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
                        where id = @id
                        and isactive = 1";

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

        public IEnumerable<ProductTypeSummary> GetProductCategoriesAndNumbers()
        {
            var sql = @"select producttype.[name] as producttypename, count(*) as producttypecount
                      from product
                      join producttype on product.producttypeid = producttype.id
                      group by producttype.[name]";

            using (var db = new SqlConnection(ConnectionString))
            {
                var results = db.Query<ProductTypeSummary>(sql);
                return results;
            }
        }

        public List<TopThreeProductInProductType> GetTopThreeProductsByType(string producttype)
        {
            var sql = @"select top(3) product.[title] as ProductTitle, producttype.[name] as ProductTypeName
                        from product
                        join producttype on producttype.id = product.producttypeid
                        where producttype.[name] = @producttype";

            var parameters = new
            {
                Producttype = producttype
            };

            using (var db = new SqlConnection(ConnectionString))
            {
                var topthree = db.Query<TopThreeProductInProductType>(sql, parameters).ToList();
                return topthree;
            }
        }

    }
}
