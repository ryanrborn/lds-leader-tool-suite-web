app.factory('Nav', ['$location', function($location){
	var navigationItems = {
		"default": [
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
				"icons": "",
				"text": "My Organizations",
				"url": "/organizations"
			}
		]
	};
	var which = "default";

	var nav = {
		"items": function() {
			return navigationItems[which];
		},
		"select": function(item) {
			$location.path(item.url);
		},
		"selected": function(item) {
			return $location.path() == item.url;
		},
		"setNav": function(newNav) {
			which = newNave;
		}
	};

	return nav;

}]);