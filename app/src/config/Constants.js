(function() {
	'use strict';

	angular.module('Config')
		.factory("Constants", ['$location', function ConstantsFactory($location) {
			var api_host = "local.llts-backend.com:8000";
			var protocol = $location.protocol();

			return {
				api_host: function() { return api_host; },
				protocol: function() { return protocol; }
			};
		}]);
})();