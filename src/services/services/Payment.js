import CRUDService from './crud';

export default class Payment extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'payments';
     
     this.schema = {
            id: Number,
            created_at: Date,
            updated_at: Date,
            user_id: Number,
            object_id: Number,
            object_type: String, 
            amount: Number,
            currency: String,
            date: Date,
            statement_id: Number,
            statement_title: String,
            deleted_at: Date,
            income_account_no: Number   

        };
    }
}
