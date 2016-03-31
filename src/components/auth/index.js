import angular from 'angular';

import router from './router';
import AuthController from './controller';

export default angular.module('app.auth', [])
    .config(router)
    .controller('AuthController', AuthController)
    .name;
