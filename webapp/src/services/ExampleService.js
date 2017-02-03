import LookupService from './LookupService';

import request from 'superagent';

export default class ExampleService extends LookupService {

  lookupList(search = null) {
     return request.get('http://demo4627594.mockable.io/supervisors').
        then((response) => response.body)
     ;
  }
  lookupKey(key) {
    throw new TypeError("This method is not implemented yet");
  }

}
