app.factory('Auth', ['$http', '$q', 'llts_config', function($http, $q, llts_config){
	var user = {};
	var token = false:

	var auth = {
		login: function(usernamePassword) {
			var defer = $q.defer();
			if (token && username !== user.username) {
				$http.post(llts_config.protocol+llts_config.api_host+"/auth/", usernamePassword).success(function(data) {
					token = data.token;
					// get user and "resolve" that
				}).error(function(data, status) {
					defer.reject({"data":data, "status":status});
				});
			} else {
				defer.resolve(user);
			}
			return defer.promise;
		},
		logout: function() {
			token = false;
		},
		user: function() {
			return user;
		},
		register: function(userData) {
			var defer = $q.defer();
			$http.post(llts.config.protocol+llts_config.api_host+"/auth/create/", userData).success(function(data) {
				// automatically login user
				auth.login({"username":userData.username, "password":userData.password}).then(function(data) {
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
		updateUser: function(userData) {
			// TODO
		}
	}

	return auth;
}]);