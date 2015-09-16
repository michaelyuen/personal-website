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

.controller('HomeController', ['$rootScope', '$scope', '$animate', function ($rootScope, $scope, $animate) {

	$rootScope.page_name = 'Home';

	angular.element(document.querySelector('.menu')).removeClass('enable');

    $scope.getContentUrl = function () {

        if ($rootScope.prev_url) {
            return $rootScope.prev_url;
        }
        else {
            return 'views/home/home.html';
        }
    }

    $animate.enabled(false);
}]);