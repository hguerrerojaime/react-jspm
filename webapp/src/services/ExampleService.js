import LookupService from './LookupService';
import request from 'superagent';

export default class ExampleService extends LookupService {

  constructor() {
    super();
  }

  lookupList(search = null) {
     return request.get('http://demo4627594.mockable.io/supervisors').
        then((response) => response.body)
     ;
  }
  lookupKey(key) {
    return request.get('http://demo4627594.mockable.io/supervisors/'+key).
       then((response) => response.body)
    ;
  }

}
