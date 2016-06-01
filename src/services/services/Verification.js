import CRUDService from './crud';

export default class Verification extends CRUDService {

    constructor($http){
        super($http);
        this.endpoint = 'verifications';
         this.schema = {
            id: Number,
            created_at: Date,
            updated_at: Date,
      		date: Date,
      		description: Number,
      		amount: Number,
      		vat: Number,
      		contact_id:Number,
      		object_id: Number,
      		object_type: String

        };
  
    }

}
