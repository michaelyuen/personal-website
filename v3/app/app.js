'use strict';

angular.module('personal_website', [
    'ngRoute',
    'ngAnimate'
    //'angulartics',
    //'angulartics.google.analytics'
])

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    //$locationProvider.html5Mode(true).hashPrefix('!');
    
    //$routeProvider.when('/:page?/:sub_page?', { controller: 'MainController' });
    $routeProvider
        .when('/',              { controller: 'MainController' })
        .when('/about',         { controller: 'MainController', type: 'page' })
        .when('/work',          { controller: 'MainController', type: 'page' })
        .when('/work/:project', { controller: 'MainController', type: 'sub' })
        .when('/contact',       { controller: 'MainController', type: 'page' })
        .otherwise( {redirectTo: '/'} );
}])

.controller('MainController', ['$rootScope', '$scope', '$location', '$animate', '$timeout', '$route',
    function($rootScope, $scope, $location, $animate, $timeout, $route) {
    
        $scope.menu_open = false;

        $scope.toggleMenu = function () {
            $scope.menu_open = !$scope.menu_open;
        };

        $scope.closeMenu = function () {
            $scope.menu_open = false;
        }

        $scope.click = function () {
            $scope.clicked = true;
        }

        $scope.$on('$routeChangeStart', function (event, next, current) {

            var url = $location.path().substr(1);
            $scope.page        = false;
            $scope.sub         = false;
            $scope.sub_to_page = false;
            $scope.page_to_sub = false;

            // Path is /
            if (url === '') {
                
                $rootScope.page_name = 'Home';
                $scope.current = '';
                //$animate.enabled(false);
                angular.element(document.querySelector('.menu')).removeClass('enable');
            }
            // Path is a page or sub page
            else {

                var url_array = url.split('/');

                // Path is page
                if (url_array.length === 1) {
                    
                    $rootScope.page_name = capitalizeFirstLetter(url_array[0]);
                    $scope.current = url_array[0];
                    $scope.page = true;
                    $scope.page_url = '/views/' + url_array[0] + '/' + url_array[0] + '.html';

                    if (current && current.type == 'sub'){
                        $scope.sub_to_page = true;
                    }
                    
                }
                // Path is sub page
                else {

                    var page_name = '';
                    var capitalized_array = capitalizeFirstLetter(url_array[1].split('-'));

                    for (var i=0; i < capitalized_array.length; i++) {
                        page_name += capitalized_array[i] + ' ';
                    }

                    $rootScope.page_name = page_name + '| ' + capitalizeFirstLetter(url_array[0]);
                    $scope.current = url_array[0];
                    $scope.sub = true;
                    $scope.page_url = '/views/' + url_array[0] + '/sub/' + url_array[1] + '.html';

                    if (current && current.type == 'page'){
                        $scope.page_to_sub = true;
                    }
                }

                //$timeout(enableTransitions, 600);
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
}])

.animation('.header', [ function () {

    return {
        addClass: function (el, className, done) {
            TweenLite.to(el, .75, {width: 300, ease: Power0.easeOut, onComplete: done});
        },

        removeClass: function (el, className, done) {
            console.log(el[0].parentElement.offsetWidth);
            TweenLite.to(el, .75, {width: el[0].parentElement.offsetWidth, ease: Power0.easeIn, onComplete: done});
        }
    }
}])