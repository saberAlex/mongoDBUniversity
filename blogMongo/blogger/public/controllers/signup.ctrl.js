app.controller("SignupCtrl", function($scope, $http, $log){
	$scope.sendSignup = function() {
		$log.info("Sign UP");
		var data = {
			name: $scope.name,
			email: $scope.email,
			username: $scope.username,
			password: $scope.password,
		};

		$http.post('/users/register', data).success(function(data, status){
			console.log(status);
		});

	};
});