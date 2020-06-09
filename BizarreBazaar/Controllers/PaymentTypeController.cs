using BizarreBazaar.DataAccess;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BizarreBazaar.Controllers
{
    [Route("api/paymenttype")]
    [ApiController]
    public class PaymentTypeController : ControllerBase
    {
        PaymentTypeRepo _repository;

        public PaymentTypeController(PaymentTypeRepo repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult GetAllPaymentTypes()
        {
            var allPaymentTypes = _repository.GetAllPaymentTypes();

            return Ok(allPaymentTypes);
        }



    }
}
