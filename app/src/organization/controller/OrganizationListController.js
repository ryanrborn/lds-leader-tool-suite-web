(function() {
	'use strict';

	angular.module('Organization')
		.controller('OrganizationListController', ['$scope', '$resource', '$mdDialog', 'Constants', 'Page', 'OrganizationResource', function($scope, $resource, $mdDialog, Constants, Page, OrganizationResource) {
			Page.setTitle("My Organizations");


			$scope.orgs = OrganizationResource.query(function() {
				//
			});

			$scope.createDialog = function(evt) {
				$mdDialog.show({
					controller: 'CreateController',
					templateUrl: './src/organization/view/create-dialog.html',
					targetEvent: evt
				}).then(function(data) {
					$scope.orgs.push(data);
				});
			};

		}]);

})();
