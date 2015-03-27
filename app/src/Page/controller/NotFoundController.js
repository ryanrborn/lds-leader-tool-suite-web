app.controller('NotFoundController', ['$scope', 'Page', function($scope, Page){
	$scope.page = Page;
	$scope.page.setTitle("Not Found");
}]);