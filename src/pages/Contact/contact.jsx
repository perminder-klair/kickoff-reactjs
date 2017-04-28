import React from 'react';
import Helmet from 'react-helmet';

export default function () {
    return (
        <div className="ui container contact">
            <Helmet title="Contact us" />
            <h3 className="ui top attached header">
                Contact us
            </h3>
            <div className="ui attached segment">
                <p>This is contact page, coming soon!</p>
            </div>
        </div>
    );
}
