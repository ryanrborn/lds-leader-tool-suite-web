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
				"/logout": {
					templateUrl: './src/auth/view/auth.html',
					controller: 'LogoutController',
					requireLogin: true
				},
				"/organizations": {
					templateUrl: './src/organization/view/index.html',
					controller: 'OrganizationListController',
					requireLogin: true
				},
				"/organizations/:id": {
					templateUrl: './src/organization/view/organization.html',
					controller: 'OrganizationDetailController',
					requireLogin: true
				}
			};

			return {
				routes: function() { return routes; }
			};
		}]);
})();