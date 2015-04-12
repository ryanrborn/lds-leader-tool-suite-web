(function() {
	'use strict';

	angular.module('Page')
		.controller('AboutController', ['$scope', 'Page', function($scope, Page){
			$scope.page = Page;
			$scope.page.setTitle("About");
		}]);

})();
