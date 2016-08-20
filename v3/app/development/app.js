'use strict';

angular.module('personal_website', [
	'ngRoute',
	'ngAnimate'//,
	// 'angulartics',
	// 'angulartics.google.analytics'
])

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

	//$locationProvider.html5Mode(true).hashPrefix('!');

	$routeProvider
		.when('/',              { controller: 'MainController' })
		.when('/about',         { controller: 'MainController', type: 'page' })
		.when('/work',          { controller: 'MainController', type: 'page' })
		.when('/work/:project', { controller: 'MainController', type: 'sub' })
		.when('/contact',       { controller: 'MainController', type: 'page' })
		.otherwise( {redirectTo: '/'} );
}])

.controller('MainController', ['$rootScope', '$scope', '$location', '$route',
	function($rootScope, $scope, $location, $route) {

		$scope.menu_open = false;

		$scope.toggleMenu = function () {
			$scope.menu_open = !$scope.menu_open;

			if ($scope.menu_open) {
				TweenLite.to('.header', .5, {className: '+=open'});
			}
			else {
				TweenLite.to('.header', .5, {className: '-=open'});
			}
		};

		$scope.closeMenu = function () {
			$scope.menu_open = false;
			TweenLite.to('.header', .75, {className: '-=open'});
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

				// Animation from page to home
				if (current && current.type == 'page') {
					TweenLite.to('.header', .75, {className: 'header'});
					TweenLite.set('.menu', {className: '-=enable'});
				}
				else{
					$scope.page_url = null;
					TweenLite.set('.header', {className: 'header'});
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

					if (current) {
						// From home to page
						if (!current.type) {

							TweenLite.to('.header', .75, {className: '+=shrink'});
							TweenLite.set('.header', {className: '+=switch', delay: .75});
							TweenLite.set('.menu', {className: '+=enable', delay: .6});
						}
						// From page to page
						else if (current.type == 'page') {
							$scope.page = true;
						}
						// From sub to page
						else if (current.type == 'sub'){
							$scope.sub_to_page = true;
							TweenLite.set('.menu', {className: '+=enable', delay: .6});
						}
					}
					// Page on load
					else {
						TweenLite.set('.header', {className: '+=shrink'});
						TweenLite.set('.header', {className: '+=switch'});
						TweenLite.set('.menu', {className: '+=enable', delay: .25});
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

					if (current) {
						if (current.type == 'page') {
							$scope.sub = false;
							$scope.page_to_sub = true;
						}
						else{
							TweenLite.to('header', .75, {className: '+=shrink'});
							TweenLite.set('header', {className: '+=switch', delay: .75});
						}
					}
					else{
						TweenLite.set('header', {className: '+=shrink switch'});
					}
				}
			}
		});

		function capitalizeFirstLetter (input) {

			if(Array.isArray(input)){

				var new_array = [];

				for(var i=0; i<input.length; i++){
					var string = input[i];
					new_array[i] = string[0].toUpperCase() + string.substr(1);
				}

				return new_array;
			}
			else{
				return input[0].toUpperCase() + input.substr(1);
			}
		}
}])

.animation('.page', ['$window', function ($window) {
	return {
		enter: function (el, done) {
			if ($window.innerWidth >= 992) {
				TweenLite.fromTo(el, .3, {autoAlpha: 0}, {autoAlpha: 1, delay: .3, onComplete: done});
			}
			else {
				done();
			}
		},
		leave: function (el, done) {
			if ($window.innerWidth >= 992) {
				TweenLite.to(el, .3, {autoAlpha: 0, onComplete: done});
			}
			else {
				done();
			}
		}
	}
}])
.animation('.page-to-sub', ['$window', function ($window) {
	return {
		enter: function (el, done) {
			if ($window.innerWidth < 992){
				TweenLite.set(el, {className: '+= sub'});
				TweenLite.fromTo(el, .7, {yPercent: 100}, {yPercent: 0, clearProps: 'y', onComplete: done});
			}
			else if ($window.innerWidth >= 992){
				TweenLite.set(el, {width: $window.innerWidth, padding: 0, position: 'relative', zIndex: 4});
				TweenLite.fromTo(el, .5, {yPercent: 100}, {yPercent: 0, clearProps: 'y', onComplete: done});
			}

		},
		leave: function (el, done) {
			if ($window.innerWidth < 991) {
				TweenLite.set(el, {position: 'absolute', top: 0, zIndex: 0});
				TweenLite.set(el, {delay: .7, onComplete: done});
			}
			else if ($window.innerWidth > 992) {
				TweenLite.set(el, {delay: .5, onComplete: done});
			}
			else {
				done();
			}
		}
	}
}])
.animation('.sub-to-page', ['$window', function ($window) {
	return {
		leave: function (el, done) {
			if ($window.innerWidth < 991) {
				TweenLite.set(el, {className: '+= sub'});
				TweenLite.fromTo(el, .7, {position: 'absolute', top: 0}, {yPercent: 100, delay: .3, onComplete: done});
			}
			else if ($window.innerWidth >= 992) {
				TweenLite.set(el, {className: '+= sub'});
				TweenLite.to(el, .7, {yPercent: 100, delay: .3, onComplete: done});
			}
			else{
				done();
			}
		}
	}
}]);