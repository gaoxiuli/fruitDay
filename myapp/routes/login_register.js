var express = require('express');
var router = express.Router();
var url = require('url');
var md5 = require('md5');
var MySql =require("./../md/MySql.js");
var myTool = require("./../md/myTool.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//router.get('/loginAction1', function(req, res, next) {
//var obj = url.parse(req.url, true).query;
///**
// * 查询数据库，是不是存在该用户，
// * 如果存在，继续判断账户名密码是不是匹配
// * 如果匹配，返回1， --- 登录成功
// * 如果不匹配，返回2 ---- 密码错误
// * 如果不存在该用户，那么返回0
// * 数据库错误，返回-1
// */
//MySql.connect((err) => {
//	console.log("数据库连接错误")
//  res.send('-1')
//},(db) => {
//	console.log("数据库连接成功")
//  MySql.findData(db, 'userGoddess',{username: obj.username},{}, (result1) => {
////      	console.log(result1)
//    if(result1.length > 0){
//    	res.send("1");//有这个用户
//    }else{
//    	res.send("0");//没有这个用户
//    }
//    db.close();
//  })
//});
//});

router.get('/loginAction', function(req, res, next) {
  var obj = url.parse(req.url, true).query;
    console.log(obj.username);
obj.password = md5(obj.password);
  /**
   * 查询数据库，是不是存在该用户，
   * 如果存在，继续判断账户名密码是不是匹配
   * 如果匹配，返回1， --- 登录成功
   * 如果不匹配，返回2 ---- 密码错误
   * 如果不存在该用户，那么返回0
   * 数据库错误，返回-1
   */
  MySql.connect((err) => {
  	console.log("数据库连接错误")
    res.send('-1')
  },(db) => {
  	console.log("数据库连接成功")
    MySql.findData(db, 'ttUser',{username: obj.username},{}, (result1) => {
//      	console.log(result1)
      if(result1.length > 0){
        MySql.findData(db, 'ttUser',obj,{}, (result2) => {
          if(result2.length > 0){//匹配成功
            res.send('1');
          }else{
            res.send('2')
          }
          db.close();
        })
      }else{//没有该用户
        res.send('0')
      }
      db.close();
    })
  });
});

router.post('/registerAction', function(req, res, next) {
  var obj = req.body;
  console.log(obj)
  obj.password = md5(obj.password)//加密   2
  /**
   * 查询数据库，是不是存在该用户，
   * 如果存在，则返回0，表示用户已存在，
   * 如果不存在，则返回1，表示注册成功
   * 其他(数据库发生错误)错误返回2
   */
  
  MySql.connect((err) => {
    res.send('2');
  },(db) => {
    console.log("数据库连接成功")
    MySql.findData(db, "ttUser", {username: obj.username}, {_id:0}, (result) => {
      if(result.length == 0){//没有用户
        MySql.insert(db,'ttUser',obj,(result) => {
          console.log(result);
          res.send('1');
          db.close();
        })
      }else{
        res.send('0');
      }
      db.close();
    })
  })
//res.send('注册');
});

//更新密码
router.post('/updateAction', function(req, res, next) {
  var obj = req.body;
  console.log(obj)
  obj.password = md5(obj.password)//加密   
  MySql.connect((err) => {
    res.send('2');//数据库错误
  },(db) => {
    console.log("数据库连接成功")
    MySql.findData(db, "ttUser", {username: obj.username}, {_id:0}, (result) => {
      if(result.length == 0){//没有
        res.send('0');//没有该用户
      }else{
        MySql.updateData(db,'ttUser',{username: obj.username},{$set:{password:obj.password}},(result) => {
          console.log(result);
          res.send('1');//修改成功
          db.close();
        })
      }
      
      db.close();
    })
  })
});


//后台登录
router.get('/loginHou', function(req, res, next) {
  var obj = url.parse(req.url, true).query;
//	obj.password = md5(obj.password);
  MySql.connect((err) => {
  	console.log("数据库连接错误")
    res.send('-1')
  },(db) => {
  	console.log("数据库连接成功")
    MySql.findData(db, 'houUser',{username: obj.username},{}, (result1) => {
      if(result1.length > 0){
        MySql.findData(db, 'houUser',obj,{}, (result2) => {
          if(result2.length > 0){//匹配成功
            res.send('1');
          }else{
            res.send('2')
          }
          db.close();
        })
      }else{//没有该用户
        res.send('0')
      }
      db.close();
    })
  });
});

//更新后台密码
router.get('/updateHou', function(req, res, next) {
//var obj = req.body;
  var obj = url.parse(req.url, true).query;
//obj.password = md5(obj.password)//加密   
  MySql.connect((err) => {
    res.send('2');//数据库错误
  },(db) => {
    console.log("数据库连接成功")
    MySql.findData(db, "houUser", {username: obj.username}, {_id:0}, (result) => {
      if(result.length == 0){//没有
        res.send('0');//没有该用户
      }else{
        MySql.updateData(db,'houUser',{username: obj.username},{$set:{password:obj.password}},(result) => {
          console.log(result);
          res.send('1');//修改成功
          db.close();
        })
      }
      db.close();
    })
  })
});
//获取后台密码
router.get('/getHouMima', function(req, res, next) {
  MySql.connect((err) => {
    res.send('2');
  },(db) => {
    console.log("数据库连接成功")
    MySql.findData(db, "houUser", {}, {_id:0}, (result) => {
      res.send(result);
      db.close();
    })
  })
});
//function getRandom(){
//	var str="0123456789";
//	var str1="";
//	for(var i=0;i<4;i++){
//		str1+=str.charAt(Math.floor(Math.random()*9));
//	}
//return str1;
//}
//
//router.get('/sendMsg', function(req, res, next) {
//var mobile = url.parse(req.url,true).query.mobile;
//console.log(typeof mobile)
////  如果发送成功，则返回1，否则返回0
//var yzm=getRandom();
//	myTool.hySendMsg(mobile,yzm,(msg) => {
//	    console.log(msg)
//	    res.send("0");
//	},() =>{
//	    //成功
////	    res.cookie("yzm",yzm);
//	    res.send(yzm);
//	})
//	});
module.exports = router;
