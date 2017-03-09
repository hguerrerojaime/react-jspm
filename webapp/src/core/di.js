import React from 'react';
import ReactDI from 'react-di';
import LookupService from 'react-jspm/services/LookupService';
import RecordService from 'react-jspm/services/RecordService';

let dependencies = {
  lookupService: new LookupService(),
  recordService: new RecordService()
}

let resolver = new ReactDI(dependencies);

export default resolver;
