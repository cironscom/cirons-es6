import angular from 'angular';

// all directives
import menuLink from './menuLink';
import addToolbar from './addToolbar';

export default angular.module('app.directives', [])
    .directive('menuLink', menuLink)
    .directive('addToolbar', addToolbar)
    .name;
