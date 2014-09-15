var validApp = angular.module('ValidApp', []);
validApp.controller('ValidController', ['$scope', function($scope) {

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
		english: '',
		password: '',
		password2: ''
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

}])

.directive('match', function() {
	return {
		require: 'ngModel',
		link: function(scope, elem, attrs, modelCtrl) {
			return modelCtrl.$parsers.push(function(viewValue) {

				var val;
				if (attrs.match == null) {
					return viewValue;
				}
				val = scope.$eval(attrs.match);
				if (val !== viewValue) {
					modelCtrl.$setValidity("match", false);
				} else {
					modelCtrl.$setValidity("match", true);
				}
				return viewValue;	
			});
		}
	};
});
