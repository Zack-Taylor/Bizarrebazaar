using BizarreBazaar.DataAccess;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BizarreBazaar.Controllers
{
    public class ProductTypeController : ControllerBase
    {

        [HttpGet("{productType}")]
        public IActionResult GetProductByProductType(string category)
        {
            var repo = new ProductTypeRepo();
            var productCategories = repo.GetProductByProductType(category);
            return Ok(productCategories);
        }
    }
}
