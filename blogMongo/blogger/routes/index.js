var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/send", function(req, res, next){
	//get the form values... 
	transporter = nodemailer.createTransport();
	var mailOptions = {
		from: req.body.from,
		to: "annezlee1234@gmail.com",
		subject: req.body.subject,
		text: req.body.body
	};

	 transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.redirect('/');
    }else{
        console.log('Message sent: ' + info.response);
        res.redirect('/');
    }
});

});


module.exports = router;

