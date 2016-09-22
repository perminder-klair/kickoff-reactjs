import React, { Component } from 'react';
import Helmet from "react-helmet";

import LoginForm from '../forms/LoginForm';

import UserActions from '../actions/UserActions';
import AppActions from '../actions/AppActions';

class Login extends Component {
    componentDidMount() {
        setTimeout(() => {
            AppActions.setBreadcrumb([{title: 'Login'}]);
        }, 200);
    }

    handleSubmit = (value) => {
        UserActions.login(value);
    };

    render() {
        return (
            <div className="ui container">
                <Helmet title="Login" />
                <h1 className="ui header">Login</h1>
                <LoginForm handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default Login;
