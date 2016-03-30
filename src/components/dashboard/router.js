export default function routes($stateProvider) {
    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            views: {
                '': {
                    template: require('./templates/main.html'),
                    controller: 'DashboardController',
                    controllerAs: 'dashboard'
                }
            }
        });
}

routes.$inject = ['$stateProvider'];
