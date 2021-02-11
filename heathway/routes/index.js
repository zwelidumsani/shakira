var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.handlebars');
});


router.get('/portfolio', function(req, res, next) {
  res.render('portfolio.handlebars');
});


router.get('/services', function(req, res, next) {
  res.render('services.handlebars');
});


router.get('/about', function(req, res, next) {
  res.render('about.handlebars', {breadcrumb: "About Us"});
});


router.get('/team', function(req, res, next) {
  res.render('team.handlebars', {breadcrumb: "The Team"});
});


router.get('/testimonials', function(req, res, next) {
  res.render('testimonials.handlebars');
});


router.get('/contact', function(req, res, next) {
	
  res.render('contact.handlebars', {breadcrumb: "Contact"});
});


router.get('/faq', function(req, res, next) {
  res.render('faq.handlebars', {breadcrum: "FAQs", brunch: "Manzini & Siphofaneni"});
});


router.post('/email', function(req, res){
	
	var transporter = nodemailer.createTransport({
		
	 service: 'Gmail',
	    auth: {
		     user: 'eswatiniherbalnutrition@gmail.com',
		     pass: 'FANAdumsani@1989367'
		}
	});
	
    const mailOptions = {
         from: req.body.email, // sender address
         to: 'eswatiniherbalnutrition@gmail.com', // list of receivers
         subject: 'Client Mail', // Subject line
         html:'<p>'+'NAME:- '+req.body.name+'<br>'+'EMAIL:- '+req.body.email+'<br>'+'MESSAGE:- '+req.body.message+'</p>'
    };

	transporter.sendMail(mailOptions, function (err, info) {
		if(err){ 
		     console.log("Error sending email", err.message);
		     req.flash("email_error", "Something went wrong");	
		     return res.redirect('/contact');
		}else{
		     console.log("Email has been sent");			 
		     console.log(info);
		     return res.redirect('/'); 
		}
    });
})







module.exports = router;
