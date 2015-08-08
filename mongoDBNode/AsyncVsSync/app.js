//getting the mongoClient object
var mongoClient = require("mongodb").MongoClient;

//making connection to our localhost/local machine --(playground)-- server:
//calling the mongoDB and after we done, we give a callback.. 
mongoClient.connect("mongodb://127.0.0.1:27017/playground", function(err, db) {

	if(err) throw err;
	//find one in the document of the collection
	db.collection("weaponList").findOne({}, function(err,doc) {
		//Print the result:
		console.dir(doc);
		db.close();
	});

	//Declared success: 
	console.dir("Called Find one!!");

});

//MongoClient object --> through this we can access the mongoDB. 
