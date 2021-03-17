var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	 var subscriptionSuccess = req.flash("subscription_success")[0];
	 var subscriptionError = req.flash("subscription_error")[0];
     res.render('index.handlebars', {breadcrumb: "Contact", 
	 subscriptionError: subscriptionError, subscriptionSuccess: subscriptionSuccess, home: "active"});
});


router.get('/portfolio', function(req, res, next) {
  res.render('portfolio.handlebars', {portfolio: "active", portfolio: "Portfolio"});
});


router.get('/services', function(req, res, next) {
  res.render('services.handlebars',{services: "active", Services: "Services"});
});


router.get('/about', function(req, res, next) {
  res.render('about.handlebars', {breadcrumb: "About Us", about: "active"});
});


router.get('/team', function(req, res, next) {
  res.render('team.handlebars', {breadcrumb: "The Team", about: "active"});
});


router.get('/testimonials', function(req, res, next) {
res.render('testimonials.handlebars', { about: "active"});
});


router.get('/contact', function(req, res, next) {
     var emailSuccess = req.flash("email_success")[0];
	 var emailError = req.flash("email_error")[0];
     res.render('contact.handlebars', {breadcrumb: "Contact", emailError: emailError, emailSuccess: emailSuccess, contact: "active"});
});


router.get('/quoter', function(req, res, next) {
	 var getQuot = 1
     res.render('contact.handlebars', {breadcrumb: "Request Quote", getQuote: "Request Quote"});
});


router.get('/faq', function(req, res, next) {
  res.render('faq.handlebars', {breadcrum: "FAQs", brunch: "Manzini & Siphofaneni", faq: "active"});
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
			 req.flash("email_success", "Success sending email" );
		     return res.redirect('/contact'); 
		}
    });
})



router.post('/subscribe', function(req, res){
	
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
		     req.flash("subscription_error", "subscribed");	
		     return res.redirect('/contact');
		}else{
		     console.log("Email has been sent");			 
		     console.log(info);
			 req.flash("subscription_success", "subscribed successfully");
		     return res.redirect('/'); 
		}
    });
})








module.exports = router;
