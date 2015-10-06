'use strict';

angular.module('personal_website', [
    'ngRoute',
    'ngAnimate'
])

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true).hashPrefix('!');
    
    $routeProvider.when('/:page_name?', { controller: 'MainController' });
}])

.controller('MainController', ['$rootScope', '$scope', '$animate', '$timeout', '$route',
    function($rootScope, $scope, $animate, $timeout, $route) {
    
        $scope.menu_open = false;

        $scope.toggleMenu = function () {
            $scope.menu_open = !$scope.menu_open;
        };

        $scope.closeMenu = function () {
            $scope.menu_open = false;
        }

        $scope.$on('$routeChangeStart',function(event, next, current){

            if (next.params.page_name) {
                $rootScope.page_name = next.params.page_name[0].toUpperCase() + next.params.page_name.slice(1);
                $scope.page_url = '/views/' + next.params.page_name + '.html';
                $timeout(enableTransitions, 600);
            }
            else {
                $rootScope.page_name = 'Home';
                $animate.enabled(false);
                angular.element(document.querySelector('.menu')).removeClass('enable');
            }
        });

        function enableTransitions () {
            angular.element(document.querySelector('.menu')).addClass('enable');
            $animate.enabled(true);
        }
}]);