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
    public class UserRepo
    { 
        string ConnectionString;

        public UserRepo(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("BizarreBazaar");
        }

        public IEnumerable<User> GetAll()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<User>("select * from [User]");
            }
        }

        public IEnumerable<User> GetUserById(int uid)
        {
            var sql = @"select *
                        from [user]
                        where [user].ID = @uid
                        ";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new {Uid = uid};
                var result = db.Query<User>(sql, parameters);
                return result;
            }
        }

        public User GetUserByUserName(string userName)
        {
            var sql = @"
                    select *
                    from [user]
                    where UserName = @userName ";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new {UserName = userName};
                var result = db.QueryFirstOrDefault<User>(sql, parameters);
                return result;
            }
        }

        public User Add(User user)
        {
            var sql = $@"
            insert into [user](FirstName, LastName, AcctCreated, AcctActive, isSeller, UserName, Email, [Password])
            output inserted. *
            Values(@FirstName, @LastName, GETDATE(), @AcctActive, @isSeller, @UserName, @Email, @Password )";

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.QueryFirstOrDefault<User>(sql, user);
                return result;
            }
        }


        public User GetCompletedOrdersByUserId(int uid)
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
                var result = db.QueryFirstOrDefault<User>(sql, parameters);
                return result;
            }
        }
    }
}
