var ValidApp = angular.module('ValidApp', []);
ValidApp.controller('ValidController', ['$scope', function($scope) {

    $scope.submitForm = function(isValid) {
        if (isValid) {
            //Persist data
        }
    };

    $scope.send = function() {
        alert($scope.user.name + '::' + $scope.user.username + '::' + $scope.user.email);
    };
}]);
