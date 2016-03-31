import authenticationInterceptor from '../components/auth/interceptor';

export default function routing($urlRouterProvider, $locationProvider, $authProvider, $httpProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('dashboard');

    $authProvider.loginUrl = 'https://system.cirons.com/sample/api/v1/auth';
    $httpProvider.interceptors.push(authenticationInterceptor);
}
routing.$inject = ['$urlRouterProvider', '$locationProvider', '$authProvider', '$httpProvider'];
