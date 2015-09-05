'use strict';

angular.module('about', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/about', {
        templateUrl: 'views/about/about.html',
        controller: 'AboutController',
        access: 'public'
    });
}])

.controller('AboutController', ['$rootScope', '$scope', '$timeout', function ($rootScope, $scope, $timeout) {

	$rootScope.page_name    = 'About';
	$rootScope.stylesheet   = 'about';

	$timeout(enableTransitions, 600);
	function enableTransitions () {
		angular.element(document.querySelector('.menu')).addClass('enable');
	}
	
}]);