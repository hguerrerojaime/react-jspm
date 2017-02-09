import './prototypes/all';

import React from 'react';
import ReactDOM from 'react-dom';
import resolver from 'react-jspm/core/di';
import App from './App';



import 'font-awesome/css/font-awesome.min.css!';
import 'jquery';
import 'bootstrap/dist/js/bootstrap';

resolver.inject(React);


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
