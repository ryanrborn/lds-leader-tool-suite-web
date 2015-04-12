'use strict';

var app = angular.module('llts', ['ngMaterial', 'ngRoute', 'ngResource', 'ngMessages', 'Auth', 'Config']);

app.config(['$mdThemingProvider', '$mdIconProvider', '$routeProvider', '$locationProvider', '$resourceProvider', 'RoutesProvider', function($mdThemingProvider, $mdIconProvider, $routeProvider, $locationProvider, $resourceProvider, RoutesProvider){

	var routes = RoutesProvider.$get().routes();
	for (var path in routes) {
		$routeProvider.when(path, routes[path]);
	}
	$routeProvider.otherwise({
			templateUrl: './src/page/view/404.html',
			controller: 'NotFoundController'
		});

	$locationProvider.html5Mode(true);

	$mdIconProvider
		.icon("menu"		, "./assets/svg/menu.svg"		, 24)
		.icon("share"		, "./assets/svg/share.svg"		, 24)
		.icon("logo"		, "./assets/svg/temple.svg"		, "1052");

	// $mdThemingProvider.theme('default')
	// 	.primaryPalette('blue')
	// 	.accentPalette('red');

	$resourceProvider.defaults.stripTrailingSlashes = false;

}]);

app.run(['$rootScope', '$location', '$http', '$mdToast', 'Auth', 'Routes', function($rootScope, $location, $http, $mdToast, Auth, Routes) {
	$rootScope.$on('$locationChangeStart', function(event, next, current) {
		for (var i in Routes) {
			if (next.indexOf(i) != -1) {
				if (Routes[i].requireLogin && !Auth.isLoggedIn()) {
					event.preventDefault();
					$location.path("/sign-in");
					$mdToast.show(
						$mdToast.simple()
							.content("You must sign in you access this page!")
							.position("top right")
					);
				}
			}
		}
	});

	$http.defaults.headers.common.Authorization = "Token "+Auth.token();
}]);