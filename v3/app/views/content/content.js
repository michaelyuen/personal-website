'use strict';

angular.module('content', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/:page_name', {
        templateUrl: function (params) {
        	return 'views/content/' + params.page_name + '.html';
        },
        controller: 'ContentController',
        access: 'public'
    });
}])

.controller('ContentController', ['$rootScope', '$scope', '$routeParams', '$timeout', '$animate', function ($rootScope, $scope, $routeParams, $timeout, $animate) {

	$rootScope.page_name    = $routeParams.page_name.charAt(0).toUpperCase() + $routeParams.page_name.slice(1);

	$timeout(enableTransitions, 600);
	function enableTransitions () {
		angular.element(document.querySelector('.menu')).addClass('enable');
		$animate.enabled(true);
	}
}]);