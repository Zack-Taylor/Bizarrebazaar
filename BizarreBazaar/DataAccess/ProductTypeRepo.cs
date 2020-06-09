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
        public ProductType GetProductByProductType(string category)
        {
            var sql = @"select producttype.[name], count(*) as productcount
                        from product
                            join producttype on product.producttypeid = producttype.id
                                group by producttype.[name]
                                    ";

            var parameters = new
            {
                Category = category
            };

            using (var db = new SqlConnection(ConnectionString))
            {
                var summary = db.QueryFirstOrDefault<ProductType>(sql, parameters);
                return summary;
            }
        }
    }
}
