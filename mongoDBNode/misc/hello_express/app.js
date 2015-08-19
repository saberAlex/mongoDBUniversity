var express = require("express");
var app = express();
var cons = require("consolidate");
//requiring the mongoDB
var MongoClient = require("mongodb").MongoClient;
var Server = require("mongodb").Server;

//this is to register the template engine.. (using express)
app.engine("html", cons.swig);
app.set("view engine", "html");
app.set("views", __dirname + "/views");

//using newest version of mongoDB driver.. 
MongoClient.connect("mongodb://localhost:27017", function(err, db) {
	app.get("/", function(req, res) {
		db.collection("hello_mongo_express").findOne({}, function(err, doc) {
			res.render("hello", doc);
		});
	});
	//any unhadled route is handle here using the *
	app.get("*", function (req, res) {
		res.send("Hello there... this is crazy.. ");
	});
	app.listen(8080);
	console.log("Express server started on port 8080");

});

