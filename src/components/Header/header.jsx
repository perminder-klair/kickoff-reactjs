import React from 'react';
import { Link } from 'react-router';

import './header.css';

export default function () {
    return (
        <div className="ui container">
            <div className="ui borderless stackable menu">
                <Link className="item" to="/">
                    Youngworks
                </Link>
                <Link className="item" to="/">Home</Link>
                <Link className="item" to="/about">About</Link>
                <Link className="item" to="/contact">Contact</Link>
            </div>
        </div>
    );
}
