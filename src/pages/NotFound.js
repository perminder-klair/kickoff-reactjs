import React from 'react';
import Helmet from "react-helmet";

const NotFound = () => {
    return (
        <div>
            <Helmet title="Not found" />
            <div className="ui icon message">
                <i className="warning sign icon"/>
                <div className="content">
                    <div className="header">
                        Page not found
                    </div>
                    <p>Page your are looking for does not exists.</p>
                </div>
            </div>
        </div>
    )
};

export default NotFound;