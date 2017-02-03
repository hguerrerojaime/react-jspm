import './prototypes/all';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'font-awesome/css/font-awesome.min.css!';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import loadDI from './ioc/load-di';

loadDI();


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
