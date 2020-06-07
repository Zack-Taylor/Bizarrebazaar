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
    }
}
