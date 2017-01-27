var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage' });
});
router.get('/javascript', function(req, res, next) {
  res.render('javascript', {title: 'Javascript'});
});
module.exports = router;
