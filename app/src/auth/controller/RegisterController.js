(function() {
	'use strict';

	angular.module('Auth')
		.controller('RegisterController', ['$scope', '$timeout', '$location', 'AuthFactory', function($scope, $timeout, $location, AuthFactory) {

			$scope.userData = {
				first_name: "",
				last_name: "",
				email: "",
				password: "",
				passwordV: ""
			};

			$scope.timer = null;

			$scope.register = function() {
				if ($scope.registerForm.$valid) {
					$scope.userData.username = $scope.userData.email;
					AuthFactory.register($scope.userData).then(function(data) {
						if (AuthFactory.redirect()) {
							return $location.path(AuthFactory.redirect());
						}
						$location.path('/organizations');
					});
				}
			};

			$scope.checkEmail = function() {
				$timeout.cancel($scope.timer);
				$scope.registerForm.email.$setValidity('unique', undefined);
				$scope.timer = $timeout(function() {
					AuthFactory.checkEmail($scope.userData.email).then(function() {
						$scope.registerForm.email.$setValidity('unique', true);
					}, function() {
						$scope.registerForm.email.$setValidity('unique', false);
					});
				}, 300)
			};


			$scope.checkMatch = function() {
				if ($scope.userData.password == "" || $scope.userData.passwordV == "") {
					$scope.registerForm.passwordV.$setValidity('mismatch', false);
					return;
				}
				$scope.registerForm.passwordV.$setValidity('mismatch', $scope.userData.password == $scope.userData.passwordV);
			};

		}]);
})();
