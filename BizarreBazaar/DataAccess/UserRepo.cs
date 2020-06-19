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
                return db.Query<User>("select * from [User] where acctactive = 1");
            }
        }

        public User GetUserById(int uid)
        {
            var sql = @"select *
                        from [user]
                        where [user].ID = @uid
                        and acctactive = 1";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new {Uid = uid};
                var result = db.QueryFirstOrDefault<User>(sql, parameters);
                return result;
            }
        }

        public User GetUserByUserName(string userName)
        {
            var sql = @"
                    select *
                    from [user]
                    where UserName = @userName
                    and acctactive = 1";

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
            Values(@FirstName, @LastName, GETDATE(), 1, 1, @UserName, @Email, @Password )";

            using (var db = new SqlConnection(ConnectionString))
            {
                var result = db.QueryFirstOrDefault<User>(sql, user);
                return result;
            }
        }

        public User DeleteUserAccount(int uid)
        {
            var sql = @"update [user]
                        set FirstName = 'deleted  user',
                        LastName = 'deleted  user',
                        UserName = 'deleted  user',
                        Email = 'deleted  user',
                        ImageUrl = 'deleted  user',
                        [Password] = 'deleted  user',
                        AcctActive = 0
                        where [user].ID = @uid
                        ";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { Uid = uid };
                var results = db.QueryFirstOrDefault<User>(sql, parameters);
                return results;
            }
        }

        public IEnumerable<User> GetSearchedUser(string searchUser)
        {

            var sql = @"
                        select * from [User]
                        where [User].UserName like '%' + @searchUser + '%' AND acctActive = 1
                    ";

            var parameters = new { SearchUser = searchUser };
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<User>(sql, parameters);
            }

        }

    }
}
