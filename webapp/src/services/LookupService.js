import Service from './Service';

export default class LookupService extends Service {

  constructor() {
     super();
     if (new.target === LookupService) {
       throw new TypeError("Cannot construct Abstract instances directly");
     }
  }

  lookupList(search = null) {
    throw new TypeError("This method is not implemented yet");
  }
  lookupKey(key) {
    throw new TypeError("This method is not implemented yet");
  }

}
