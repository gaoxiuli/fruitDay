var express = require('express');
var router = express.Router();
var url = require('url');
var MySql =require("./../md/MySql.js");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//获取列表接口
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
//添加列表接口
router.get('/addKindList', function(req, res, next) {
	var list = url.parse(req.url, true).query;
//	{
//		id="ff",
//		name="jjj"
//	}
	MySql.connect(res, (db) => {
	    console.log('banner is ok');
	    MySql.findData(db, 'kindLeft', {id:list.id}, {}, (result) => {
	    	if(result.length>0){
	    		res.send("0");
	    	}else{
	    		MySql.insert(db, 'kindLeft', list, ()=>{
						res.send("1")
						db.close();
			    });
	    	}
	    })
	    
	})
});

//获取kind列表接口
router.get('/kindList', function(req, res, next) {
	MySql.connect(res, (db) => {
	    console.log('banner is ok');
	    MySql.findData(db, 'kindLeft', {},{_id:0}, (result)=>{
				res.send(result)
				db.close();
	    });
	})
});

//删除kind列表接口
router.get('/deleteKindList', function(req, res, next) {
  var obj = url.parse(req.url, true).query;
	MySql.connect(res, (db) => {
	    console.log('banner is ok');
	    MySql.deleteOneData(db,"kindLeft", obj, (res) => {
	    	res.send("1");
	    	db.close();
	    })
	})
});

//获取列表对应的商品列表
router.get('/getKindList', function(req, res,next) {
	var prolist=url.parse(req.url,true).query;//商品列表ID
//	console.log(prolist)
	MySql.connect((err) => {
		res.send('数据库错误')
	}, (db) => {
		console.log("产品列表数据库连接成功");
		MySql.findData(db, "kindList", {id:prolist.prolistID}, {}, (result) => {
			res.send(result);
			db.close();
		})
	})
});

//向数据库里添加数据
//router.get("/addProList", function(req, res, next) {
//	var proList = url.parse(req.url, true).query;
//	MySql.connect(res, (db) => {
//	    console.log('banner is ok');
//	    MySql.findData(db, 'kindList', {id:proList.id}, {}, (result) => {
//	    	var proList = result;
//	    	res.send(prolist.pro);
//	    })
//	    
//	})
//})

////删除列表对应的商品列表
//router.get('/delteKindList', function(req, res,next) {
//	var prolist=url.parse(req.url,true).query;//商品列表ID
////	console.log(prolist)
//	MySql.connect((err) => {
//		res.send('数据库错误')
//	}, (db) => {
//		console.log("产品列表数据库连接成功");
//		MySql.findData(db, "kindList", {id:prolist.prolistID}, {}, (result) => {
//			res.send(result);
//			db.close();
//		})
//	})
//});

//列表的列表
router.get("/getKindListList", function(req, res, next){
	var prolistlist=url.parse(req.url, true).query;
	MySql.connect((err) => {
		res.send("数据库错误")
	}, (db) => {
		console.log("数据库连接成功");
		MySql.findData(db, "kindListList", {id:prolistlist.proList_ListID},{},(result) => {
			res.send(result);
			db.close();
		})
	})
})

//首页详情页
router.get("/homeDetails", function(req, res, next){
	var detail=url.parse(req.url, true).query;
	console.log(detail)
	MySql.connect((err) => {
		res.send("数据库错误")
	}, (db) => {
		console.log("数据库连接成功");
		MySql.findData(db, "homeListBottom", {banner_ad_id:detail.detail_ID},{},(result) => {
			if(result.length>0){
				res.send(result);
			}else{
				MySql.findData(db,'detailList', {id:detail.detail_ID},{},(result2) => {
					if(result2.length>0){
						res.send(result2);
					}else{
						MySql.findData(db,'detailHome',{banner_ad_id:detail.detail_ID},{},(result3) => {
							if(result3.length>0){
								res.send(result3);
							}else{
								res.send("0")
							}
//							db.close();
						})
					}
//					db.close();
				})
			}
//			db.close();
		})
	})
})
module.exports = router;
