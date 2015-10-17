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
    
        // screen width
        var html   = document.getElementsByTagName('html')[0],
            width  = html.offsetWidth,
            height = html.offsetHeight;

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
                //angular.element(document.querySelector('.menu')).removeClass('enable');

                // Animation from page to home
                if (current && current.type == 'page') {

                    if (width < 768) {
                        TweenLite.to('.header', .5, {height: height});
                        TweenLite.set('.logo', {display: 'none'});
                        TweenLite.set('.hamburger', {display: 'none'});
                        TweenLite.set('.avatar-container', {display: 'block'});
                        TweenLite.to('.avatar', .5, {width: 200, height: 200});
                        TweenLite.to('.name', .5, {fontSize: 30, display: 'block'});
                    }
                    else if (width < 992) {
                        TweenLite.to('.header', .5, {height: height});
                        TweenLite.set('.logo', {display: 'none'});
                        TweenLite.set('.hamburger', {display: 'none'});
                        TweenLite.set('.avatar-container', {display: 'block'});
                        TweenLite.to('.avatar', .5, {width: 300, height: 300});
                        TweenLite.to('.name', .5, {fontSize: 42, display: 'block'});
                    }
                    else if (width < 1025) {
                        TweenLite.to('.header', .75, {width: width});
                        TweenLite.set('.logo', {autoAlpha: 0});
                        TweenLite.to('.avatar', .75, {width: 300, height: 300});
                        TweenLite.to('.name', .75, {fontSize: 46, display: 'block'});
                        TweenLite.to('.menu li a', .75, {fontSize: 20}); 
                    }
                    else {
                        TweenLite.to('.header', .75, {width: width});
                        TweenLite.set('.logo', {autoAlpha: 0});
                        TweenLite.to('.avatar', .75, {width: 300, height: 300});
                        TweenLite.to('.name', .75, {fontSize: 46, display: 'block'});
                        TweenLite.to('.menu li a', .75, {fontSize: 20});   
                    }
                }
            }
            // Path is a page or sub page
            else {

                var url_array = url.split('/');

                // Path is page
                if (url_array.length === 1) {
                    
                    $rootScope.page_name = capitalizeFirstLetter(url_array[0]);
                    $scope.current = url_array[0];
                    $scope.page_url = '/views/' + url_array[0] + '/' + url_array[0] + '.html';

                    // Animation
                    if (current) {
                        // From home to page
                        if (!current.type) {

                            if (width < 768) {
                                TweenLite.to('.header', .5, {height: 52});
                                TweenLite.to('.logo', .1, {display: 'block', autoAlpha: 1, delay: .4});
                                TweenLite.set('.logo .hidden', {display: 'none'});
                                TweenLite.to('.hamburger', .1, {display: 'block', autoAlpha: 1, delay: .4});
                                TweenLite.to('.avatar-container', 0, {display: 'none', delay: .5})
                                TweenLite.to('.avatar', .5, {width: 0, height: 0});
                                TweenLite.to('.name', .5, {fontSize: 0, display: 'none'});
                            }
                            else if (width < 992) {
                                TweenLite.to('.header', .5, {height: 64});
                                TweenLite.to('.logo', .1, {display: 'block', autoAlpha: 1, delay: .4});
                                TweenLite.set('.logo .hidden', {display: 'none'});
                                TweenLite.to('.hamburger', .1, {display: 'block', autoAlpha: 1, delay: .4});
                                TweenLite.to('.avatar-container', 0, {display: 'none', delay: .5})
                                TweenLite.to('.avatar', .5, {width: 0, height: 0});
                                TweenLite.to('.name', .5, {fontSize: 0, display: 'none'});

                            }
                            else if (width < 1025) {
                                TweenLite.to('.header', .75, {width: 250});
                                TweenLite.to('.logo', .15, {autoAlpha: 1, delay: .6});
                                TweenLite.to('.avatar', .75, {width: 175, height: 175});
                                TweenLite.to('.name', .3, {fontSize: 0, display: 'none'});
                                TweenLite.to('.menu li a', .75, {fontSize: 16});
                            }
                            else {
                                TweenLite.to('.header', .75, {width: 300});
                                TweenLite.to('.logo', .15, {autoAlpha: 1, delay: .6});
                                TweenLite.to('.avatar', .75, {width: 200, height: 200});
                                TweenLite.to('.name', .3, {fontSize: 0, display: 'none'});
                                TweenLite.to('.menu li a', .75, {fontSize: 16});
                            }
                            
                            // Disable then enable animation - prevents page enter animation
                            $animate.enabled(false);
                            $timeout(function () {$animate.enabled(true)},100);
                        }
                        // From page to page
                        else if (current.type == 'page') {
                            $scope.page = true;
                        }
                        // From sub to page
                        else if (current.type == 'sub'){
                            $scope.sub_to_page = true;
                        }
                    }
                    // Page on load
                    else {
                        if (width < 768) {
                            TweenLite.set('.header', {height: 52});
                            TweenLite.set('.logo', {display: 'block', autoAlpha: 1});
                            TweenLite.set('.logo .hidden', {display: 'none'});
                            TweenLite.set('.hamburger', {display: 'block', autoAlpha: 1});
                            TweenLite.set('.avatar-container', {display: 'none'});
                            TweenLite.set('.avatar', {width: 0, height: 0});
                            TweenLite.set('.name', {fontSize: 0, display: 'none'});
                        }
                        else if (width < 992) {
                            TweenLite.set('.header', {height: 64});
                            TweenLite.set('.logo', {display: 'block', autoAlpha: 1});
                            TweenLite.set('.logo .hidden', {display: 'none'});
                            TweenLite.set('.hamburger', {display: 'block', autoAlpha: 1});
                            TweenLite.set('.avatar-container', {display: 'none'});
                            TweenLite.set('.avatar', {width: 0, height: 0});
                            TweenLite.set('.name', {fontSize: 0, display: 'none'});
                        }
                        else if (width < 1025) {
                            TweenLite.set('.header', {width: 250});
                            TweenLite.set('.logo', {opacity: 1});
                            TweenLite.set('.avatar', {width: 175, height: 175});
                            TweenLite.set('.name', {display: 'none'});
                            TweenLite.set('.menu li a', {fontSize: 16});
                        }
                        else {
                            TweenLite.set('.header', {width: 300});
                            TweenLite.set('.logo', {opacity: 1});
                            TweenLite.set('.avatar', {width: 200, height: 200});
                            TweenLite.set('.name', {display: 'none'});
                            TweenLite.set('.menu li a', {fontSize: 16});
                        }
                        
                        // Disable then enable animation - prevents animation on load
                        $animate.enabled(false);
                        $timeout(function () {$animate.enabled(true)},100);
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
                    $scope.page_url = '/views/' + url_array[0] + '/sub/' + url_array[1] + '.html';

                    // Animation
                    if (current) {
                        if (current.type == 'page') {
                            $scope.page_to_sub = true;
                        }
                        else if (current.type == 'sub') {

                        }
                    }
                    else {

                    }
                }

                $timeout(enableTransitions, 600);
            }
        });

        function enableTransitions () {
            angular.element(document.querySelector('.menu')).addClass('enable');
        }
        
        // if (width < 768) {

        // }
        // else if (width < 992) {

        // }
        // else if (width < 1025) {

        // }
        // else {
            
        // }

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

.animation('.page', [ function () {

    var html = document.getElementsByTagName('html')[0], width = html.offsetWidth;

    if (width > 992) {
        return {
            enter: function (el, done) {
                TweenLite.fromTo(el, .5, {yPercent: 100}, {yPercent: 0, onComplete: done});

            },
            leave: function (el, done) {
                TweenLite.to(el, .5, {yPercent: -100});
            }
        }
    }
}])
.animation('.page-to-sub', [ function () {

    var html = document.getElementsByTagName('html')[0], width = html.offsetWidth;

    if (width > 992) {
        return {
            enter: function (el, done) {
                TweenLite.set(el, {width: width, padding: 0, position: 'relative', zIndex: 4});
                TweenLite.fromTo(el, .5, {yPercent: 100}, {yPercent: 0, onComplete: done});

            },
            leave: function (el, done) {
                TweenLite.set(el, {width: (width - 300), padding: '75px 100px', position: 'absolute', right: 0, zIndex: 0, onComplete: done});
            }
        }
    }
}])
.animation('.sub-to-page', [ function () {

    var html = document.getElementsByTagName('html')[0], width = html.offsetWidth;

    if (width > 992) {
        return {
            enter: function (el, done) {
                TweenLite.fromTo(el, .5, {yPercent: 0}, {yPercent: 0, onComplete: done});

            },
            leave: function (el, done) {
                TweenLite.set(el, {width: width, padding: 0, position: 'relative', zIndex: 4});
                TweenLite.to(el, .5, {yPercent: 100, onComplete: done});
            }
        }
    }
}]);