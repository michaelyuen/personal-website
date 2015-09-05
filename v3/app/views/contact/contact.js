'use strict';

angular.module('contact', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/contact', {
        templateUrl: 'views/contact/contact.html',
        controller: 'ContactController',
        access: 'public'
    });
}])

.controller('ContactController', ['$rootScope', '$scope', '$timeout', function ($rootScope, $scope, $timeout) {

	$rootScope.page_name    = 'Contact';
	$rootScope.stylesheet   = 'contact';

	$timeout(enableTransitions, 600);
	function enableTransitions () {
		angular.element(document.querySelector('.menu')).addClass('enable');
	}
}]);