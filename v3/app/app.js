'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('personal_website', [
    'ngRoute',
    'ngAnimate',
    'parse-angular',
    'ui.bootstrap',
    'ui.validate',
    'customFilters',
    'home',
    'about',
    'work',
    'contact',
    'blog'
]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    //Parse.initialize("PEKZ1k3yMaY5A8KlRFZ6gI0fhicQ9Dp9K3IEczje", "YCqsf34KeicGdaRaoVjXrvJehc9X3509GvS6V6sN");

    //$locationProvider.html5Mode(true).hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/'});
}]);

app.run(['$rootScope', '$routeParams', function ($rootScope, $routeParams) {

    $rootScope.$on("$routeChangeStart", function (event, next, current) {

        if (current && next.originalPath == '/') {
            $rootScope.prev_url = 'views' + current.originalPath + current.originalPath + '.html';
        }
    });
}]);

// Global Controllers (used on index.html)
app.controller('topPageController', ['$rootScope', '$scope', function($rootScope, $scope) {
    
    $scope.menu_open = false;

    $scope.toggleMenu = function () {
        $scope.menu_open = !$scope.menu_open;
    };

    $scope.closeMenu = function () {
        $scope.menu_open = false;
    }
}]);