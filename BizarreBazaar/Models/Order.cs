using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BizarreBazaar.Models
{
    public class Order
    {
        public int ID { get; set; }
        public int UserId { get; set; }
        public decimal OrderTotal { get; set; }
        public DateTime InvoiceDate { get; set; }
        public bool IsComplete { get; set; }
        public int PaymentId { get; set; }
    }
}
