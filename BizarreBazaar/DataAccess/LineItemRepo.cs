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
    public class LineItemRepo
    {
        string ConnectionString;

        public LineItemRepo(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("BizarreBazaar");
        }

        internal void AddToCart(int userId, int productId, int orderid)
        {
            throw new NotImplementedException();
            //insert statement from sql
        }

        public IEnumerable<Order> GetAllLineItemsOnAnOrderByUserId(int uid)
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

        public IEnumerable<LineItemDetail> GetLineItemDetailsByOrderId(int orderId) 
        {

            var sql = @"select 
                            product.title, product.price, product.userId as SellerId, product.imageUrl, lineitem.quantity as quantityPurchased
                        from lineitem
                            join product on product.id = lineitem.productId
                            join [order] on [Order].id = lineitem.orderId
                            where orderId = @orderId and [order].iscomplete = 1
                        ";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { OrderId = orderId };
                var results = db.Query<LineItemDetail>(sql, parameters);
                return results;
            }
        }
    }
}
