(function() {
	'use strict';

	angular.module('Page')
		.controller('TitleController', ['$scope', 'Page', function($scope, Page){
			$scope.page = Page;
		}]);

})();
