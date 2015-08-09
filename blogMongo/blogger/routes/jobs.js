var express = require('express');
var router = express.Router();
/* GET users listing. */
//because we are in the heroes route.. the / refer to the /heroes
var Job = require("../models/job");
var Hero = require("../models/hero");

router.get('/', function(req, res, next) {
  Job.getJobs(function(err, jobs){
  	if(err) {
  		console.log(err);
  	}
  	res.json(jobs);
  });
});


module.exports = router;
