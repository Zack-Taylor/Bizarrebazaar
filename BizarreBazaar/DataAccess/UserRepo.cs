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

        public User DeleteUserAccount(int uid)
        {
            var sql = @"update [user]
                        set FirstName = null,
                        set LastName = null,
                        set UserName = null,
                        set Email = null,
                        set ImageUrl = null,
                        set [Password] = null,
                        set AcctActive = 0
                        where [user].ID = @uid
                        ";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { Uid = uid };
                var results = db.QueryFirstOrDefault<User>(sql, uid);
                return results;

            }
        }

    }
}
