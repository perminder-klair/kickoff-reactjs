/*global $:true*/

import React, { Component } from 'react';
import Helmet from "react-helmet";

import AppActions from '../actions/AppActions';

class Dashboard extends Component {
    componentDidMount() {
        setTimeout(() => {
            AppActions.setBreadcrumb([{title: 'Dashboard'}]);
        }, 200);

        $('.dashboard .menu .item').tab();
    }

    render() {
        return (
            <div className="ui container dashboard">
                <Helmet title="Dashboard" />
                <h3 className="ui top attached header">
                    Dashboard
                </h3>
                <div className="ui attached segment">
                    <p>Welcome to react starting poing.</p>
                </div>
            </div>
        )
    }
}

export default Dashboard;
