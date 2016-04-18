import CRUDService from './crud';

export default class Invoice extends CRUDService {
    constructor($http){
        super($http);
        this.endpoint = 'invoices';
    }
}
