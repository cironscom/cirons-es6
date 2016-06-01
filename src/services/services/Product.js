import CRUDService from './crud';

export default class Product extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'products';
    
     this.schema = {
            id: Number,
            created_at: Date,
            updated_at: Date,
            name: String,
            sku: String,
            reference: String,
            cost_price: Number,
            price: Number,
            image: Number,
            using_stock: Number,
            supplier_id: Number,
            extra_cost_value: Number,
            extra_cost_type: String,
            currency: String,
            virtual: Number,
            vat_id: Number

        };
    }
}
