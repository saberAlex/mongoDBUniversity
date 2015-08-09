var mongoose = require("mongoose");

var jobSchema = mongoose.Schema({
	name: {
		type: String, 
		index: true,
		require: true
	}, 
	description : {
		type: String
	}
});

var Job = module.exports = mongoose.model("Job", jobSchema);

module.exports.getJobs = function(callback) {
	Job.find(callback);
};

module.exports.getJobById = function(id, callback) {
	Job.findById(id, callback);
};

module.exports.getHeroesByJob = function(job, callback) {
	var query = {job: job};
	Hero.find(query, callback);
}

//create a new Job:
module.exports.createJob = function(newJob, callback){
	newJob.save(callback);
}
