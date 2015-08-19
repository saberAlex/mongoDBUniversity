var MongoClient = require('mongodb').MongoClient;
var async = require("async");

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {
	if(err) throw err;
	var scores;
		db.collection('students').aggregate(  
			{ '$unwind' : '$scores' },
			{ $project : { "_id" : 1 , "scores" : 1 } },
			{ '$match' : { "scores.type" : "homework" }},
			{ '$group' : { '_id' : '$_id' , 'max' : { $max : '$scores.score' }} }
			, { '$sort' : { 'max' : -1 } }).toArray(function(err, docs){
			if(err) throw err;
			console.dir(docs);
			console.log(docs.length);
			scores = docs;


			    db.collection('students').update({}, {
			        '$pull': {
			             'scores' : {
			             	'type':  "homework" }
			             }
			         },{new: true, multi: true}, function(err, user){

			    async.forEach(Object.keys(scores), function (item, callback){ 

			        db.collection('students').findOneAndUpdate({"_id": parseInt(scores[item]._id)}, {
			            '$push': {
			                 'scores' : {
			               		'type': "homework",
			               		'score': scores[item].max,
			                 } 
			             }
			            },{new: true}, function(err, user){
			        	callback();
			        });
			    }, function(err) {
			        console.log('iterating done');
			    }); 
			 }); 
		});

});