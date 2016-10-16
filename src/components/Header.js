import React from 'react';
import { Link } from 'react-router';

import logo from '../assets/images/logo.png';

const Header = () => (
    <div className="ui container">
        <div className="ui borderless stackable menu">
            <div className="item">
                <Link to="/">
                    <img className="ui fluid image logo" src={logo} alt="logo" style={{ width: '66px' }} />
                </Link>
            </div>
            <Link className="item" to="/">Home</Link>
            <Link className="item" to="/about">About</Link>
            <Link className="item" to="/contact">Contact</Link>
        </div>
    </div>
);

export default Header;
