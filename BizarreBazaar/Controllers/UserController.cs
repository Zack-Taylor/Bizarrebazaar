using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BizarreBazaar.DataAccess;
using BizarreBazaar.Models;
using Microsoft.AspNetCore.Mvc;


namespace BizarreBazaar.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        UserRepo _repository;

        public UserController(UserRepo repository)
        {
            _repository = repository;
        }

        
        //api/user
        [HttpGet]
        public IActionResult GetAllUsers()
        {
            var allUsers = _repository.GetAll();

            return Ok(allUsers);
        }

        [HttpGet("{uid}/")]

        public IActionResult GetUserById(int uid)
        
        {
            var user = _repository.GetUserById(uid);
            var isEmpty = !user.Any();
            if (isEmpty)
            {
                return NotFound("Sorry, this user does not exist.");
            }

            return Ok(user);
        }

        [HttpGet("username/{userName}")]
        public IActionResult GetByUserName(string userName)
        {
            var user = _repository.GetUserByUserName(userName);
            if (user == null)
            {
                return NotFound("Sorry, this username does not exist.");
            }

            return Ok(user);

        }

        [HttpPost]
        public IActionResult AddUser(User userToAdd)
        {
            var existingUser = _repository.GetUserByUserName(userToAdd.UserName);
            if (existingUser == null)
            {
                var newUser = _repository.Add(userToAdd);
                return Created("", newUser);
            }

            return Ok(existingUser);
        }

        //[HttpGet("completedOrder/{uid}")]
        //public IActionResult GetCompletedOrder(int uid)
        //{
        //    var orders = _repository.GetCompletedOrdersByUserId(uid);
        //    var isEmpty = !orders.Any();
        //    if (isEmpty)
        //    {
        //        return NotFound("Sorry, but you don't have any completed orders.");
        //    }

        //    return Ok(orders);
        //}

    }
}
