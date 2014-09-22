(function (window) {
    
    'use strict';
    
    var angular = window.angular;
    
    angular.module('RadartApp.main').controller('SignupCtrl', ['$scope', '$state', function ($scope, $state) {
        
        $scope.signup = function () {
            $scope.authClient.createUser(this.email, this.password, function (error, user) {
                if (error) {
                    $scope.openAlert('Cannot create user. Check that email is valid and password is alphanumeric. This may also be a duplicate user.', 'danger');
                } else {
                    $scope.openAlert('Succesfully created account! Logging In', 'success');
                    $state.go('app.dashboard');
                }
            });
        };
        
    }]);
    
}(window));