import CRUDService from './crud';

export default class User extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'users';

         this.schema = {
            id: Number,
            username: String,
            email: String,
            created_at: Date,
            updated_at: Date,
            rememeber_token: String,
            first_name: String,
            last_name: String,
            nick_name: String,
            job_title: String,
            image: Number,
            salary_date: Date,
            calendar_color: String

        };
   
    }

}
