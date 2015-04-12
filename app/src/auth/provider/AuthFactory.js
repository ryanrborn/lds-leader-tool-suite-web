(function() {
	'use strict';

	angular.module('Auth')
		.factory('Auth', ['$http', '$q', 'Constants', function($http, $q, Constants){
			var user = {};
			var token = localStorage.getItem('userToken') || sessionStorage.getItem('userToken');
			var redirect = false;

			var setToken = function(value) {
				token = value;
				sessionStorage.setItem('userToken', value);
				$http.defaults.headers.common.Authorization = value;
			};

			var auth = {
				token: function() {
					return token;
				},
				user: function() {
					return user;
				},
				isLoggedIn: function() {
					console.log(token);
					return !!token;
				},
				userType: function() {
					if (!!token) {
						if (user.is_staff) {
							return "staff";
						} else {
							return "user";
						}
					}
					return "guest";
				},
				setRedirect: function(newRedirect) {
					redirect = newRedirect;
				},
				redirect: function() {
					return redirect;
				},
				login: function(userData, remember) {
					var defer = $q.defer();
					if (token && userData.email === user.email) {
						defer.resolve(user);
					} else {
						$http({
							method: 'POST',
							url: Constants.protocol()+"://"+Constants.api_host()+"/auth/",
							headers: {
								"Authorization": undefined,
							},
							data: userData
						}).success(function(data) {
							setToken(data.token);
							if (remember) {
								localStorage.setItem('userToken', token);
							}
							auth.refreshUser().then(function(data) {
								defer.resolve(data);
							}, function(data) {
								defer.reject(data);
							});
						}).error(function(data, status) {
							defer.reject({"data":data, "status":status});
						});
					}
					return defer.promise;
				},
				logout: function() {
					redirect = false;
					setToken("");
				},
				refreshUser: function() {
					var defer = $q.defer();
					$http({
						method: 'GET',
						url: Constants.protocol()+"://"+Constants.api_host()+"/me/",
						headers: {
							'Authorization': 'Token '+token
						}
					}).success(function(data) {
						user = data;
						defer.resolve(data);
					}).error(function(data, status) {
						setToken("");
						defer.reject({"data":data, "status":status});
					});
					return defer.promise;
				},
				register: function(userData) {
					var defer = $q.defer();
					$http({
						method: 'POST',
						url: Constants.protocol()+"://"+Constants.api_host()+"/auth/create/",
						headers: {
							"Authorization": undefined
						},
						data: userData,
					}).success(function(data) {
						// automatically login user
						auth.login({"email":userData.email, "password":userData.password}).then(function(data) {
							// success
							defer.resolve(data);
						}, function(data) {
							// error
							defer.reject(data);
						});
					}).error(function(data, status) {
						defer.reject({"data":data, "status":status});
					});
					return defer.promise;
				},
				checkEmail: function(email) {
					var defer = $q.defer();
					if (email == undefined) {
						defer.reject();
					}
					$http({
						method: 'POST',
						url: Constants.protocol()+"://"+Constants.api_host()+"/auth/check/",
						headers: {
							"Authorization": undefined
						},
						data: {username:email}
					}).success(function(data) {
						// email found, so we fail
						defer.reject();
					}, function rejected(data) {
						// email not found, so we pass
						defer.resolve();
					});

					return defer.promise;
				},
				updateUser: function(userData) {
					// TODO
				},
			};

			auth.refreshUser();

			return auth;
		}]);
})();
