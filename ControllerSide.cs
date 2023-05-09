[HttpPost]
        public JsonResult ExampleGetFormValues(string Id = "")
        {
            SampleEntities entities = new SampleEntities();

            var samp = entities.SampleTable.Where(x => x.Id == Id).FirstOrDefault();
            return Json(new
            {
                single = samp,
            });
        }
[HttpPost]
        public JsonResult ExampleGetMultiValues(string Id = "")
        {
            SampleEntities entities = new SampleEntities();

            var samp = entities.SampleTable.Where(x => x.Id == Id).ToList();
            return Json(new
            {
                multi = samp,
            });
        }
