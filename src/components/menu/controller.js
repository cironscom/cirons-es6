export default class MenuController {
    constructor() {
        this.items = [{
            title: 'Menu'
        }, {
            title: 'Dashboard',
            state: 'dashboard',
            icon: 'dashboard'
        }, {
            title: 'Sales',
            children: [{
                title: 'Orders',
                state: 'orders'
            }]
        },{
            title: 'Sales',
            children: [{
                title: 'Orders',
                state: 'orders'
            }]
        },{
            title: 'Sales',
            children: [{
                title: 'Orders',
                state: 'orders'
            }]
        }];
    }
}
MenuController.$inject = [];
