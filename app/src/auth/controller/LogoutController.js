(function() {
	'use strict';

	angular.module('Auth')
		.controller('LogoutController', ['$location', 'Auth', function($location, Auth) {
			Auth.logout();
			$location.path("/");
		}]);
})();