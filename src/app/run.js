const getMonthName = function(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    let d = new Date();

    return monthNames[d.getMonth()].toLowerCase();
}

export default function run($rootScope, $auth, $state, $cookies) {

    // is user authenticated?
    $rootScope.loggedIn = $auth.isAuthenticated();

    if (!$rootScope.loggedIn) {
        $state.go('login');
    }

    $rootScope.$on('$stateChangeSuccess', function(event, toState) {
        $rootScope.bodyClass = toState.name;
        $rootScope.addButton = null;
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

    $rootScope.monthName = getMonthName();

}
run.$inject = ['$rootScope', '$auth', '$state', '$cookies'];
