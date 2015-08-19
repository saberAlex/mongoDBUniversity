var MongoClient = require('mongodb').MongoClient;
var async = require("async");


MongoClient.connect('mongodb://localhost:27017/weather', function(err, db) {
	if(err) throw err;
	async.waterfall([
		function(callback) {
			db.collection('data').distinct("State", function(err, docs) {
	        if(err) throw err;
	        console.dir(docs);
	        var states = docs;
	        callback(null, states);
	        });
		},
		function(states, callback){
			console.log(states);
			async.forEach(Object.keys(states), function (item, callback2){ 
		    	db.collection("data").findAndModify(
		    		{State : states[item]},			 //query
		    		[["Temperature","descending" ]], //sorting
		    		{ $set:{"month_high": true}},	 //update
		    		{upsert: true}					 //option
		    	, function(err, data){
		    		if(err) console.log(err);
		    		console.dir(data);
		    		callback2();
		    	});
	}, callback);  
		}
	], function(err, results){
		if(err) throw err;
	});

});



