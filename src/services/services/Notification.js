import CRUDService from './crud';

export default class Notification extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'notifications';
    
     this.schema = {
            id: Number,
            created_at: Date,
            updated_at: Date,
            user_id: Number,
            from_user_id: Number,
            text: Number,
            read: Number,
            delivered: Number,
            type: String,
            html: String,
            link: String,
            object_id: Number,
            object_type: String

        };
    }

    return(token, type){
        return this.$http.post(this.apiURL + this.endpoint + '/'  + token, type).then((notifications) => notifications.data);
    }

}