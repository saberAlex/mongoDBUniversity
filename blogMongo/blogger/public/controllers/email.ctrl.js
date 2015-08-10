app.controller("SendEmailCtrl", function($scope, $http, $log){
	
	/*
		from: req.body.from,
		to: "luciaagastya@gmail.com",
		subject: req.body.subject,
		text: req.body.body
	*/
	$scope.sendEmail = function(){
		var data = {
			from: $scope.from,
			body: $scope.body,
			subject: $scope.subject
		}

		$log.info($scope.from);
		$log.info($scope.body);

		$http.post('/send', data).success(function(data, status){
			console.log(status);
		});
	};


});