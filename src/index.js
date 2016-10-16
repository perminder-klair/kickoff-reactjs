/* global document:true */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import './styles/style.css';
import App from './containers/App';
import Dashboard from './containers/Dashboard';
import About from './containers/About';
import Contact from './containers/Contact';
import NotFound from './pages/NotFound';

/**
 * ## Actions
 *  The necessary actions for dispatching our bootstrap values
 */
import { setVersion } from './core/global/globalActions';

/**
 *  The version of the app but not displayed yet
 */
import pack from '../package.json';

/**
 * ### configureStore
 */
import configureStore from './core/store';

const store = configureStore({});

const VERSION = pack.version;

store.dispatch(setVersion(VERSION));

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Dashboard} />
                <Route path="about" component={About} />
                <Route path="contact" component={Contact} />
                <Route path="*" component={NotFound} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
