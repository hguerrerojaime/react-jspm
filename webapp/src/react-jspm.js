import './prototypes/all';

import React from 'react';
import ReactDOM from 'react-dom';
import resolver from 'react-jspm/core/di';
import App from './App';

import router from 'react-jspm/core/router';

import 'font-awesome/css/font-awesome.min.css!';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

ReactDOM.render(
  router(),
  document.getElementById('app')
);
