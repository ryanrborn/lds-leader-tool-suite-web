app.controller('AuthController', ['$scope', 'Page', 'Auth', function($scope, Page, Auth){
	Page.setTitle("Register/Sign in");

	$scope.selectedTab = 0;
	
	$scope.next = function() {
		$scope.data.selectedTab = Math.min($scope.data.selectedTab + 1, 2) ;
	};
	$scope.previous = function() {
		$scope.data.selectedTab = Math.max($scope.data.selectedTab - 1, 0);
	};

}]);