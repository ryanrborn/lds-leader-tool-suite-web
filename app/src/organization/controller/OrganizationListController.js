(function() {
	'use strict';

	angular.module('Organization')
		.controller('OrganizationListController', ['$scope', '$location', '$mdDialog', 'Constants', 'Page', 'OrganizationResource', function($scope, $location, $mdDialog, Constants, Page, OrganizationResource) {
			Page.setTitle("My Organizations");


			$scope.orgs = OrganizationResource.query();

			$scope.navigate = function(id) {
				$location.path('/organizations/'+id);
			};

			$scope.createDialog = function(evt) {
				$mdDialog.show({
					controller: 'CreateController',
					templateUrl: './src/organization/view/create-dialog.html',
					targetEvent: evt
				}).then(function(data) {
					$scope.orgs.push(data);
				});
			};

			$scope.deleteOrg = function(evt, i) {
				evt.stopPropagation();
				$scope.orgs[i].$delete(function() {
					$scope.orgs.splice(i, 1);
				});
			};

		}]);

})();
