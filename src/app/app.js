import angular from 'angular';

import uirouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import satellizer from 'satellizer';
import ngCookies from 'angular-cookies';
import ngAria from 'angular-aria';

window.d3 = require('d3');
window.c3 = require('c3');
require('c3-angular');

import AppController from './app.controller';
import run from './run';

import theme from './theme';
import routing from './app.config';
import services from '../services';
import components from '../components';
import directives from '../directives';

import '../../node_modules/c3/c3.min.css';
import '../style/app.scss';

let app = () => {
    return {
        template: require('./app.html'),
        controller: 'AppController',
        controllerAs: 'app'
    };
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, services, components, directives, ngMaterial, ngCookies, satellizer, ngAria, 'gridshore.c3js.chart'])
    .run(run)
    .config(routing)
    .config(theme)
    .directive('app', app)
    .controller('AppController', AppController);

export default MODULE_NAME;
