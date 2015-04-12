(function() {
	'use strict';

	angular.module('Organization', ['ngMaterial', 'Auth'])
		.run(['$http', 'Auth', function($http, Auth) {
			$http.defaults.headers.common.Authorization = "Token "+Auth.token();
		}]);
})();