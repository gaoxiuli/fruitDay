var express = require('express');
var router = express.Router();
var url = require('url');
var MySql =require("./../md/MySql.js");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//banner列表接口
router.get('/bannerActive', function(req, res,next) {
	//查询数据库---将值传递给前端
	MySql.connect((err) => {
		res.send('数据库错误')
	}, (db) => {
		console.log("产品列表数据库连接成功");
		MySql.findData(db, "bannerList", {}, {}, (result) => {
			res.send(result);
			console.log(result)
			db.close();
		})
	})
});
//添加产品接口
router.get('/addBanner', function(req, res, next) {
  /*
   * 添加产品到数据库
   *  1、查询有没有该产品
   *      如果有
   */
 var banner = url.parse(req.url, true).query;
// console.log(banner)
  MySql.connect((err) =>{
  	console.log("数据库连接失败")
    res.send("-1")
  }, (db) => {
    console.log("数据库连接成功")
       MySql.findData(db, 'bannerList',{banner_seq_id: banner.banner_seq_id},{}, (result1) => {
     		 if(result1.length > 0){
     		 		console.log("商品已存在")
     		 		res.send("2");
          }else{
				    MySql.insert(db, 'bannerList', banner, ()=>{
							res.send("1")
							db.close();
				    });
          }
          db.close();
        })
      })
})
//更新banner
router.get('/updateBanner', function(req, res, next) {
  var obj = url.parse(req.url, true).query;
//console.log(obj)
  MySql.connect((err) => {
    res.send('-1');//数据库错误
  },(db) => {
    console.log("数据库连接成功")
    MySql.findData(db, "bannerList", {banner_seq_id: obj.banner_seq_id}, {_id:0}, (result) => {
      if(result.length == 0){//没有
        res.send('0');
      }else{
        MySql.updateData(db,'bannerList',{banner_seq_id: obj.banner_seq_id},{$set:obj},(result) => {
          console.log(result);
          res.send('1');//修改成功
          db.close();
        })
      }
      
      db.close();
    })
  })
});
//删除banner
router.get('/deleteBanner', function(req, res, next) {
  var obj = url.parse(req.url, true).query;
//console.log(obj)
  MySql.connect((err) => {
    res.send('-1');//数据库错误
  },(db) => {
    console.log("数据库连接成功")
    MySql.deleteOneData(db,"bannerList", obj, (res) => {
    	res.send("1");
    	db.close();
    })
  })
});
//首页底部列表接口
router.get('/homeListBottom', function(req, res,next) {
	//查询数据库---将值传递给前端
	MySql.connect((err) => {
		res.send('数据库错误')
	}, (db) => {
		console.log("产品列表数据库连接成功");
		MySql.findData(db, "homeListBottom", {}, {}, (result) => {
			res.send(result);
			console.log(result)
			db.close();
		})
	})
});
//添加首页底部产品接口
router.get('/addHomeListBottom', function(req, res, next) {
  /*
   * 添加产品到数据库
   *  1、查询有没有该产品
   *      如果有
   */
//console.log(req.body)
//var bottomlist =[
//                  ]
//var pro = req.body;
  MySql.connect(res, (db) => {
    console.log('banner is ok');
    MySql.insert(db, 'homeListBottom', bottomlist, ()=>{
			res.send("1")
			db.close();
    });
  })
});


//首页列表接口
router.get('/homeList1', function(req, res,next) {
	//查询数据库---将值传递给前端
	MySql.connect((err) => {
		res.send('数据库错误')
	}, (db) => {
		console.log("产品列表数据库连接成功");
		MySql.findData(db, "homelist", {}, {}, (result) => {
			res.send(result);
			console.log(result)
			db.close();
		})
	})
});
//添加产品接口
router.get('/addHomeList1', function(req, res, next) {
  /*
   * 添加产品到数据库
   *  1、查询有没有该产品
   *      如果有
   */
//console.log(req.body)
var homelist = [

]
//var pro = req.body;
  MySql.connect(res, (db) => {
    console.log('banner is ok');
    MySql.insert(db, 'homelist', homelist, ()=>{
			res.send("1")
			db.close();
    });
  })
});

//首页列表接口
router.get('/homeList2', function(req, res,next) {
	//查询数据库---将值传递给前端
	MySql.connect((err) => {
		res.send('数据库错误')
	}, (db) => {
		console.log("产品列表数据库连接成功");
		MySql.findData(db, "homelist2", {}, {}, (result) => {
			res.send(result);
			console.log(result)
			db.close();
		})
	})
});
//添加产品接口
router.get('/addHomeList2', function(req, res, next) {
  /*
   * 添加产品到数据库
   *  1、查询有没有该产品
   *      如果有
   */
//console.log(req.body)
//var homelist = [

//]
//var pro = req.body;
  MySql.connect(res, (db) => {
    console.log('banner is ok');
    MySql.insert(db, 'homelist2', homelist, ()=>{
			res.send("1")
			db.close();
    });
  })
});
module.exports = router;
