var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs');
  // res.sendFile('../jufeng/index.html')
});
router.get('/login', function(req, res, next) {
  res.render('login.ejs');
  // res.sendFile('../jufeng/index.html')
});
router.get('/addCar', function(req, res, next) {
  res.render('enter.ejs');
});

router.get('/list', function(req, res, next) {
  res.render('list.ejs');
});

router.get('/vip', function(req, res, next) {
  res.render('vip.ejs');
});

module.exports = router;
