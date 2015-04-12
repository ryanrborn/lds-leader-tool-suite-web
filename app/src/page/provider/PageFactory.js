app.factory('Page', ['$rootScope', function($rootScope){
	var title = "";

	return {
		title: function() {
			return title;
		},
		setTitle: function(newTitle) {
			title = newTitle;
		}
	};
}]);
