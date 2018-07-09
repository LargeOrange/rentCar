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

module.exports = router;
