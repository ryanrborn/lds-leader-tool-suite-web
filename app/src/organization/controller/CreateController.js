(function() {
	'use strict';

	angular.module('Organization')
		.controller('CreateController', ['$scope', '$mdDialog', 'OrganizationResource', function($scope, $mdDialog, OrganizationResource) {
			$scope.name = "";

			$scope.create = function() {
				if ($scope.name != "") {
					var newOrg = new OrganizationResource();
					newOrg.name = $scope.name;
					newOrg.$save(function(u, putResponseHeaders) {
						$mdDialog.hide(newOrg);
					});
				}
			};

			$scope.cancel = function() {
				$mdDialog.cancel();
			};
		}]);
})();