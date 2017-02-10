import React from 'react';
import ReactDI from 'react-di';
import LookupService from 'react-jspm/services/LookupService';

let dependencies = {
  lookupService: new LookupService()
}

let resolver = new ReactDI(dependencies);

export default resolver;
