export default function authenticationInterceptor($rootScope, $q, $cookies, $location, $timeout) {
    return {
        // Add authorization token to headers
        request: function(config) {
            config.headers = config.headers || {};
            if ($cookies.get('token')) {
                config.headers.Authorization = 'Bearer ' + $cookies.get('token');
            }
            return config;
        },
        // Intercept 401s and redirect you to login
        responseError: function(response) {

            if (response.status === 401 || response.data.error === 'token_not_provided') {

                $cookies.remove('token');
                // $rootScope.logout();

                if (!$location.path().match(/\/signup/)) {
                    $location.path('/auth');
                }

                $timeout(function() {
                    $rootScope.loggedin = false;
                }, 0);
                // remove any stale tokens
                $cookies.remove('token');
                return $q.reject(response);
            } else {
                return $q.reject(response);
            }
        }
    };

}

authenticationInterceptor.$inject = ['$rootScope', '$q', '$cookies', '$location', '$timeout'];
