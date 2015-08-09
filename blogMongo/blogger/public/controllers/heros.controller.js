
app.controller("HerosCtrl", function($scope, $http, $log){
	$http.get("/heros").success(function(data){
		$log.info(data);
		$scope.heros = data;
	});
});