var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/list', function(req, res, next) {
  var option = {
    	//https://wap.fruitday.com/v3/ad/homepage?connect_id=5i6bbdnjpceuc43em330ed4di1&type=2&lonlat=116.25151%2C40.11633&ad_code=110114&tab_id=
    hostname:"wap.fruitday.com",
    port:"443",
    path:"/v3/ad/homepage?connect_id=5i6bbdnjpceuc43em330ed4di1&type=2&lonlat=116.25151%2C40.11633&ad_code=110114&tab_id="
  }
  var reqData = http.request(option,(resData) => {
    var str = "";
    resData.on("data",(val) => {
      str += val
    })
    resData.on("end",() => {
      res.send(str)
    })
    resData.on("error",(err) => {
     console.log(err)
    })
  })
  reqData.on("error",(err) => {
    console.log(err)
  })
  reqData.end();
});


module.exports = router;
