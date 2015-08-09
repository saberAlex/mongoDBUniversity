var mongoose = require("mongoose");

//create the mongDB schema. 
var heroSchema = mongoose.Schema({
	name: {
		type: String, 
		index: true,
		require: true
	},
	type: {
		type: String,
		require: true
	},
	info: {
		type: String
	},
	job: {
		type: String,
		index: true,
		require: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});


//when we create a hero object.. strange thing happen:
//the mongo db automatically create a heros database. 
var Hero = module.exports = mongoose.model('Hero', heroSchema);
//The first argument is the singular name of the collection your model is for. Mongoose automatically looks for the plural version of your model name. Thus, for the example above, the model Tank is for the tanks collection in the database. The .model() function makes a copy of schema. Make sure that you've added everything you want to schema before calling .model()!//get all heroes:

module.exports.getHeroes = function(callback){
	console.log("I'm getting called");
	Hero.find(callback);
};

//get the hero based by the ID
module.exports.getHeroByName = function(name, callback) {
	var query = {name: name};
	Hero.find(query, callback);
};

//get the hero by the ID: 
module.exports.getHeroById = function(id, callback) {
	Hero.findById(id, callback);
};

//get the hero by the job
module.exports.getHeroByJob = function(job, callback) {
	var query = {job: job};
	Hero.find(query, callback);
};

module.exports.createHero = function(newHero, callback) {
	newHero.save(callback);
};

//update hero:
module.exports.updateHero = function(id, data, callback) {
	var name = data.name;
	var type = data.type;
	var info = data.info;
	var job = data.job;

	var query = {_id: id};
	Hero.findById(id, function(err, hero) {
		if(!hero){
			return next(new Error("Could not find the hero"));
		} else {
			//update:
			hero.name = name;
			hero.type = type;
			hero.info = info;
			hero.job = job;

			hero.save(callback);
		}
	});
};

//deleting hero:
module.exports.removeHero = function(id, callback) {
	Hero.find({_id: id}).remove(callback);
}

