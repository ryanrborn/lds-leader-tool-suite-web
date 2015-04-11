(function() {
	'use strict';

	angular.module('Config')
		.factory('Routes', [function RoutesFactory() {
			var routes = {
				"/": {
					templateUrl: './src/page/view/landing.html',
					controller: 'LandingController',
					requireLogin: false
				},
				"/about": {
					templateUrl: './src/page/view/about.html',
					controller: 'AboutController',
					requireLogin: false
				},
				"/sign-in": {
					templateUrl: './src/auth/view/auth.html',
					controller: 'AuthController',
					requireLogin: false
				},
				"/organizations": {
					templateUrl: './src/organization/view/index.html',
					controller: 'OrganizationController',
					requireLogin: true
				}
			};

			return {
				routes: function() { return routes; }
			};
		}]);
})();