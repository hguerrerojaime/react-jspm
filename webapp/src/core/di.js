import React from 'react';
import ReactDI from 'react-di';
import ExampleService from 'react-jspm/services/ExampleService';

let dependencies = {
  exampleService: new ExampleService()
}

let resolver = new ReactDI(dependencies);

export default resolver;
