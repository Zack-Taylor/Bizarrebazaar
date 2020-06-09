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

        [HttpGet("paymentTypeId/{id}")]
        public IActionResult GetPaymentTypesById(int id)
        {
            var paymentType = _repository.GetPaymentTypesById(id);
            if (paymentType == null)
            {
                return NotFound("That payment type is not accepted");
            }
            return Ok(paymentType);
        }

        [HttpPut("deleteById/{id}")]
        public IActionResult DeletePaymentTypeById(int id)
        {
            var rowsAffected = _repository.DeletePaymentTypeById(id);
            return Ok($"{rowsAffected} rows affected");
        }

    }
}
