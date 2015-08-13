var MongoClient = require('mongodb').MongoClient;
var async = require("async");
var    ObjectID = require('mongodb').ObjectID;



MongoClient.connect('mongodb://localhost:27017/dummy', function(err, db) {
    if(err) throw err;
var states = [];

// db.collection("data").find({"State": "Vermont"}).limit(1).sort({"Temperature":-1}).toArray(function(err, docs){
// 		console.dir(docs);
// 		db.close();
// 	});

//Updating using an object ID
// db.collection("test").update({_id: ObjectID("55cc990a4257953ef67466b7")}, {
// 		$set: {
// 			"pet" : "Vicky"
// 		}
// 	}, {
// 	upsert: true
// }, function(err, data){
// 	console.dir(data);
// 	db.close();
// });

var dataObj = ["test","one", "two"];
async.forEach(Object.keys(dataObj), function (item, callback){ 
    console.log(dataObj[item]); // print the key
    callback(); // tell async that the iterator has completed

}, function(err) {
    console.log('iterating done');
});  

});

// async.series([
// 	function(callback) {
// 		db.collection('data').distinct("State", function(err, docs) {
//         if(err) throw err;
//         console.dir(docs);
//         var states = docs;
//         var query = {"State": states[0]};
//         callback(null, states);
//         });
// 	},
// 	function(callback){
// 		db.collection("data").findOne({"State": "Florida"}, function(err, docs){
// 				console.dir(docs);
// 				db.close();
// 		callback(null, docs);
// 	 	});
// 	}
// ], function(err, results){
// 	console.dir(results);
// });


