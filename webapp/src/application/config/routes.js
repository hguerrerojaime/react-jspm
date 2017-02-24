import { Router, Route, Link, browserHistory } from 'react-router';


let router = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={require('react-jspm/application/index/Index')}>
        <Route path="invoice/new" component={require('react-jspm/application/invoice/InvoiceNew')}/>
      </Route>
    </Router>
  );
};
