using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BizarreBazaar.Models
{
    public class Product
    {
        public int ID { get; set; }
        public int ProductTypeId { get; set; }
        public decimal Price { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Quantity { get; set; }
        public int UserId { get; set; }
        public DateTime DateAdded { get; set; }
        public string ImageUrl { get; set; }
    }
}
