import CRUDService from './crud';

export default class Dashboard extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'dashboards';
    }


    data(start, end){
    return this.$http.get(this.apiURL + this.endpoint + '/' ).then((dashboard) => dashboard.data);
    }

}