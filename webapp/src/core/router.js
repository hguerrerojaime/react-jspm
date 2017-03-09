import React from 'react';
import { Router,IndexRoute, Route, Link, browserHistory } from 'react-router';

import App from 'react-jspm/App';
import InvoiceNew from 'react-jspm/application/invoice/InvoiceNew';
import Index from 'react-jspm/application/index/Index';
import Provider__c_Create from 'dynabis/l/58c193dc557247095434b11b/create';

let router = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="invoice" component={Provider__c_Create}/>
      </Route>
    </Router>
  );
};

export default router;
