import CRUDService from './crud';

export default class Order extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'orders';
    
     this.schema = {
            id: Number,
            created_at: Date,
            updated_at: Date,
            contact_id: Number,
            invoice_id: Number,
            address_id: Number,
            status_id: Number,
            total_vat: Number,
            date: Date,
            sub_total: Number,
            price_list_id: Number,
            data: String,
            currency: String,
            currency_rate_date: Date,
            currency_rates: Object,
            current_status_id: Number,
            step: String,
            notes: String,
            shipping_cost: Number,
            shipping_address_id: Number,
            webshop_connections_id: Number,
            grand_total: Number,
            total_profit: Number,
            ordered_total_vat: Number,
            ordered_total_val: Number,
            ordered_sub_total: Number,
            ordered_grand_total: Number,
            ordered_total_profit: Number

        };
    }


    count(){
        return this.$http.get(this.apiURL + this.endpoint + '/' ).then((orders) => orders.data);
    }

    pending(){
        return this.$http.get(this.apiURL + this.endpoint + '/' ).then((orders) => orders.data);
    }

    pendingCount(){
        return this.$http.get(this.apiURL + this.endpoint + '/' ).then((orders) => orders.data);
    }

    pendingSum(){
        return this.$http.get(this.apiURL + this.endpoint + '/' ).then((orders) => orders.data);
    }

    generateInvoice(id){
        return this.$http.post(this.apiURL + this.endpoint + '/' + id + '/generate/invoice/').then((invoice) => invoice.data);
    }
    
}
