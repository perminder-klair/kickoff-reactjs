import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

import './StorybookTheme.css';

const StorybookTheme = ({ children }) => (
    <div className="story-container">
        <Helmet>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css" />
            {/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&libraries=places" />*/}
        </Helmet>
        {children}
    </div>
);

StorybookTheme.propTypes = {
    children: PropTypes.node.isRequired
};

export default StorybookTheme;
