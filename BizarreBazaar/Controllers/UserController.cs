using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BizarreBazaar.DataAccess;
using BizarreBazaar.Models;
using Microsoft.AspNetCore.Mvc;


namespace BizarreBazaar.Controllers
{
    [Route("api/users/")]
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

    }
}
