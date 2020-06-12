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
                return db.Query<Order>("select * from [order]");
            }
        }

        public IEnumerable<Order> GetAllOrdersByUserId(int UserId)
        {
            var sql = @" select * 
                        from [order]
                        where UserId = @UserId 
                        ";

            var parameters = new { UserId };
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<Order>(sql, parameters);
            }
        }

        public Order GetOrderByOrderId(int id)
        {
            var sql = @"select *
                        from [order]
                        where id = @id";

            var parameters = new { id };
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.QueryFirstOrDefault<Order>(sql, parameters);
            }
        }

        public IEnumerable<Order> GetCompleteOrdersByUserId(int UserId)
        {
            var sql = @" select * 
                        from [order]
                        where UserId = @UserId
                        and IsComplete = 1
                        ";

            var parameters = new { UserId };
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<Order>(sql, parameters);
            }
        }

        public Order CreateNewShoppingCart(int userId, int paymentTypeId)
        {
            throw new NotImplementedException();
            //insert statement via sql
            //needs to check if there is an order for userid that is incomplete
        }

        public Order GetShoppingCartByUserId(int UserId)
        {
            var sql = @" select * 
                        from [order]
                        where UserId = @UserId
                        and IsComplete = 0
                        ";

            var parameters = new { UserId };
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.QueryFirstOrDefault<Order>(sql, parameters);
            }
        }
    }
}