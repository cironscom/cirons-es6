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
            },{
                title: 'Invoices',
                state: 'invoices'
            },{
                title: 'Products',
                state: 'products'
            },{
                title: 'Customers',
                state: 'customers'
            }]
        },{
            title: 'Expenses',
            children: [{
                title: 'Receipts',
                state: 'receipts'
            },{
                title: 'Supplier Invoices',
                state: 'supplier_invoices'
            },{
                title: 'Suppliers',
                state: 'suppliers'
            }]
        },{
            title: 'Stock',
            children: [{
                title: 'Warehouses',
                state: 'warehouses'
            },{
                title: 'Products',
                state: 'products'
            }]
        },{
            title: 'Purchasing',
            children: [{
                title: 'Purchase Orders',
                state: 'po'
            }]
        },{
            title: 'HR',
            children: [{
                title: 'Employees',
                state: 'employees'
            }]
        },{
            title: 'Accounting',
            children: [{
                title: 'Verifications',
                state: 'verifications'
            },{
                title: 'VAT',
                state: 'vat'
            }]
        },{
            title: 'System Admin',
            state: 'system_admin'
        }];
    }
}
MenuController.$inject = [];
