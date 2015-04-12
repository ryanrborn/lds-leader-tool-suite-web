(function() {
	'use strict';

	angular.module('Auth')
		.controller('LoginController', ['$scope', '$location', '$mdToast', 'Auth', function($scope, $location, $mdToast, Auth) {

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
				Auth.login($scope.userData, $scope.remember).then(function(data){
					if (Auth.redirect()) {
						return $location.path(Auth.redirect());
					}
					$location.path('/organizations');
				}, function(data) {
					$mdToast.show(loginFailedToast);
				});
			};
		}]);
})();
