var ValidApp = angular.module('ValidApp', []);
ValidApp.controller('ValidController', function($scope) {

    var me = this;

    $scope.submitForm = function(isValid) {
        if (isValid) {
            //Persist data
        }
    };

    me.send = function() {
        var me = this;
        alert(me.user.name + '::' + me.user.username + '::' + me.user.email);
    };
});
