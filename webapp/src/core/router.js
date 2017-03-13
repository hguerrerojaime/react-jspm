import React from 'react';
import { Router,IndexRoute, Route, Link, browserHistory } from 'react-router';

import App from 'react-jspm/App';
import InvoiceNew from 'react-jspm/application/invoice/InvoiceNew';
import Index from 'react-jspm/application/index/Index';

import Provider__c_List from 'dynabis/58c43dda9740a624d8f973df/lc';
import Provider__c_New from 'dynabis/l/58c43f589740a624d8f973e3/new';
import Provider__c_Show from 'dynabis/l/58c43f589740a624d8f973e3/show';
import Provider__c_Edit from 'dynabis/l/58c43f589740a624d8f973e3/edit';

let router = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="provider" component={Provider__c_List} />
        <Route path="provider/new" component={Provider__c_New} />
        <Route path="provider/:id" component={Provider__c_Show} />
        <Route path="provider/:id/edit" component={Provider__c_Edit} />
      </Route>
    </Router>
  );
};

export default router;
