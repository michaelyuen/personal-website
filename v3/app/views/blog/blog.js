'use strict';

angular.module('blog', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/blog', {
        templateUrl: 'views/blog/blog.html',
        controller: 'BlogController',
        access: 'public'
    });
}])

.controller('BlogController', ['$rootScope', '$scope', '$timeout', function ($rootScope, $scope, $timeout) {

	$rootScope.page_name    = 'Blog';
	$rootScope.stylesheet   = 'blog';

	$timeout(enableTransitions, 600);
	function enableTransitions () {
		angular.element(document.querySelector('.menu')).addClass('enable');
	}
	
}]);