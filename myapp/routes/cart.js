var express = require('express');
var router = express.Router();
var url = require('url');
var MySql = require("./../md/MySql.js");

router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

//查看购物车
router.get('/getCart',function(req, res, next) {
	var pro = url.parse(req.url, true).query;
	MySql.connect((err) => {
		res.send('-1')
	}, (db) => {
		MySql.findData(db, "cart", {}, {_id:0}, (result) => {
			if(result.length>0){
				res.send(result)
			}else{
				res.send("0");
			}
		})
	})
})

//删除购物车商品
router.get('/detailCart',function(req, res, next) {
	var pro = url.parse(req.url, true).query;
	MySql.connect((err) => {
		res.send('0')
	}, (db) => {
		MySql.findData(db, "cart", {banner_ad_id:pro.goodsID}, {}, (result) => {
			if(result.length>0){
				MySql.deleteOneData(db, "cart", {banner_ad_id:pro.goodsID}, (result) =>{
					res.send("1")
				})
			}else{
				MySql.findData(db, "cart", {id:pro.goodsID}, {}, (result) => {
					if(result.length>0){
						MySql.deleteOneData(db, "cart", {id:pro.goodsID}, (result) =>{
							res.send("1")
						})
					}
				})
			}
		})
	})
})

//更新及添加购物车
router.get('/updataCart', function(req, res, next){
	var pro = url.parse(req.url, true).query;
	MySql.connect((err) => {
		res.send("0")
	}, (db) => {
		MySql.findData(db, "cart", {banner_ad_id:pro.goodsID}, {_id:0}, (result) => {
			if(result.length>0){
				MySql.updateData(db,'cart',{banner_ad_id:pro.goodsID},{$set:{in_stock:pro.number}},(result) => {
//							           console.log(result);
		           res.send('1');//修改成功
//		           db.close();
		        })
			}else{
				MySql.findData(db, "cart", {id:pro.goodsID}, {_id:0}, (result) => {
					if(result.length>0){
						MySql.updateData(db,'cart',{id:pro.goodsID},{$set:{in_stock:pro.number}},(result) => {
				           res.send('1');//修改成功
//				           db.close();
				       })
					}else{
				//把商品添加到数据库
					MySql.findData(db, "homeListBottom", {banner_ad_id:pro.goodsID},{_id:0,banner_ad_id:1,title:1,subtitle:1,image:1,price:1,volume:1,in_stock:1,volume:1},(result) => {
						if(result.length>0){
//							res.send(result);
							MySql.insert(db,'cart', result, (result) => {
//								console.log(result);
								res.send("1")
							})
						}else{
							MySql.findData(db,'detailList', {id:pro.goodsID},{_id:0,id:1,product_name:1,price:1,product_tag:1,photo:1,in_stock:1,unit:1,volume:1},(result2) => {
								if(result2.length>0){
//									res.send(result2);
									MySql.insert(db,'cart', result2, (result) => {
		//								console.log(result);
										res.send("1")
									})
								}else{
									MySql.findData(db,'detailHome',{banner_ad_id:pro.goodsID},{_id:0,banner_ad_id:1,title:1,subtitle:1,image:1,price:1,volume:1,in_stock:1,volume:1},(result3) => {
										if(result3.length>0){
//											res.send(result3);
											MySql.insert(db,'cart', result3, (result) => {
				//								console.log(result);
												res.send("1")
											})
										}
									})
								}
			//					db.close();
							})
						}
			//			db.close();
						})
					}
					})
			}
		})
	})
})

module.exports = router;