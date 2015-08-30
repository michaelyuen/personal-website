'use strict';

angular.module('about', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/about', {
        templateUrl: 'views/about/about.html',
        controller: 'AboutController',
        access: 'public'
    });
}])

.controller('AboutController', ['$rootScope', '$scope', function ($rootScope, $scope) {

	$rootScope.page_name    = 'About';
	$rootScope.stylesheet   = 'about';
}]);