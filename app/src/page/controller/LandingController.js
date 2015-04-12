(function() {
	'use strict';

	angular.module('Page')
		.controller('LandingController', ['$scope', 'Page', function($scope, Page){
			$scope.page = Page;
			$scope.page.setTitle("LDS Leader Tool Suite");

		}]);

})();
