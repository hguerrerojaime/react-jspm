import { Router, Route, Link, browserHistory } from 'react-router';


let router = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={require('react-jspm/application/index/Index')}>
        <Route path="invoice/new" component={require('dynabis/58bf041d5572472c343ffcc3/lc')}/>
      </Route>
    </Router>
  );
};
