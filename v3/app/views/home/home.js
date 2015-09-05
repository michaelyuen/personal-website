'use strict';

angular.module('home', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/home/home.html',
        controller: 'HomeController',
        access: 'public'
    });
}])

.controller('HomeController', ['$rootScope', '$scope', function ($rootScope, $scope) {

	$rootScope.page_name    = 'Home';
	$rootScope.stylesheet   = 'home';

	angular.element(document.querySelector('.menu')).removeClass('enable');
}]);