using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BizarreBazaar.DataAccess;
using BizarreBazaar.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BizarreBazaar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        ProductRepo _repository;

        public ProductController(ProductRepo repository)
        {
            _repository = repository;
        }

        //api/product/{userId}/
        [HttpGet("{UserId}/")]
        public IActionResult GetAllSellersProducts(int UserId)
        {
            var products = _repository.GetAllSellersProducts(UserId);
            var isEmpty = !products.Any();
            if (isEmpty)
            {
                return NotFound("Bummer man. This user has no products");
            }

            return Ok(products);

        }
    }
}