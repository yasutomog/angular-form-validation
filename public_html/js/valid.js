var ValidApp = angular.module('ValidApp', []);
ValidApp.controller('ValidController', ['$scope', function($scope) {

	$scope.user = {
		name: '',
		username: '',
		email: ''
	};

    $scope.submitForm = function(isValid) {
        if (isValid) {
            //Persist data
        }
    };

    $scope.send = function() {
        debugger;
        alert($scope.user.name + '::' + $scope.user.username + '::' + $scope.user.email);
    };
}]);
