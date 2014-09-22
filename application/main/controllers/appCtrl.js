(function (window) {
    
    'use strict';
    
    var angular = window.angular,
        Firebase = window.Firebase,
        FirebaseSimpleLogin = window.FirebaseSimpleLogin;
    
    angular.module('RadartApp.main').controller('AppCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {
        
        $scope.rootNode = new Firebase("https://radart.firebaseio.com/");
        
        $scope.authClient = new FirebaseSimpleLogin($scope.rootNode, function (error, user) {
            if (error) {
                $scope.openAlert('Incorrect UserName/Password', 'danger');
            } else if (user) {
                $state.go('app.dashboard');
            } else {
                $state.go('app.home');
            }
        });
        
        $scope.alerts = [];
        
        $scope.openAlert = function (message, messageType) {
            $rootScope.$broadcast('modalError', message);
            if (typeof messageType === "string") {
                $scope.alerts.push({type: messageType, message: message});
            } else {
                $scope.alerts.push({message: message});
            }
        };
        
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };
        
    }]);
    
}(window));