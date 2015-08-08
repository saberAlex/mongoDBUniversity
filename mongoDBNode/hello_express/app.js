var express = require("express");
var app = express();
var cons = require("consolidate");

//this is to register the template engine.. (using express)
app.engine("html", cons.swig);
app.set("view engine", "html");
app.set("views", __dirname + "/views");



//this is to handle if a particular url is being requested. 
app.get("/", function (req, res) {
	//res.send("Hello world");
	res.render("hello", { "name" : "Lucareto"});
});
//any unhadled route is handle here using the *
app.get("*", function (req, res) {
	res.send("Hello there... this is crazy.. ");
});

app.listen(8080);
console.log("server up and running in port 8080");
