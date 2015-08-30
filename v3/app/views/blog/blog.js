'use strict';

angular.module('blog', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/blog', {
        templateUrl: 'views/blog/blog.html',
        controller: 'BlogController',
        access: 'public'
    });
}])

.controller('BlogController', ['$rootScope', '$scope', function ($rootScope, $scope) {

	$rootScope.page_name    = 'Blog';
	$rootScope.stylesheet   = 'blog';
}]);