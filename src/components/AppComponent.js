import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

import Header from './Header';
import Loading from './Loading';
import Breadcrumb from './Breadcrumb';

const {
    APP_NAME
} = require('../core/constants').default;

const AppComponent = ({ children, breadcrumb, rehydrationCompleted }) => {
    // wait until rehydration is completed by redux from local storage
    if (!rehydrationCompleted) {
        return <Loading />;
    }

    return (
        <div id="app">
            <Helmet
                title="App"
                titleTemplate={`%s - ${APP_NAME}`}
                defaultTitle={`${APP_NAME}`}
                meta={[
                    { name: 'description', content: `${APP_NAME} website` },
                    { property: 'og:type', content: 'website' }
                ]} />
            <Header />
            <Breadcrumb data={breadcrumb} />
            { children }
        </div>
    );
};

AppComponent.propTypes = {
    rehydrationCompleted: PropTypes.bool,
    breadcrumb: PropTypes.array,
    children: PropTypes.element,
    actions: PropTypes.object
};

export default AppComponent;
