(function() {
	'use strict';

	angular.module('Organization')
		.service('OrganizationResource', ['$resource', 'Constants', function($resource, Constants) {
			return $resource(Constants.protocol()+"://"+Constants.api_host()+'/organizations/:id/', {id: '@id'});
		}]);
})();