import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import './styles/style.css';
import App from './containers/App';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Account from './pages/Account';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard} />
            <Route path="account" component={Account}/>
            <Route path="about" component={About}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
