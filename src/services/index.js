import angular from 'angular';
import Authenticate from './services/Authenticate';
import Authentication from './services/Authentication';
import Calendar from './services/Calendar';
import Comment from './services/Comment';
import Contact from './services/Contact';
import crud from './services/crud';
import Dashboard from './services/Dashboard';
import Info from './services/Info';
import Interceptor from './services/Interceptor';
import Invoice from './services/Invoice';
import Notification from './services/Notification';
import Order from './services/Order';
import Payment from './services/Payment';
import Product from './services/Product';
import PurchaseOrder from './services/PurchaseOrder';
import Receipt from './services/Receipt';
import Service from './services/Service';
import stock from './services/stock';
import Supplier from './services/Supplier';
import SupplierInvoice from './services/SupplierInvoice';
import User from './services/User';
import UserSetting from './services/UserSetting';
import Vat from './services/Vat';
import Verification from './services/Verification';
import Warehouse from './services/Warehouse';


export default angular.module('app.services', [])
    .service('Authenticate', Authenticate)
    .service('Authentication', Authentication)
    .service('Calendar', Calendar)
    .service('Comment', Comment)
    .service('Contact', Contact)
    .service('Dashboard', Dashboard)
    .service('Info', Info)
    .service('Interceptor', Interceptor)
    .service('Invoice', Invoice)
    .service('Notification', Notification)
    .service('Order', Order)
    .service('Payment', Payment)
    .service('Product', Product)
    .service('PurchaseOrder', PurchaseOrder)
    .service('Receipt', Receipt)
    .service('stock', stock)
    .service('Supplier', Supplier)
    .service('SupplierInvoice', SupplierInvoice)
    .service('User', User)
    .service('UserSetting', UserSetting)
    .service('Vat', Vat)
    .service('Verification', Verification)
    .service('Warehouse', Warehouse)
    .name;
