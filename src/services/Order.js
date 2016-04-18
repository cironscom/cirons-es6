import CRUDService from './crud';

export default class Orders extends CRUDService {
    constructor($http){
        super($http);
        this.endpoint = 'orders';
    }
}
