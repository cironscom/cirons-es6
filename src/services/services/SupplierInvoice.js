import CRUDService from './crud';

export default class SupplierInvoice extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'supplier_invoices';
         this.schema = {
            id: Number,
            created_at: Date,
            updated_at: Date,
            date: Date,
            merchant: String,
            sum: Number,
            vat: Number,
            employee_id: Number,
            user_id: Number,
            paid: Date,
            currency: String,
            deleted_at: Date,
            duedate: Date,
            multiple_vat: Number,
            recurring_id: Number,
            identifier: String,
            supplier_id: Number,
            account_no: Number,
            vat_amount: Number
                           
        };
	
	}

}
