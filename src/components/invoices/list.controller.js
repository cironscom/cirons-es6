import Controller from '../../controllers/Controller';

export default class InvoiceListController extends Controller {
    constructor($rootScope, Invoice) {
        super($rootScope);

        $rootScope.addButton = {
            state: 'invoices.create'
        };

        console.info(Invoice);

        this.invoices = [];
        Invoice.list().then((invoices) => {
            this.invoices = invoices;

        });

    }
}
InvoiceListController.$inject.push('Invoice');
