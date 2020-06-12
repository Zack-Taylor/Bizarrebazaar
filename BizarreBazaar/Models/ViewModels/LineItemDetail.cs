using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BizarreBazaar.Models.ViewModels
{
    public class LineItemDetail
    {
        public string Title { get; set; }
        public decimal Price { get; set; }
        public int QuantityPurchased { get; set; }
        public int SellerId { get; set; }
        public string ImageUrl { get; set; }
    }
}
