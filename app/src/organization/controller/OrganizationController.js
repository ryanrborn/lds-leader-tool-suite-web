app.controller('OrganizationController', ['$scope', '$resource', 'llts_config', 'Auth', 'Page', function($scope, $resource, llts_config, Auth, Page) {
	Page.setTitle("My Organizations");
	var resourceHeader = {
		'Authorization': 'Token '+Auth.token()
	};
	var Organization = $resource(llts_config.protocol+"//"+llts_config.api_host+'/organizations/:id/', {id: '@id'}, {
		"get": {method: "GET", headers: resourceHeader},
		"save": {method: "POST", headers: resourceHeader},
		"query": {method: "GET", isArray: true, headers: resourceHeader},
		"delete": {method: "DELETE", headers: resourceHeader}
	});

	$scope.orgs = Organization.query(function() {
		//
	});

}]);