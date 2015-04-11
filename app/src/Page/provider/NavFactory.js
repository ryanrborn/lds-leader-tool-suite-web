app.factory('Nav', ['$location', 'AuthFactory', function($location, AuthFactory) {
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
		return AuthFactory.userType();
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