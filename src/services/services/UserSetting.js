import CRUDService from './crud';

export default class UserSetting extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'me';
    }

    
    edit(user){
        return this.$http.put(this.apiURL + this.endpoint + '/'  + user).then((done) => done.data);
    }

 }
