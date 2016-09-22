/*global $:true*/

import React, { Component, PropTypes } from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import { Link } from 'react-router';

import logo from '../assets/images/logo.png';
import avatar from '../assets/images/gravatar.jpg';

import UserActions from '../actions/UserActions';
import UserStore from '../stores/UserStore';

class Header extends Component {
    static getStores() {
        return [UserStore];
    }

    static getPropsFromStores() {
        return UserStore.getState();
    }

    componentDidMount() {
        $('.head-bar .ui.dropdown').dropdown();
    }

    componentDidUpdate() {
        $('.head-bar .ui.dropdown').dropdown();
    }

    logout = () => {
        UserActions.logout();
    };

    toggleSideMenu = () => {
        $('.ui.sidebar').sidebar('toggle');
    };

    render() {
        let { isLoggedIn, displayName } = this.props;

        return (
            <div>
                <div className="ui fixed head-bar">
                    <div className="ui container">
                        <div className="ui grid">
                            <div className="two wide column logo">
                                <i className="align justify icon show menu" onClick={this.toggleSideMenu} />
                                <Link to="/">
                                    <img className="ui fluid image" src={logo} alt="logo" />
                                </Link>
                            </div>
                            <div className="ten wide column">

                            </div>
                            <div className="four wide column right aligned">
                                {isLoggedIn ?
                                    <div className="ui right dropdown item">
                                        <img className="ui avatar image" src={avatar} alt="avatar"/>
                                        {displayName}
                                        <i className="dropdown icon"/>
                                        <div className="menu">
                                            <Link className="item" to="/account">My account</Link>
                                            <a className="item" onClick={this.logout}>Logout</a>
                                        </div>
                                    </div>
                                    :
                                    <Link className="item" to="/login">Login</Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Header.propTypes = {
    isLoggedIn: PropTypes.bool,
    displayName: PropTypes.string
};

export default connectToStores(Header);
