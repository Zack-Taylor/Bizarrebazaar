using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BizarreBazaar.DataAccess;
using BizarreBazaar.Models;
using Microsoft.AspNetCore.Mvc;

namespace BizarreBazaar.Controllers
{
    [Route("api/product")]
    [ApiController]
    public class ProductController: ControllerBase
    {
        ProductRepo _repository;

        public ProductController(ProductRepo repository)
        {
            _repository = repository;
        }

        //api/product
        [HttpGet]
        public IActionResult GetProducts()
        {
            var allProducts = _repository.GetAllProducts();

            return Ok(allProducts);
        }

    }
}
