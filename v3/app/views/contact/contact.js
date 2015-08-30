'use strict';

angular.module('contact', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/contact', {
        templateUrl: 'views/contact/contact.html',
        controller: 'ContactController',
        access: 'public'
    });
}])

.controller('ContactController', ['$rootScope', '$scope', function ($rootScope, $scope) {

	$rootScope.page_name    = 'Contact';
	$rootScope.stylesheet   = 'contact';
}]);