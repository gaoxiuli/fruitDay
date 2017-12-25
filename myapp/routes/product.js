var express = require('express');
var router = express.Router();
var url = require('url');
var MySql =require("./../md/MySql.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//产品列表接口
router.get('/productList', function(req, res,next) {
	//查询数据库---将值传递给前端
	MySql.connect((err) => {
		res.send('数据库错误')
	}, (db) => {
		console.log("产品列表数据库连接成功");
		MySql.findData(db, "proList", {}, {}, (result) => {
			res.send(result);
			console.log(result)
			db.close();
		})
	})
});
//添加产品接口
router.get('/addProduct', function(req, res, next) {
  /*
   * 添加产品到数据库
   *  1、查询有没有该产品
   *      如果有
   */
//console.log(req.body)
/*"banner_seq_id":"1",
"image":"https://imgjd7.fruitday.com/images/2017-12-18/d4394c18400dce62164cabd6cf7b2adc.jpg",
"title":"冬日补水大作战"*/
var pro = { // 接受前端数据的模拟数据
    pro_id:"pro001",
    pro_name:"小当家",
    pro_price:"0.5",
    pro_count:"5",
    pro_sale:'100万',
    pro_num:"2",
    pro_state:"1",
    pro_info:"儿时的味道",
    pro_img:""
}
//var pro = req.body;
  MySql.connect(res, (db) => {
    console.log('database is ok');
    MySql.insert(db, 'proList', pro, ()=>{
			res.send("1")
			db.close();
    });
  })
});
module.exports = router;
