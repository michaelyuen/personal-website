'use strict';

var app = angular.module('personal_website', [
    'ngRoute',
    'ngAnimate'
    //'angulartics',
    //'angulartics.google.analytics'
]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true).hashPrefix('!');
    
    $routeProvider.when('/:page?/:sub_page?', { controller: 'MainController' });
}]);

app.controller('MainController', ['$rootScope', '$scope', '$location', '$animate', '$timeout', '$route',
    function($rootScope, $scope, $location, $animate, $timeout, $route) {
    
        $scope.menu_open = false;

        $scope.toggleMenu = function () {
            $scope.menu_open = !$scope.menu_open;
        };

        $scope.closeMenu = function () {
            $scope.menu_open = false;
        }

        $scope.$on('$routeChangeStart', function (event, next, current) {

            if (next.params.page) {

                console.log(next.params);

                if (next.params.page == 'about' || next.params.page == 'work' || next.params.page == 'contact') {

                    if (next.params.sub_page) {

                        var page_name = '';
                        var capitalized_array = capitalizeFirstLetter(next.params.sub_page.split('-'));

                        for (var i=0; i < capitalized_array.length; i++) {
                            page_name += capitalized_array[i] + ' ';
                        }

                        $rootScope.page_name = page_name + '| ' + capitalizeFirstLetter(next.params.page);
                        $scope.page_url = '/views/' + next.params.page + '/project/' + next.params.sub_page + '.html';
                        $timeout(enableTransitions, 600);
                    }
                    else {
                        $rootScope.page_name = capitalizeFirstLetter(next.params.page);
                        $scope.page_url = '/views/' + next.params.page + '.html';
                        $timeout(enableTransitions, 600);
                    }
                }
                else {
                    $location.url('/');
                }
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

        function capitalizeFirstLetter (input) {

            if(Array.isArray(input)){

                var new_array = [];

                for(var i=0; i<input.length; i++){
                    var string = input[i];
                    new_array[i]   = string[0].toUpperCase() + string.substr(1);
                }

                return new_array;
            }
            else{
                return input[0].toUpperCase() + input.substr(1);
            }
        }
}]);

app.controller('ProjectController', ['$rootScope', '$scope', function ($rootScope, $scope) {

    $rootScope.page_name = 'Logoji Labs';
    console.log('hello');

}]);