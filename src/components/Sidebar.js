/*global $:true*/

import React, { Component } from 'react';
import { Link } from 'react-router';

class Sidebar extends Component {
    componentDidMount() {        //
        //// Initialize the sidebar
        $('.ui.sidebar')
            .sidebar({
                transition: 'overlay',
                context: $('#app')
            })
            .sidebar('attach events', '.show.menu');
    }

    toggle = () => {
        $('.ui.sidebar').sidebar('toggle');
    };

    render() {
        return (
            <div className="ui left vertical inverted sidebar labeled icon menu">
                <Link className="item" to="/" onClick={this.toggle}>
                    <i className="home icon"/>
                    Home
                </Link>
                <Link className="item" to="/account" onClick={this.toggle}>
                    <i className="spy icon"/>
                    Account
                </Link>
            </div>
        )
    }
}

export default Sidebar;
