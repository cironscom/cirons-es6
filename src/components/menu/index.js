import angular from 'angular';

import MenuController from './controller';

let menu = () => {
    return {
        template: require('./menu.html'),
        controller: 'MenuController',
        controllerAs: 'menu'
    };
};

export default angular.module('app.menu', [])
    .controller('MenuController', MenuController)
    .directive('mainMenu', menu)
    .name;
