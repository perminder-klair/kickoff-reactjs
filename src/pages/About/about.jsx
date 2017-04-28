import React from 'react';
import Helmet from 'react-helmet';

export default function () {
    return (
        <div className="ui container about">
            <Helmet title="About us" />
            <h3 className="ui top attached header">
                About us
            </h3>
            <div className="ui attached segment">
                <p>This is about page, coming soon!</p>
            </div>
        </div>
    );
}
