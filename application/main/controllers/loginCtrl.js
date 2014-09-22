(function (window) {
    
    'use strict';
    
    var angular = window.angular;
    
    angular.module('RadartApp.main').controller('LoginCtrl', ['$scope', function ($scope, $state) {
        
        $scope.login = function () {
            $scope.authClient.login('password', {email: this.email, password: this.password});
        };
        
    }]);
    
}(window));