import React, { Component, PropTypes } from 'react';
import _ from 'underscore';

import Button from '../elements/Button';
import TextInputGroup from '../elements/TextInputGroup';

class LoginForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            username: '',
            password: ''
        };
    }

    onPress = () => {
        let { username, password } = this.state;

        if (!_.isNull(username) && !_.isNull(password)) {
            this.props.handleSubmit({username, password});
        }
    };

    render() {
        return (
            <div className="ui form">
                <TextInputGroup
                    name="username"
                    label="Email"
                    value={this.state.username}
                    onChange={(e) => this.setState({username: e.target.value})}/>
                <TextInputGroup
                    name="password"
                    label="Password"
                    type="password"
                    value={this.state.password}
                    onChange={(e) => this.setState({password: e.target.value})}/>
                <Button onClick={this.onPress}>Login</Button>
            </div>
        );
    }
}

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

module.exports = LoginForm;
