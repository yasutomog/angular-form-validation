var ValidApp = angular.module('ValidApp', []);
ValidApp.controller('ValidController', ['$scope', function($scope) {

	$scope.defUser = {
		name: 'koichi sato',
		username: '',
		email: ''
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
        alert($scope.user.name + '::' + $scope.user.username + '::' + $scope.user.email);
        $scope.defUser = angular.copy(user);
    };

    $scope.reset();

}]);
