import angular from 'angular';

// all directives
import menuLink from './menuLink';
import addToolbar from './addToolbar';
import listLayout from './listLayout';

export default angular.module('app.directives', [])
    .directive('menuLink', menuLink)
    .directive('addToolbar', addToolbar)
    .directive('listLayout', listLayout)
    .name;
