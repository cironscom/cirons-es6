export default function routes($stateProvider) {
    $stateProvider
        .state('invoices', {
            url: '/invoices',
            views: {
                '@': {
                    template: require('./templates/list.html'),
                    controller: 'InvoiceListController',
                    controllerAs: 'list'
                }
            }
        })
        .state('invoices.create', {
            url: '/create',
            views: {
                '@': {
                    template: require('./templates/create.html'),
                    controller: 'InvoiceCreateController',
                    controllerAs: 'create'
                }
            }
        })
}

routes.$inject = ['$stateProvider'];
