(function() {
	'use strict';

	angular.module('Organization')
		.controller('OrganizationController', ['$scope', '$resource', 'Constants', 'Page', function($scope, $resource, Constants, Page) {
			Page.setTitle("My Organizations");

			var Organization = $resource(Constants.protocol()+"://"+Constants.api_host()+'/organizations/:id/', {id: '@id'});

			$scope.orgs = Organization.query(function() {
				//
			});

		}]);

})();
