export default function routes($stateProvider) {
    $stateProvider
        .state('users', {
            url: '/users',
            views: {
                '': {
                    template: require('./templates/list.html'),
                    controller: 'UserListController',
                    controllerAs: 'list'
                }
            }
        });
}

routes.$inject = ['$stateProvider'];
