import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './users.routes';
import UserListController from './userlist.controller';

export default angular.module('app.users', [uirouter])
    .config(routes)
    .controller('UserListController', UserListController)
    .name;
