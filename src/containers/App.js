import React, { Component, PropTypes } from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import _ from 'underscore';
import Helmet from "react-helmet";

import Config from '../lib/Config';
import Header from '../components/Header';
import Login from '../pages/Login';
import Loading from '../components/Loading';
import Breadcrumb from '../components/Breadcrumb';
import Sidebar from '../components/Sidebar';

import AppActions from '../actions/AppActions';
import UserActions from '../actions/UserActions';
import UserStore from '../stores/UserStore';
import AppStore from '../stores/AppStore';

class App extends Component {
    static getStores() {
        return [AppStore, UserStore];
    }

    static getPropsFromStores() {
        return _.extend(AppStore.getState(), UserStore.getState());
    }

    componentDidMount() {
        //check network
        AppActions.checkNetwork();

        //init load user
        UserActions.fetchUser();
    }

    render() {
        let { children, isLoggedIn, loading, breadcrumb } = this.props;

        return (
            <div id="app">
                <Helmet
                    title="App"
                    titleTemplate={`%s - ${Config.appName}`}
                    defaultTitle={`${Config.appName}`}
                    meta={[
                        {"name": "description", "content": `${Config.appName} website`},
                        {"property": "og:type", "content": "website"}
                    ]}
                />
                <Sidebar />
                <div className="pusher">
                    <Header />
                    <Breadcrumb data={breadcrumb} />
                    {loading ? <Loading /> : null }
                    {isLoggedIn ?
                        children
                        :
                        <Login />
                    }
                </div>
            </div>
        );
    }
}

App.propTypes = {
    loading: PropTypes.bool.isRequired,
    networkOnline: PropTypes.bool.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    breadcrumb: PropTypes.array.isRequired
};

export default connectToStores(App);
