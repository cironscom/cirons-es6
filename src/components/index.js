import angular from 'angular';

// all components
import generics from './generics';
import users from './users';
import dashboard from './dashboard';

export default angular.module('app.components', [
    generics,
    users,
    dashboard
]).name;
