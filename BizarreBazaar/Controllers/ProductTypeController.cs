using BizarreBazaar.DataAccess;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BizarreBazaar.Controllers
{
    [Route("api/producttype")]
    [ApiController]
    public class ProductTypeController : ControllerBase
    {
        ProductTypeRepo _repository;

        public ProductTypeController(ProductTypeRepo repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult GetAllProductTypes()
        {
            var allProductTypes = _repository.GetAllProductTypes();

            return Ok(allProductTypes);
        }

        [HttpGet("productTypeId/{id}")]
        public IActionResult GetProductTypesById(int id)
        {
            var productType = _repository.GetProductTypesById(id);
            if (productType == null)
            {
                return NotFound("That product type does not exist");
            }
            return Ok(productType);
        }

        [HttpGet("producttypenumbers")]
        public IActionResult GetProductCategoriesAndNumbers()
        {
            var allProductTypesAndNumbers = _repository.GetProductCategoriesAndNumbers();

            return Ok(allProductTypesAndNumbers);
        }

        [HttpPut("deleteById/{id}")]
        public IActionResult DeleteProductTypeById(int id)
        {
            var productTypeRowsAffected = _repository.DeleteProductTypeById(id);
            return Ok($"{productTypeRowsAffected} product type rows affected");
        }



    }
}