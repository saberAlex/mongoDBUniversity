var express = require('express')
  , app = express() // Web framework to handle routing requests
  , cons = require('consolidate'); // Templating library adapter for Express

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
//in the newer version of express we don't actually need to register the router. 
//app.use(app.router);

// Handler for internal server errors
function errorHandler(err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    res.status(500);
    res.render('error_template', { error: err });
}

app.use(errorHandler);
//:name --> capture this url to this variable:
app.get('/:name', function(req, res, next) {
    //example of usage in the browser: localhost:8080/jin?getvar1=test&getvar2=agastya
    var name = req.params.name;
    //this is how to express the get variable. 
    //we can look at other get variable. 
    var getvar1 = req.query.getvar1;
    var getvar2 = req.query.getvar2;
    res.render('hello_get', { name : name, getvar1 : getvar1, getvar2 : getvar2 });
});

app.listen(3000);
console.log('Express server listening on port 3000');
