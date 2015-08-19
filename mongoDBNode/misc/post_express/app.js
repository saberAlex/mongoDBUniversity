var express = require('express')
  , app = express()
  , cons = require('consolidate')
  , bodyParser = require("body-parser");


app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//this is the registering middleware with expresss.. this is we do the extra processing. 
//for more information express.js.com
//app.use(express.bodyParser());
//app.use(app.router);

//newer version of body parser.. 
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//reference is here: https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters

// Handler for internal server errors
//in express we can specifically register the function with the error. 
function errorHandler(err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    res.status(500);
    res.render('error_template', { error: err });
}

app.use(errorHandler);

app.get('/', function(req, res, next) {
    res.render('fruitPicker', { 'fruits' : [ 'apple', 'orange', 'banana', 'peach' ] });
});

app.post('/favorite_fruit', function(req, res, next) {
    var favorite = req.body.fruit;
    if (typeof favorite == 'undefined') {
        next(Error('Please choose a fruit!'));
    }
    else {
        res.send("Your favorite fruit is " + favorite);
    }
});

app.listen(3000);
console.log('Express server listening on port 3000');
