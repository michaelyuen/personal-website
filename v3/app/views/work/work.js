'use strict';

angular.module('work', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/work', {
        templateUrl: 'views/work/work.html',
        controller: 'WorkController',
        access: 'public'
    });
}])

.controller('WorkController', ['$rootScope', '$scope', function ($rootScope, $scope) {

	$rootScope.page_name    = 'Work';
	$rootScope.stylesheet   = 'work';
}]);