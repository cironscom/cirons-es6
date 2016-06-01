import CRUDService from './crud';

export default class stock extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'stocks';
    
     this.schema = {
            created_at: Date,
            updated_at: Date,
            id: Number,
            product_id: Number,
            warehouse_id: Number,
            quantity: Number,
            data: String,
            exp_date: Date,
            batch: String,
            LOT: String
                         
        };
   
    }
       
}
