export default function router($stateProvider) {

    $stateProvider
        .state('login', {
            url: '/auth',
            views: {
                '': {
                    template: require('./templates/login.html'),
                    controller: 'AuthController',
                    controllerAs: 'auth'
                }
            }
        });

}

router.$inject = ['$stateProvider'];
