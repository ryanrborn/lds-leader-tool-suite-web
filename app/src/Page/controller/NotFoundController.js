(function() {
	'use strict';

	angular.module('Page')
		.controller('NotFoundController', ['$scope', 'Page', function($scope, Page){
			$scope.page = Page;
			$scope.page.setTitle("Not Found");
		}]);

})();
