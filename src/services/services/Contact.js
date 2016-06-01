import CRUDService from './crud';

export default class Contact extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'contacts';
    
     this.schema = {
            id: Number,
            created_at: Date,
            updated_at: Date,
            title: String,
            first_name: String,
            last_name: String,
            middle_name: String,
            emails: String,
            primary_email: String,
            phones: Number,
            primary_phone: Number,
            type: String,
            company_name: String,
            financial_info_id: Number,
            address_id: Number,
            vat_no: Number,
            deleted_at: Date

        };
    }
}
