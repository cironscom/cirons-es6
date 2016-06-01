import CRUDService from './crud';

export default class PurchaseOrder extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'purchase_orders';
    
     this.schema = {
            id: Number,
            created_at: Date,
            updated_at: Date,
            supplier_id: Number,
            delivery_address_id: Number,
            step: String,
            date: Date,
            currency: String,
            supplier_invoice_id: Number,
            data: String,
            email_sent: Number,
            email_tracked: Number,
            user_id: Number,
            grand_total: Number,
            sub_total: Number,
            total_vat: Number

        };
   
    }

}
