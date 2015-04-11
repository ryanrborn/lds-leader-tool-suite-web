(function() {
	'use strict';

	angular.module('Auth')
		.controller('LoginController', ['$scope', '$location', '$mdToast', 'AuthFactory', function($scope, $location, $mdToast, AuthFactory) {

			$scope.userData = {
				email: "",
				password: "",
			};
			$scope.remember = false;

			var loginFailedToast = $mdToast.simple()
										.content("Couldn't sign in with credentials entered.")
										.position("top right");

			$scope.login = function() {
				$scope.userData.username = $scope.userData.email;
				AuthFactory.login($scope.userData, $scope.remember).then(function(data){
					if (AuthFactory.redirect()) {
						return $location.path(AuthFactory.redirect());
					}
					$location.path('/organizations');
				}, function(data) {
					$mdToast.show(loginFailedToast);
				});
			};
		}]);
})();