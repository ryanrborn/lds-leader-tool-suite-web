var app = angular.module('llts', ['ngMaterial', 'ngRoute', 'ngResource']);

app.constant("llts_config", {
	"api_host": "local.llts-backend.com",
	"protocol": window.location.protocol
});

app.config(['$mdThemingProvider', '$mdIconProvider', '$routeProvider', '$locationProvider', '$resourceProvider', function($mdThemingProvider, $mdIconProvider, $routeProvider, $locationProvider, $resourceProvider){

	$routeProvider
		.when('/', {
			templateUrl: './src/page/view/landing.html',
			controller: 'LandingController'
		}).when('/about', {
			templateUrl: './src/page/view/about.html',
			controller: 'AboutController'
		}).when('/sign-in', {
			templateUrl: './src/auth/view/auth.html',
			controller: 'AuthController'
		}).otherwise({
			templateUrl: './src/page/view/404.html',
			controller: 'NotFoundController'
		});

	$locationProvider.html5Mode(true);

	$mdIconProvider
		.icon("menu"       , "./assets/svg/menu.svg"        , 24)
		.icon("share"      , "./assets/svg/share.svg"       , 24);

	// $mdThemingProvider.theme('default')
	// 	.primaryPalette('blue')
	// 	.accentPalette('red');

	$resourceProvider.defaults.stripTrailingSlashes = false;

}]);
