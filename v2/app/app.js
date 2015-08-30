'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('Personal_Website', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap'
]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true).hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/'});
}]);

app.controller('MainController', function ($rootScope, $scope, $location, $anchorScroll) {

    $rootScope.page_name  = 'Michael Clayton Yuen';

    if ($location.hash()) {
        $scope.shrink_header = 'true';
        $scope.active = $location.hash();
    }

    $scope.select = function (page) {

        if (page == 'home') {
            
            $scope.shrink_header = 'false';
            $scope.active = null;
            $location.hash(null);
        }
        else{
            $scope.shrink_header = 'true';
            $scope.active = page;
            $location.hash(page);
        }
    }
});