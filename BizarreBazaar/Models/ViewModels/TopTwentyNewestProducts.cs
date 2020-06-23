using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BizarreBazaar.Models.ViewModels
{
    public class TopTwentyNewestProducts
    {
        public int ProductId { get; set; }
        public string Title { get; set; }
        public decimal Price { get; set; }
        public string ImageUrl { get; set; }
        public string Description { get; set; }
        public DateTime DateAdded { get; set; }
    }
}
