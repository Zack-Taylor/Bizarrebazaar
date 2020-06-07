using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BizarreBazaar.Models
{
    public class Payment
    {
        public int ID { get; set; }
        public int PaymentTypeId { get; set; }
        public int AcctNumber { get; set; }
        public int UserId { get; set; }

    }
}
