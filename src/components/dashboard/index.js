import angular from 'angular';

import router from './router';
import DashboardController from './controller';

export default angular.module('app.generics', [])
    .config(router)
    .controller('DashboardController', DashboardController)
    .name;
