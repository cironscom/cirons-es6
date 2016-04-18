import Service from './service';

export default class CRUDService extends Service {
    constructor($http){
        super();
        this.$http = $http;

        this.items = null;
    }

    create(object){

    }

    list(){
        if(this.items) return new Promise((resolve) => {resolve(this.items)});
        return this.$http.get(this.apiURL + '/api/v1/' + this.endpoint).then((items) => {
            this.items = items.data;
            return items.data;
        });
    }
}
CRUDService.$inject = ['$http'];
