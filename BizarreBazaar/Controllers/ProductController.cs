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

        [HttpGet("productId/{id}")]
        public IActionResult GetProductById(int id)
        {
            var product = _repository.GetProductById(id);
            if (product == null)
            {
                return NotFound("That product does not exist");
            }
            return Ok(product);
        }

        [HttpGet("userId/{uid}")]
        public IActionResult GetProductsByUserId(int uid)
        {
            var products = _repository.GetProductsByUserId(uid);
            if (products.Count() < 1)
            {
                return NotFound("No products exist for this seller.");
            }

            return Ok(products);
        }

    }
}
