(function() {
	'use strict';

	angular.module('Organization')
		.controller('OrganizationDetailController', ['$scope', '$routeParams', 'Page', 'OrganizationResource', function($scope, $routeParams, Page, OrganizationResource) {
			$scope.org = OrganizationResource.get({id:$routeParams.id}, function() {
				Page.setTitle($scope.org.name);
				// do something...
			})
		}]);
})();