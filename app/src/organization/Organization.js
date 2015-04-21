(function() {
	'use strict';

	angular.module('Organization', ['ngMaterial', 'Auth'])
		.run(['$rootScope', '$http', 'Auth', function($rootScope, $http, Auth) {
			$rootScope.$watch(function() { return Auth.token(); }, function(newValue, oldValue) {
				$http.defaults.headers.common.Authorization = "Token "+newValue;
			});
		}]);
})();