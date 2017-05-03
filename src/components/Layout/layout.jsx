import React from 'react';
import Helmet from 'react-helmet';

import Header from '../Header';
import Breadcrumb from '../../elements/Breadcrumb';

const {
    APP_NAME
} = require('../../core/constants').default;

export default function () {
    const { children, breadcrumb } = this.props;

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
}
