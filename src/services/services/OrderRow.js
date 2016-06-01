import CRUDService from './crud';

export default class OrderRow extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'order_rows';
    
     this.schema = {
            id: Number,
            positon: Number,
            title: String,
            price: Number,
            discount: Number,
            discount_type: Number,
            q: Number,
            q_type: Number,
            product_id: Number,
            ordered: Number,
            cost_price: Number.
            md5: Number,
            vat: Number,
            created_at: Date,
            updated_at: Date,
            object_id: Number,
            object_type: String,
            vat_id: Number,
            total_vat: Number,
            row_total: Number,
            total_profit: Number,
            ordered_total_vat: Number,
            ordered_row_total: Number,
            ordered_total_profit: Number

        };
    
    }

}
