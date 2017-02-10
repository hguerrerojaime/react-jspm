import Service from './Service';
import request from 'superagent';

export default class LookupService extends Service {

  constructor(props) {
    super(Object.merge({
      serviceUrl:"http://demo4627594.mockable.io"
    },props));
  }

  lookupList(domainObject,search = null,view = null) {
     return request.get(this.props.serviceUrl+"/"+domainObject).
        then((response) => response.body)
     ;
  }
  lookupKey(domainObject,key,view = null) {
    return request.get(this.props.serviceUrl+"/"+domainObject+"/"+key).
       then((response) => response.body)
    ;
  }

}
