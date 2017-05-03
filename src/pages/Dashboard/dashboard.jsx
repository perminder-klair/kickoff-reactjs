import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

import './dashboard.scss';

const Dashboard = function ({ gallery }) {
    return (
        <div className="ui container dashboard">
            <Helmet title="Dashboard" />
            <h3 className="ui top attached header">
                Dashboard
            </h3>
            <div className="ui attached segment">
                <p>Welcome to react starting poing.</p>
                <div className="ui divider" />

                <div className="ui medium header">Gallery</div>
                <div className="ui small images">
                    {gallery.data.length === 0 ?
                        <p>No gallery images found</p>
                        :
                            gallery.data.map(item =>
                                <img key={item._id} src={item.data.image.url} alt={item.data.title} />
                    )}
                </div>
            </div>
        </div>
    );
};

Dashboard.propTypes = {
    gallery: PropTypes.object.isRequired
};

export default Dashboard;
