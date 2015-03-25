app.factory('Nav', ['$location', function($location){
	var navigationItems = {
		"default": [
			{
				"icon": "svg-3",
				"text": "Home",
				"url": "/"
			},
			{
				"icon": "svg-1",
				"text": "Login",
				"url": "/login"
			},
			{
				"icon": "svg-2",
				"text": "About Us",
				"url": "/about"
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