﻿using System;
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
    public class ProductRepo
    {
        string ConnectionString;

        public ProductRepo(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("BizarreBazaar");
        }

        public IEnumerable<Product> GetAllProducts()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                return db.Query<Product>("select * from Product");
            }
        }


        public IEnumerable<Product> GetSearchedProduct()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var sql = @"
                        select * from Product
                        where Product.Title like '%Mona%'
                        ";
            }
        }
    }
}

