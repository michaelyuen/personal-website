'use strict';

angular.module('home', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {
        template: '<div ng-include="getContentUrl()"></div>',
        controller: 'HomeController',
        reloadOnSearch: false,
        access: 'public'
    });
}])

.controller('HomeController', ['$rootScope', '$scope', function ($rootScope, $scope) {

	$rootScope.page_name    = 'Home';
	$rootScope.stylesheet   = 'home';

	angular.element(document.querySelector('.menu')).removeClass('enable');

    $scope.getContentUrl = function () {

        if ($rootScope.prev_url) {
            return $rootScope.prev_url;
        }
        else {
            return 'views/home/home.html';
        }
    }
}]);