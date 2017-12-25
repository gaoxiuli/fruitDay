var express = require('express');
var router = express.Router();
var multer = require('multer')
var url = require('url');
var MySql =require("./../md/MySql.js");
//磁盘存储引擎可以让你控制文件的存储。
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    
    cb(null, "./public/images")
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)  //--- 原来文件的名字
  }
})

var upload = multer({ storage: storage })
//var upload = multer({"dest": "./public/images"})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post("/upload", upload.single('file'), (req,res,next) => {
//console.log(req.body)
//console.log(req.headers.host + '/images/' + req.file.originalname)
  
  var url = 'http://10.9.160.202/8000/images/' + req.file.originalname;
  //数据库操作
  var name = req.body.name;
  var id = req.body.id;
var obj={
	name:name,
	id:id,
	class_photo:url
}
console.log(obj)
//res.send("1")
  res.json({
    code:200,
    url: url
  })
  


})
module.exports = router;
