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

    }
}