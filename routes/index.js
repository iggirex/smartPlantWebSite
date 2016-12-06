var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/light', function(req, res, next) {
  res.render('light', { title: 'Express' });
});

router.get('/soil', function(req, res, next) {
  res.render('soil', {});
});

module.exports = router;
