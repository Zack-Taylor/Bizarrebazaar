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

        //api/order/user/userid
        [HttpGet("user/{userid}")]
        public IActionResult GetOrdersByUserId(int UserId)
        {
            var allUserOrders = _repository.GetAllOrdersByUserId(UserId);
            return Ok(allUserOrders);
        }

        //api/order/orderid/8
        [HttpGet("orderid/{id}")]
        public IActionResult GetSingleOrder(int Id)
        {
            var singleOrder = _repository.GetSingleOrder(Id);
            return Ok(singleOrder);
        }

        //api/order/complete/1
        [HttpGet("complete/{id}")]
        public IActionResult GetCompleteOrdersByUserId(int UserId)
        {
            var CompletedOrders = _repository.GetCompleteOrdersByUserId(UserId);
            return Ok(CompletedOrders);
        }

        //api/order/shoppingcart/12
        [HttpGet("shoppingcart/{userid}/{paymenttypeid}")]
        public IActionResult GetShoppingCartByUserId(int UserId, int PaymentTypeId)
        {
            var ShoppingCart = _repository.GetShoppingCartByUserId(UserId);
            if (ShoppingCart == null)
            {
                //Create a new shopping cart
                var NewShoppingCart = _repository.CreateNewShoppingCart(UserId, PaymentTypeId);

            }
            return Ok(ShoppingCart);
        }
    }
}
