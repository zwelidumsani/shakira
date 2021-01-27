var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.handlebars');
});


router.get('/electrical', function(req, res, next) {
  res.render('electrical.handlebars');
});

router.get('/security', function(req, res, next) {
  res.render('security.handlebars');
});

router.get('/construction', function(req, res, next) {
  res.render('construction.handlebars');
});


router.get('/logistics', function(req, res, next) {
  res.render('logistics.handlebars');
});

router.get('/about', function(req, res, next) {
  res.render('about.handlebars');
});


router.get('/contact', function(req, res, next) {
  res.render('contact.handlebars');

});


router.get('/faq', function(req, res, next) {
  res.render('faq.handlebars');

});





module.exports = router;
