var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


var User = require("../models/user");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post("/register", function(req, res, next) {
	//get the form value:
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;

//check for image field:
	if(req.files.photo) {
		console.log("Uploading file...");
		//file information:
		var profileImageOriginalName = req.files.photo.originalname;
		var profileImageName = req.files.photo.name;
		var profileImageMime = req.files.photo.mimetype;
		var profileImagePath = req.files.photo.path;
		var profileImageExt = req.files.photo.extension;
		var profileImageSize = req.files.photo.size;
	} else {
		//set default image:
		var profileImageName = "noimage.jpg";
	}

//Form Validation (using express)
	req.checkBody("name", "Name field is required").notEmpty();
	req.checkBody("email", "Email field is required").notEmpty();
	req.checkBody("email", "Email is not valid").isEmail();
	req.checkBody("username", "username field is required").notEmpty();
	req.checkBody("password", "Password field is required").notEmpty();
	//password need to be matched
	//req.checkBody("name", "Name field is required").equals(res.body.password);
	//check for error:
	var errors = req.validationErrors();
	if(errors) {
		res.render("register", {
			errors: errors,
			name: name,
			email: email,
			username: username,
			password: password
		});

	} else {
		var newUser = new User({
			name: name,
			email: email,
			username: username,
			password: password,
			profileimage : profileImageName
		});
		
		User.createUser(newUser, function(err, user){
		if (err) throw err;
		console.log(user);
		});

		res.location("/");
		res.redirect("/");
	}

});



module.exports = router;

