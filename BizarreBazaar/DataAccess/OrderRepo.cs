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
    public class OrderRepo
    {
        string ConnectionString;
        public OrderRepo(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("BizarreBazaar");
        }

        public IEnumerable<Order> GetAllOrders()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<Order>("select * from [Order]");
            }
        }

        public IEnumerable<Order> GetCompletedOrdersByUserId(int uid)
        {
            var sql = @"
                select 
                [user].ID,
                [order].id as orderId, 
                [user].username as Seller, 
                [order].userId, 
                product.title, 
                product.imageurl, 
                [order].invoicedate as dateordered, 
                product.price, 
                lineitem.quantity, 
                paymenttype.[name] as paymenttype, 
                product.price * lineitem.quantity as producttotal
                from lineitem
                join product on product.id = productId
                join [user] on [user].id = product.userId
                join [order] on [order].id = orderId
                join payment on payment.id = [order].paymentid
                join paymenttype on paymenttype.id = payment.paymenttypeId
                where iscomplete = 1 and [order].userId = @uid
                order by [order].id
                ";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { Uid = uid };
                var result = db.Query<Order>(sql, parameters);
                return result;
            }
        }

    }
}
