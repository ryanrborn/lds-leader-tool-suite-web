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
		}).otherwise({
			templateUrl: './src/page/view/404.html',
			controller: 'ErrorController'
		});

	$locationProvider.html5Mode(true);

	$mdIconProvider
		.defaultIconSet("./assets/svg/avatars.svg", 128)
		.icon("menu"       , "./assets/svg/menu.svg"        , 24)
		.icon("share"      , "./assets/svg/share.svg"       , 24)
		.icon("google_plus", "./assets/svg/google_plus.svg" , 512)
		.icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
		.icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
		.icon("phone"      , "./assets/svg/phone.svg"       , 512);

	$mdThemingProvider.theme('default')
		.primaryPalette('blue')
		.accentPalette('red');

	$resourceProvider.defaults.stripTrailingSlashes = false;

}]);
