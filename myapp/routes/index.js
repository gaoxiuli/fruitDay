var express = require('express');
var router = express.Router();
var MySql =require("./../md/MySql.js");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.get('/register', function(req, res, next) {
  res.render('register');
});


module.exports = router;