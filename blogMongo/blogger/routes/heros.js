var express = require('express');
var router = express.Router();


var Hero = require("../models/hero");

router.get('/', function(req, res, next) {
  Hero.getHeroes(function(err, heroes){
  	if(err) {
  		console.log(err);
  	}
  	res.json(heroes);
  });
});

router.get('/:id', function(req, res, next) {
  Hero.getHeroById(req.params.id, function(err, hero){
  	if(err) {
  		console.log(err);
  	}
  		res.json(hero);
  });
});


router.get('/name/:name', function(req, res, next) {
  Hero.getHeroByName(req.params.name, function(err, hero){
  	if(err) {
  		console.log(err);
  	}
  		res.json(hero);
  });
});

router.get('/job/:job', function(req, res, next) {
  Hero.getHeroByJob(req.params.job, function(err, hero){
  	if(err) {
  		console.log(err);
  	}
  		res.json(hero);
  });
});

router.post("/", function(req, res, next){
	//get the form values... 
	var name = req.body.name;
	var type = req.body.type;
	var info = req.body.info;
	var job =  req.body.job;

	var newHero = new Hero({
		name: name,
		type: type,
		info: info,
		job: job
	});

	Hero.createHero(newHero, function(err, hero){
		if(err) {
			console.log(err);
		}
		res.location("/heros");
		res.redirect("/heros");
	});
});

//Update the HERO:
router.put("/", function(req, res, next){
	var id = req.body.id;
	var data = {
		 name: req.body.name,
		 type: req.body.type,
		 info: req.body.info,
		 job : req.body.job	
	};

	//update the hero:
	Hero.updateHero(id, data, function(err, hero){
		if(err) {
			console.log(err);
		}

		res.location("/heros");
		res.redirect("/heros");
	});
});

//Delete the Hero:
router.delete(":/id", function(req, res, next){
	var id = req.params.id;

	Hero.removeHero(id, function(err, hero){
		if(err) {
			console.log(err);
		}


		res.location("/heros");
		res.redirect("/heros");
	});
});

module.exports = router;
