import CRUDService from './crud';

export default class Comment extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'comments';
    
       this.schema = {
            id: Number,
            created_at: Date,
            updated_at: Date,
            text: String,
            user_id: Number,
            url: String  

        };
    }

  comments(url){
        return this.$http.get(this.apiURL + this.endpoint + '/' + url).then((comments) => comments.data);
    }
}
