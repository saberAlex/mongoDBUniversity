app.controller("LoginCtrl", function($scope, $http, $log){

	//$log.info($scope.username);

	$scope.sendLogin = function() {
		$log.info($scope.username);
		$log.info("Logging in" + $scope.username);
	}
});