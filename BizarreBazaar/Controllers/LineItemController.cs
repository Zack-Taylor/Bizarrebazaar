using BizarreBazaar.DataAccess;
using BizarreBazaar.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BizarreBazaar.Controllers
{
    [Route("api/lineitem")]
    [ApiController]
    public class LineItemController: ControllerBase
    {
        OrderRepo _orderrepository;
        LineItemRepo _lineitemrepository;

        public LineItemController(OrderRepo orderrepository, LineItemRepo lineitemrepository)
        {
            _orderrepository = orderrepository;
            _lineitemrepository = lineitemrepository;
        }

        //api/order/addtocart/2
        [HttpGet("addtocart/{userid}/{paymenttypeid}/{productid}")]
        public IActionResult AddToShoppingCart(int UserId, int PaymentTypeId, int ProductId)
        {
            var ShoppingCart = _orderrepository.GetShoppingCartByUserId(UserId);
            if (ShoppingCart == null)
            {
                //Create a new shopping cart
                var NewShoppingCart = _orderrepository.CreateNewShoppingCart(UserId, PaymentTypeId);
                _lineitemrepository.AddToCart(UserId, ProductId, NewShoppingCart.ID);
            } else
            _lineitemrepository.AddToCart(UserId, ProductId, ShoppingCart.ID);
            return Ok();
        }
    }
}
