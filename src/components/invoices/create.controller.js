import Controller from '../../controllers/Controller';

export default class InvoiceCreateController extends Controller {
    constructor($rootScope, Invoice) {
        super($rootScope);

    }
}
InvoiceCreateController.$inject.push('Invoice');
