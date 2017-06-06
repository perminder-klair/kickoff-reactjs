import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { Wrapper } from '../../elements';

const Dashboard = function ({ gallery }) {
    return (
        <Wrapper>
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
        </Wrapper>
    );
};

Dashboard.propTypes = {
    gallery: PropTypes.object.isRequired
};

export default Dashboard;
