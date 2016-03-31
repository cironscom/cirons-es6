export default class AppController {
    constructor($mdSidenav){
        this.$mdSidenav = $mdSidenav;
        this.appName = 'Cirons';
    }

    toggleMenu(){
        this.$mdSidenav('menu').toggle();
    }
}
AppController.$inject = ['$mdSidenav'];
