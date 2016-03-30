import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './routes';
import UserListController from './list.controller';
import service from './service';

export default angular.module('app.users', [uirouter])
    .config(routes)
    .controller('UserListController', UserListController)
    .service('users', service)
    .name;
