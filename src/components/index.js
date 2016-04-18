import angular from 'angular';

// all components
import generics from './generics';
import users from './users';
import dashboard from './dashboard';
import menu from './menu';
import auth from './auth';

import invoices from './invoices';

export default angular.module('app.components', [
    generics,
    users,
    dashboard,
    menu,
    auth,
    invoices
]).name;
