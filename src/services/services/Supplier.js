import CRUDService from './crud';

export default class Supplier extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'suppliers';
     
     this.schema = {
            id: Number,
            created_at: Date,
            updated_at: Date,
            company_name: String,
            contact_id: Number,
            address_id: Number,
            company_number: String,
            vat_no: String,
            default_category: Number,
            default_vat: Number,
            delivery_days: Number,
            deleted_at: Date
                           
        };
    
    }
 
}
