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

        [HttpPut("deleteById/{id}")]
        public IActionResult DeleteProductById(int id)
        {
            var rowsAffected = _repository.DeleteProductById(id);
            return Ok($"{rowsAffected} rows affected");
        }


        [HttpGet()]

        public IActionResult GetSearchedProducts(string search)
        {
            var searchedItem = _repository.GetSearchedProduct(search);
            if (searchedItem == null)
            {
                return NotFound("Sorry but that item doesn't exist.");
            }

            return Ok(searchedItem);
        }
       

    }
}
