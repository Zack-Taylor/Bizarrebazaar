using BizarreBazaar.Models;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace BizarreBazaar.DataAccess
{
    public class LineItemRepo
    {
        private string ConnectionString;

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

    }
}
