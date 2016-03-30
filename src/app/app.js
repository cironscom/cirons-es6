import angular from 'angular';

// require('angular-aria');
// require('angular-animate');
// require('angular-messages');

import AppController from './app.controller';
import uirouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

import routing from './app.config';
import services from '../services';
import components from '../components';

import '../style/app.scss';

let app = () => {
    return {
        template: require('./app.html'),
        controller: 'AppController',
        controllerAs: 'app'
    };
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, services, components, ngMaterial])
    .config(routing)
    .directive('app', app)
    .controller('AppController', AppController);

export default MODULE_NAME;
