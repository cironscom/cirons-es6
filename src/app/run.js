export default function run($rootScope, $auth, $state, $cookies) {

    // is user authenticated?
    $rootScope.loggedIn = $auth.isAuthenticated();

    if (!$rootScope.loggedIn) {
        $state.go('login');
    }

    $rootScope.$on('$stateChangeSuccess', function(event, toState) {
        $rootScope.bodyClass = toState.name;
    });

    $rootScope.$on('$stateChangeStart', function(event, toState) {
        if (!$rootScope.loggedIn) {
            if (toState.name != 'login') {
                event.preventDefault();
            }
        }
    });

    $rootScope.logout = function() {
        $auth.logout();
        $cookies.remove('token');
        window.location.reload();
    };

}
run.$inject = ['$rootScope', '$auth', '$state', '$cookies'];
