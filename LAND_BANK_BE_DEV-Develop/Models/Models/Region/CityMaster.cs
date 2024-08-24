﻿using Models.Models.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Models.Region
{
    public class CityMaster : BaseModel
    {
        public int Id { get; set; }
        public int CityId { get; set; }
        public int RegionId { get; set; }
        public string NameAr { get; set; }
        public string NameEn { get; set; }
        public string? Code { get; set; }
    }
}
