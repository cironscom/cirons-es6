import Service from './Service';
const SchemaObject = require('schema-object');
const lodash = require('lodash');

export default class CRUDService extends Service {
    constructor($http) {
        super();
        this.$http = $http;

        this.items = null;

        this.schema = null;
    }

    list() {
        if (this.items) return new Promise((resolve) => {
            /**
            If items is already loaded once then we just fetch those again in a Promise.
            */
            resolve(this.items);
        });
        return this.$http.get(this.apiURL + '/api/v1/' + this.endpoint).then((items) => {
            /**
            Downloads the list of objects and store it to service so we dont have to download them again.
            */
            this.items = items.data;
            return items.data;
        });
    }

    update(id, data) {
        if(this.schema){
            /**
            If has schema it removes unwanted keys from data-object and also validates and transform data to correct types like date, string and numbers.
            */
            var ItemSchema = new SchemaObject(this.schema);
            data = new ItemSchema(data).toObject();
        }

        return this.$http.put(this.apiURL + '/api/v1/' + this.endpoint, data).then((updated) => {
            /**
            Updates the this.items list with updated item replacing only the affected item.
            */
            this.items = lodash.map(this.items, (item) => {
                if(item.id == id){
                    item = updated;
                }
            });
            return updated;
        });
    }

}
CRUDService.$inject = ['$http'];
