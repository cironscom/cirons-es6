(function() {
  'use strict';
  module.exports = AuthenticationService;

  function AuthenticationService($location, $rootScope, $auth, $http, meFactory, $cookieStore, $q, $state) {

    var currentUser = {};

    var auth = {
      refresh: function() {
        if ($cookieStore.get('token')) {
          meService.async().then(function(user) {
            currentUser = user.data;
            $rootScope.user = user.data;
          });
          return currentUser;
        } else {
          var dfd = $q.defer();
          dfd.resolve(false);
          return dfd.promise;
        }
      },

      /**
       * Authenticate user and save token
       *
       * @param  {Object}   user     - login info
       * @param  {Function} callback - optional
       * @return {Promise}
       */
      login: function(user, callback) {
        var cb = callback || angular.noop;
        var deferred = $q.defer();

        $http.post('http://janalex.beta.cirons.com/api/v1/auth', {
          username: user.username,
          password: user.password
        }).
        success(function(data) {
          $cookieStore.put('token', data.token);
          $auth.setToken(data.token);

          meService.async().then(function(user) {
            currentUser = user.data;
          });
          
          deferred.resolve(data);
          $rootScope.$broadcast('loggedIn');
          return cb();
        }).
        error(function(err) {
          this.logout();
          deferred.reject(err);
          return cb(err);
        }.bind(this));

        return deferred.promise;
      },

      /**
       * Delete access token and user info
       *
       * @param  {Function}
       */
      logout: function() {
        $cookieStore.remove('token');
        currentUser = {};
      },

      /**
       * Gets all available info on authenticated user
       *
       * @return {Object} user
       */
      getCurrentUser: function() {
        return currentUser;
      },
    };

    auth.refresh();

    return auth;

  }

  AuthenticationService.$inject = ['$location', '$rootScope', '$auth', '$http', 'meFactory', '$cookieStore', '$q', '$state'];

})();
