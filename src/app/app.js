import angular from 'angular';

import AppController from './app.controller';
import uirouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

import theme from './theme';
import routing from './app.config';
import services from '../services';
import components from '../components';
import directives from '../directives';

import '../style/app.scss';

let app = () => {
    return {
        template: require('./app.html'),
        controller: 'AppController',
        controllerAs: 'app'
    };
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, services, components, directives, ngMaterial])
    .config(routing)
    .config(theme)
    .directive('app', app)
    .controller('AppController', AppController);

export default MODULE_NAME;
