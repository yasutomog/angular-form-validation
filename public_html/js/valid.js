var ValidApp = angular.module('ValidApp', []);
ValidApp.controller('ValidController', ['$scope', function($scope) {

	$scope.defUser = {
		name: 'koichi sato',
		username: '',
		email: '',
		checkNum: {
			one: false,
			two: false,
			three: false
		},
		gender: undefined,
		comment: '',
		family: undefined,
		english: ''

	};

    $scope.submitForm = function(isValid) {
        if (isValid) {
            //　Persist data
        }
    };

    $scope.inUnChanged = function(user) {
    	return angular.equals(user, $scope.defUser);
    };

    $scope.reset = function() {
    	$scope.user = angular.copy($scope.defUser);
    };

    $scope.send = function(user) {
        alert(angular.toJson($scope.user));
        $scope.defUser = angular.copy(user);
    };

    $scope.reset();

}]);
