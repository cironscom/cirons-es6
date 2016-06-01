import CRUDService from './crud';

export default class Invoice extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'invoices';

        this.schema = {
               id: Number,
               created_at: Date,
               updated_at: Date,
               order_id: Number,
               contact_id: Number,
               address_id: Number,
               notes: String,
               total_vat: Number,
               date: Date,
               sub_total: Number,
               duedays: Number,
               price_list_id: Number,
               data: String,
               currency: String,
               currency_rate_date: Date,
               currency_rates: Object,
               current_status_id: Number,
               credit_invoice: Number,
               step: String,
               invoice_no: Number,
               account_no: Number,
               due_date: Date,
               shipping_cost: Number,
               invoice_fee: Number,
               billing_address_id: Number,
               vat_no: String,
               grand_total: Number,
               total_profit: Number,
               booked_at: Date,
               deleted_at: Date
           };
    }

    count(){
        return this.$http.get(this.apiURL + this.endpoint + '/'  ).then((invoices) => invoices.data);
    }

    unpaidCount(){
        return this.$http.get(this.apiURL + this.endpoint + '/'  ).then((invoices) => invoices.data);
    }

    unpaidSum(){
        return this.$http.get(this.apiURL + this.endpoint + '/'  ).then((invoices) => invoices.data);
    }

    book(id){
        return this.$http.put(this.apiURL + this.endpoint + '/' + id + '/book').then((invoice) => invoice.data);
    }

    makeCredit(id){
        return this.$http.post(this.apiURL + this.endpoint + '/' + id + '/credit').then((invoice) => invoice.data);
    }

}
