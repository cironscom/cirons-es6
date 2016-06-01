import angular from 'angular';

import InvoiceListController from './list.controller';
import InvoiceCreateController from './create.controller';
import router from './router';


export default angular.module('app.invoices', [])
    .controller('InvoiceListController', InvoiceListController)
    .controller('InvoiceCreateController', InvoiceCreateController)
    .config(router)
    .name;
