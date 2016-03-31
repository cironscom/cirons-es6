export default function run($rootScope, $auth){

    // is user authenticated?
    $rootScope.loggedIn = $auth.isAuthenticated();

}
run.$inject = ['$rootScope', '$auth'];
