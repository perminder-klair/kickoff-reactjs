/* global document:true */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import './styles/style.css';

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

const scrollToTop = () => {
    const pusher = document.getElementById('app');
    if (pusher !== null) {
        pusher.scrollIntoView();
    }
};

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} onUpdate={scrollToTop}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Dashboard} />
                <Route path="about" component={About} />
                <Route path="contact" component={Contact} />
                <Route path="*" component={NotFound} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
