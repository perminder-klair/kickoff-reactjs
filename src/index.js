/* global document:true */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import registerServiceWorker from './core/utils/registerServiceWorker';
import theme from './styles/theme';
import './styles/style.css';

/**
 * ## Actions
 *  The necessary actions for dispatching our bootstrap values
 */
import { Creators } from './core/global/globalActions';

/**
 * ### configureStore
 */
import configureStore from './core/store';

const { VERSION } = require('./core/constants').default;

const store = configureStore({});

store.dispatch(Creators.setVersion(VERSION));

const scrollToTop = () => {
	const pusher = document.getElementById('app');
	if (pusher !== null) {
		pusher.scrollIntoView();
	}
};
 
ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<Router history={browserHistory} onUpdate={scrollToTop}>
				<Route path="/" component={Layout}>
					<IndexRoute component={Dashboard} />
					<Route path="about" component={About} />
					<Route path="contact" component={Contact} />
					<Route path="*" component={NotFound} />
				</Route>
			</Router>
		</ThemeProvider>
	</Provider>,
	document.getElementById('root'),
);

registerServiceWorker();
