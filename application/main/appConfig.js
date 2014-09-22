(function (window) {
    'use strict';
    
    var angular = window.angular,
        app = angular.module('RadartApp', ['ui.router', 'ui.bootstrap', 'firebase', 'RadartApp.main']);
    
    
    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        
        $stateProvider
            .state('app', {
                abstract: true,
                controller: "AppCtrl"
            })
            .state('app.home', {
                url: "/home",
                controller: "HomeCtrl",
                templateUrl: "application/main/partials/home.html"
            })
            .state('app.login', {
                url: "/login",
                controller: "LoginCtrl",
                templateUrl: "application/main/partials/login.html"
            })
            .state('app.signup', {
                url: "/signup",
                controller: "SignupCtrl",
                templateUrl: "application/main/partials/signup.html"
            })
            .state('app.dashboard', {
                url: "/dashboard",
                controller: "DashboardCtrl",
                templateUrl: "application/user/partials/dashboard.html",
                resolve: {
                    "currentUser": ["simpleLogin", function (simpleLogin) {
                        return simpleLogin.$getCurrentUser();
                    }]
                }
            })
            .state('app.settings', {
                url: "/settings",
                controller: "SettingsCtrl",
                templateUrl: "application/user/partials/settings.html",
                resolve: {
                    "currentUser": ["simpleLogin", function (simpleLogin) {
                        return simpleLogin.$getCurrentUser();
                    }]
                }
            })
            .state('app.gallery', {
                url: "/gallery",
                controller: "GalleryCtrl",
                templateUrl: "application/gallery/partials/gallery.html",
                resolve: {
                    "currentUser": ["simpleLogin", function (simpleLogin) {
                        return simpleLogin.$getCurrentUser();
                    }]
                }
            })
            .state('app.pictureUpload', {
                url: "/picture-upload",
                controller: "UploadCtrl",
                templateUrl: "application/gallery/partials/upload.html",
                resolve: {
                    "currentUser": ["simpleLogin", function (simpleLogin) {
                        return simpleLogin.$getCurrentUser();
                    }]
                }
            });
        
        $urlRouterProvider.otherwise('/home');
    }]);
    
}(window));