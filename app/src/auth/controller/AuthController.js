(function() {
	'use strict';

	angular.module('Auth')
		.controller('AuthController', ['$scope', 'Page', function($scope, Page){
			Page.setTitle("Register/Sign in");

			$scope.selectedTab = 0;

			$scope.next = function() {
				$scope.data.selectedTab = Math.min($scope.data.selectedTab + 1, 2) ;
			};
			$scope.previous = function() {
				$scope.data.selectedTab = Math.max($scope.data.selectedTab - 1, 0);
			};

		}]);
})();