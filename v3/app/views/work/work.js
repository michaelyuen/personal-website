'use strict';

angular.module('work', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/work', {
        templateUrl: 'views/work/work.html',
        controller: 'WorkController',
        access: 'public'
    });
}])

.controller('WorkController', ['$rootScope', '$scope', '$timeout', function ($rootScope, $scope, $timeout) {

	$rootScope.page_name    = 'Work';
	$rootScope.stylesheet   = 'work';

	$timeout(enableTransitions, 600);
	function enableTransitions () {
		angular.element(document.querySelector('.menu')).addClass('enable');
	}
}]);