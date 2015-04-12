(function() {
	'use strict';

	angular.module('Page')
		.factory('Nav', ['$location', 'Auth', function($location, Auth) {
			var navigationItems = {
				"guest": [
					{
						"icon": "",
						"text": "Home",
						"url": "/"
					},
					{
						"icon": "",
						"text": "About",
						"url": "/about"
					},
					{
						"icon": "",
						"text": "Register/Sign in",
						"url": "/sign-in"
					},
				],
				"user": [
					{
						"icon": "",
						"text": "My Organizations",
						"url": "/organizations"
					}
				]
			};

			var which = function() {
				return Auth.userType();
			};

			var nav = {
				"items": function() {
					return navigationItems[which()];
				},
				"select": function(item) {
					$location.path(item.url);
				},
				"selected": function(item) {
					return $location.path() == item.url;
				}
			};

			return nav;

		}]);

})();
