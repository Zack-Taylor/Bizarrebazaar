using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BizarreBazaar.DataAccess;
using BizarreBazaar.Models;
using Microsoft.AspNetCore.Mvc;

namespace BizarreBazaar.Controllers
{
    [Route("api/order")]
    [ApiController]
    public class OrderController: ControllerBase    
    {
        OrderRepo _repository;

        public OrderController(OrderRepo repository)
        {
            _repository = repository;
        }


        //api/order
        [HttpGet]
        public IActionResult GetAllOrders()
        {
            var allOrders = _repository.GetAllOrders();

            return Ok(allOrders);
        }


        [HttpGet("order/{uid}")]
        public IActionResult GetCompletedOrder(int uid)
        {
            var orders = _repository.GetCompletedOrdersByUserId(uid);
            if (orders.Count() < 1)
            {
                return NotFound("Sorry, but you don't have any completed orders.");
            }

            return Ok(orders);
        }
    }
}
